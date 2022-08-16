'use strict';
angular.module('app.controllers')

	.controller('providerDetailCtrl', ['$scope', '$rootScope', '$location', '$ionicPopup', '$translate', '$filter', '$ionicLoading', '$state', 'localStorageFactory', 'findAProviderService', '$cordovaInAppBrowser', '$ionicModal',
		function ($scope, $rootScope, $location, $ionicPopup, $translate, $filter, $ionicLoading, $state, localStorageFactory, findAProviderService, $cordovaInAppBrowser, $ionicModal) {
			console.log("provider Details page loaded");

			$scope.providerType = localStorageFactory.data.authorizedProviderType;
			var getInNetworkProvider = findAProviderService.inNetworkProvider;
			//test
			// $scope.providerType = "Doctor";
			$scope.doctorIsN = {};
			//

			$scope.getInNetwork = function () {
				var postData = {};
				postData["AppID"] = localStorageFactory.data.AppID;
				postData["MemberId"] = localStorageFactory.data.MemberId;
				postData["GroupId"] = localStorageFactory.data.GroupId;
				postData["DeviceId"] = localStorageFactory.getDeviceID();

				// postData["AppID"] = "8B2A6BCD-7E8A-4D2B-AAB0-88EFAE074FF3";
				// postData["MemberId"] = "Kevinsalazar";
				// postData["GroupId"] = "22";
				// postData["DeviceId"] = "8fb51648e636d0e4";
				postData["ProviderId"] = $scope.doctor.ProviderId;
				postData["OfficeId"] = $scope.doctor.OfficeId;

				$ionicLoading.show({
					template: '<p>' + $translate.instant('LOADING') + '</p><ion-spinner></ion-spinner>'
				});

				getInNetworkProvider.get(postData).$promise.then(function (response) {
					$ionicLoading.hide();
					if (response.status.toLowerCase() == "ok") {
						$scope.doctorIsN = response.message;
						console.log($scope.doctorIsN)
					} else {
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('ERROR'),
							template: $translate.instant('UNABLE_TO_SET_PRIMARY_CARE_PHYSICIAN')
						});
						alertPopup.then(function (res) {
							console.log('Unable to set PCP : ' + response.message);
						});
					}
				}, function () {
					$ionicLoading.hide();
					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('NO_CONN_ERR')
					});
					alertPopup.then(function (res) {
						console.log('No internet connection Error');
					});
				});
			}
			// 


			if ($scope.providerType == "Doctor") {
				$scope.doctor = $rootScope.providerDetail;
				//test
				
				// $scope.doctor = JSON.parse('{"Doctor_Id":0,"Medical_GroupName":"","FirstName":"Anand","LastName":"Ganesan","Address1":"1002 Health Sciences Rd","Address2":"","City":"Irvine","State":"CA","Zip":"92617","Phone":"9498247997","Hours_Open":"","Latitude":"33.641838","Longitude":"-117.850954","Specialization":"Dermatology","CategoryId":2,"ProviderId":"7895465","Gender":"Male","Languages":"","OverallRating":"","PerProcedureRating":"","DistanceFromBase":1.379286,"AverageCharge":"","AverageLengthOfStay":"","NumberOfCases":"","NPI":"1104895580","OverallRating_byPrice":"","PerProcedureRating_byPrice":"","OverallRating_ByQuality":"","MinCharge":"","MaxCharge":"","CoPay":"","Deductible":"","CoInsurance":"","MemberTotalCost":"","InsurancePhoneNumber":"","QualityRating":"","PriceRating":"","EstimatedPlanPayment":"","MinOutOfPocketCost":"","MaxOutOfPocketCost":"","FacilityAcceptanceID":6,"FacilityAcceptanceText":"nn","QualityRatingUpdatedOn":"","PercChanceOfVBPAcceptance":"","PrimaryDegree":"","GraduationYear":"","MedicalSchoolList":"","IsInNetwork":true,"IsPHCSEnabled":true,"MondayOpenTime":"","MondayCloseTime":"","TuesdayOpenTime":"","TuesdayCloseTime":"","WednesdayOpenTime":"","WednesdayCloseTime":"","ThursdayOpenTime":"","ThursdayCloseTime":"","FridayOpenTime":"","FridayCloseTime":"","SaturdayOpenTime":"","SaturdayCloseTime":"","SundayOpenTime":"","SundayCloseTime":"","WaitTime":"","ADAFac":"Unkown","PracticeName":"","PracticeEmail":"","AcceptsNewPatients":"Unkown","BoardCertifications":"","DateOfLastUpdate":"","ECPFacility":"Unkown","LanguagesSpokenList":"","LanguagesSpokenList_Staff":"","LicenseNumber":"/","HospitalAffiliations":"","OfficeId":16001389,"orderAcceptance":1,"formattedaddress":"1002 Health Sciences Rd","formattedaddressCity":"Irvine, CA 92617"}');
				// console.log($scope.doctor)
				if ($scope.doctor.IsInNetwork) {
					$scope.getInNetwork();
				};

				$scope.doctor.Gender = $scope.doctor.Gender == "F" ? "Female" : "Male";
			} else {
				$scope.hospital = $rootScope.providerDetail;
			}
			$scope.newProject = localStorage.getItem('newProject');
			// console.log("hospital is", $scope.hospital);
			// console.log("data is", localStorageFactory.data);

			var setPcp = findAProviderService.setPCP;

			$scope.getRating = function (rating) {
				if (isNaN(rating)) {
					rating = 0;
				}
				rating = Math.round(rating);

				var obj = {
					iconOn: 'ion-ios-star',    //Optional
					iconOff: 'ion-ios-star-outline',   //Optional
					iconOnColor: 'rgb(200, 200, 100)',  //Optional
					iconOffColor: 'rgb(200, 100, 100)',    //Optional
					minRating: 1,    //Optional
					readOnly: true,
					callback: function (rating) {    //Mandatory

					}
				};

				obj["rating"] = rating;

				return obj;
			};

			$scope.setPCP = function () {

				var msg = $translate.instant('DO_YOU_WANT_TO_SET') + $scope.doctor.FirstName + ' ' + $scope.doctor.LastName + $translate.instant('PRIMARY_CARE_PHYSICIAN');

				var alertPopup = $ionicPopup.confirm({
					title: "",
					template: msg
				}).then(function (res) {
					if (res) {
						console.log('You are sure');
						setPrimaryCarePysician();
					} else {

					}
				});

			};


			function setPrimaryCarePysician() {
				var postData = {};
				postData["AppID"] = localStorageFactory.data.AppID;
				postData["MemberId"] = localStorageFactory.data.MemberId;
				postData["GroupId"] = localStorageFactory.data.GroupId;
				postData["NPI"] = $scope.doctor.NPI;
				postData["BuildVersion"] = localStorage["Version"];
				postData["Device_Type"] = localStorage["DeviceType"];
				postData["DeviceId"] = localStorageFactory.getDeviceID();

				$ionicLoading.show({
					template: '<p>' + $translate.instant('LOADING') + '</p><ion-spinner></ion-spinner>'
				});

				setPcp.set(postData).$promise.then(function (response) {
					$ionicLoading.hide();

					console.log("set PCP  Success : ");
					console.log(response);
					if (response.status.toLowerCase() == "ok") {
						// Success
						// Clear PCP info
						delete localStorageFactory.data['pcpinfo'];
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('SUCCESS'),
							template: $translate.instant('PCP_SET_SUCCESSFULLY')
						});
						alertPopup.then(function (res) {
						});
					} else {
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('ERROR'),
							template: $translate.instant('UNABLE_TO_SET_PRIMARY_CARE_PHYSICIAN')
						});
						alertPopup.then(function (res) {
							console.log('Unable to set PCP : ' + response.message);
						});
					}
				}, function (error) {
					$ionicLoading.hide();
					console.log("Error : ");
					console.log(error);

					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('NO_CONN_ERR')
					});
					alertPopup.then(function (res) {
						console.log('No internet connection Error');
					});
				});

			};

			// function to initiate modal for info
			$ionicModal.fromTemplateUrl('more-info.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.info_modal = modal;
			})
			$scope.showInfo = function () {
				$scope.info_modal.show()
			}
			$scope.closeInfo = function () {
				$scope.info_modal.hide()
			}
			$scope.$on('$destroy', function () {
				$scope.info_modal.remove();
			});

			$scope.openGoogleDirection = function () {

				var currentlocation = localStorageFactory.data.currentlocation;
				if (currentlocation == null || currentlocation.lat == null) {
					console.log("Current location is not available");
					return;
				} else {
					currentlocation.lat = isNaN(currentlocation.lat) ? 0.0 : parseFloat(currentlocation.lat).toFixed(6);
					currentlocation.long = isNaN(currentlocation.long) ? 0.0 : parseFloat(currentlocation.long).toFixed(6);
				}

				var doctorLocation = {};
				if ($scope.doctor != null) {
					doctorLocation["lat"] = $scope.doctor["Latitude"];
					doctorLocation["long"] = $scope.doctor["Longitude"];
				} else if ($scope.hospital != null) {
					doctorLocation["lat"] = $scope.hospital["Latitude"];
					doctorLocation["long"] = $scope.hospital["Longitude"];
				} else {
					return;
				}

				var browserOptions = {
					location: "no",
					hardwareback: "no",
					closebuttoncaption: "Done"
				};

				// var url = 'http://maps.google.com/maps?saddr=' + currentlocation.lat + ',' + currentlocation.long + '&daddr=' + doctorLocation.lat + ',' + doctorLocation.long + '&dirflg=d';
				var origString = currentlocation.lat + ',' + currentlocation.long
				launchnavigator.navigate([doctorLocation.lat, doctorLocation.long], { start: origString });
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
		}
	]);
