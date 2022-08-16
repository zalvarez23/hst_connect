'use strict';

angular.module('app.controllers')

.controller('yourDoctorCtrl', ['$rootScope','$scope', '$location', '$ionicPopup', '$translate', '$filter', '$ionicLoading', 'yourDoctorService', 'localStorageFactory', 'locationService', '$cordovaInAppBrowser',
	function($rootScope,$scope, $location, $ionicPopup, $translate, $filter, $ionicLoading, yourDoctorService, localStorageFactory, locationService, $cordovaInAppBrowser) {
		console.log("Messages page loaded");

		// Asking to get current location
		locationService.checkAndGetLocation();

		$scope.pcpinfo = localStorageFactory.data.pcpinfo || {};
		var addressFields = ['Address1', 'Address2', 'City', 'State'];
		var addressValues = [];
		$scope.pcpinfo.formattedaddress = "";

		/*for(var i in addressFields) {
			var field = addressFields[i];
			if($scope.pcpinfo[field])
				addressValues.push($scope.pcpinfo[field]);
		}*/

		var obj = $scope.pcpinfo;
		if (obj.Address1 != undefined) {
			var adress2 = obj.Address2.length == 0 ? "" : ", " + obj.Address2 + " ";
			$scope.pcpinfo.formattedaddress = obj.Address1 + adress2;
			$scope.pcpinfo.citystateZip =  obj.City + ", " + obj.State + " " + obj.Zip;	
			
		}		
		//$scope.pcpinfo.formattedaddress = addressValues.join(", ");

		$ionicLoading.show({
			template: '<p>'+$translate.instant('LOADING_YOUR_DOCTOR_INFO')+'</p><ion-spinner></ion-spinner>'
		});

		var yourDoctor = yourDoctorService.yourDoctor;
		
		var postData = {};
		postData["AppID"] = localStorageFactory.data.AppID;
		postData["MemberId"] = localStorageFactory.data.MemberId;
		postData["GroupId"] = localStorageFactory.data.GroupId;
		postData["BuildVersion"] = localStorage["Version"];
		postData["Device_Type"] = localStorage["DeviceType"];
		postData["DeviceId"] = localStorageFactory.getDeviceID(); 
		getPcpInfo();

		function getPcpInfo() {

			if(localStorageFactory.data.pcpinfo != null) {
				$ionicLoading.hide(); // Hide loading overlay
				$scope.pcpinfo = localStorageFactory.data.pcpinfo;
				console.log("Doctor info already downloaded");
				return;
			}

			// Calling the API
			yourDoctor.getDoctorDetails(postData).$promise.then(function(response) {

				$ionicLoading.hide(); // Hide loading overlay

				console.log("Success : ");
				
				if(response.status.toLowerCase() == "ok") {
					
					localStorageFactory.data.pcpinfo = response.message || null; 
					$scope.pcpinfo = localStorageFactory.data.pcpinfo || {};

					var addressFields = ['Address1', 'Address2', 'City', 'State'];
					var addressValues = [];
					$scope.pcpinfo.formattedaddress = "";

					for(var i in addressFields) {
						var field = addressFields[i];
						if($scope.pcpinfo[field])
							addressValues.push($scope.pcpinfo[field]);
					}

					$scope.pcpinfo.formattedaddress = addressValues.join(", ");

				} else {
					console.log(response);
					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('INVALID_DATA')
					});
					alertPopup.then(function(res) {
						console.log('Invalid data');
					});
				}

			}, function(error) {
				$ionicLoading.hide(); // Hide loading overlay

				console.log("Error : ");
				console.log(error);

				// Show network Error
				var alertPopup = $ionicPopup.alert({
					title: $translate.instant('ERROR'),
					template: $translate.instant('NO_CONN_ERR')
				});
				alertPopup.then(function(res) {
					console.log('No internet connection Error');
				});
			});
		}

		$scope.openGoogleDirection = function() {
			// Asking to get current location
			locationService.canAskRepeatedly(true);
			locationService.checkAndGetLocation();

			var currentlocation = localStorageFactory.data.currentlocation;
			if(currentlocation == null || currentlocation.lat == null) {
				console.log("Current location is not available");
				showAlert($translate.instant('ENTER_YOUR_LOCATION'));
				return;
			} else {
				currentlocation.lat = isNaN(currentlocation.lat) ? 0.0 : parseFloat(currentlocation.lat).toFixed(6);
				currentlocation.long = isNaN(currentlocation.long) ? 0.0 : parseFloat(currentlocation.long).toFixed(6);
			}

			var doctorLocation = {};
			if(localStorageFactory.data.pcpinfo != null) {
				doctorLocation["lat"] = localStorageFactory.data.pcpinfo["Latitude"];
				doctorLocation["long"] = localStorageFactory.data.pcpinfo["Longitude"];
			} else {
				showAlert("Unable to get Doctor's location.");
				return;
			}

			var browserOptions = {
				location : "no",
				hardwareback : "no",
				closebuttoncaption : "Done"
			};

			var origString = currentlocation.lat + ',' + currentlocation.long
			launchnavigator.navigate([doctorLocation.lat , doctorLocation.long], {start: origString});

			// var url = 'http://maps.google.com/maps?saddr=' + currentlocation.lat + ',' + currentlocation.long + '&daddr=' + doctorLocation.lat + ',' + doctorLocation.long + '&dirflg=d';
			// $cordovaInAppBrowser.open(url, '_blank', browserOptions)
			// .then(function(event) {
			// 	console.log("Success browser opened")
			// })
			// .catch(function(event) {
			// 	console.log("Error browser not opened")
			// 	console.log(event);
			// });

			return false;
		}

		function showAlert(msg) {
			var alertPopup = $ionicPopup.alert({
				title: $translate.instant('ERROR'),
				template: msg
			});
			alertPopup.then(function(res) {
				
			});
		};
	}
])
