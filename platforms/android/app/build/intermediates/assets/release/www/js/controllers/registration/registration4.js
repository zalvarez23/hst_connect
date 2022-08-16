'use strict';
angular.module('app.controllers')

	.controller('registration4Ctrl', ['$scope', 'registrationFactory', 'registrationService', '$ionicLoading', '$ionicPopup', '$translate', '$location', 'localStorageFactory', '$ionicHistory', '$state', '$rootScope', 'apiUrl', 'appConst','$http','utilFactory',
		function ($scope, registrationFactory, registrationService, $ionicLoading, $ionicPopup, $translate, $location, localStorageFactory, $ionicHistory, $state, $rootScope, apiUrl, appConst, $http,utilFactory) {
			$scope.reg = registrationFactory.getUserData();
			function cancel() {
				if ($rootScope.firstTime) {
					$ionicHistory.goBack();
				} else {
					$state.go("login")
				}
			}

			var rootURL = apiUrl.baseUrl;
			var VBPinfoUrl = rootURL + '/IsUserAllowedToSeeVBPinfo';
			
			var getVBPinfo = function (appId, deviceid) {
				return $http({
					method: 'POST',
					url: VBPinfoUrl,
					data: { AppId: appId, DeviceId: deviceid },
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					transformRequest: utilFactory.encodePostBody
				});
			};

			$scope.cancel = cancel;

			$scope.SubmitForm = function () {
				console.log("Submit Form");
				console.log($scope.reg);
				var registration = registrationService.registration;

				$ionicLoading.show({
					template: '<p>' + $translate.instant('LOADING') + '</p><ion-spinner></ion-spinner>'
				});


				$scope.reg["BuildVersion"] = localStorage["Version"];
				$scope.reg["DeviceType"] = localStorage["DeviceType"];
				$scope.reg["Device_Type"] = localStorage["DeviceType"];
				$scope.reg["DeviceId"] = localStorageFactory.getDeviceID();
				registration.register($scope.reg).$promise.then(function (response) {
					$ionicLoading.hide();

					console.log("Registration Success : ");
					console.log(response);
					if (response.status.toLowerCase() == "ok") {

						var appIdSend = appConst.appId;
						var deviceIdSend = localStorageFactory.getDeviceID();
						getVBPinfo(appIdSend, deviceIdSend).success(function (resultVBP) {
							if (resultVBP.message == "HideVBP") {
								localStorage.setItem('newProject',true)
							}else{
								localStorage.setItem('newProject','')
							};

							localStorage.setItem('User_Id', response.message["User_Id"])
							// Set MemberId, GroupId to local storage
							for (var key in $scope.reg) {
								storeInLocalStorage(key, $scope.reg[key]);
							}
	
							localStorageFactory.data.alreadyLoggedIn = true;
							storeInLocalStorage("userLoggedIn", "true");
							localStorage.setItem('firstTimeAux', "false");
							$rootScope.firstTime = false;
							localStorage["firstTime"] = "false";
	
							var alertPopup = $ionicPopup.alert({
								title: $translate.instant('SUCCESS'),
								template: $translate.instant('SUCCESSFULLY_REGISTERED')
							});
							alertPopup.then(function (res) {
								$ionicHistory.nextViewOptions({
									disableBack: true
								});
								// Redirect to Landing page
								$location.path("/landingPage");
							});
						}).error(function (errVBP) {
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
						})

					} else {
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('ERROR'),
							template: "<span ng-bind='\"INVALID_REGISTRATION_DATA\" | translate'></span>"
						});
						alertPopup.then(function (res) {
							console.log('Invalid Registration data : ' + response.message);
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
			}

			function storeInLocalStorage(key, value) {
				localStorageFactory.data[key] = value;
				localStorageFactory.save(key, value, function (data) {
					localStorageFactory.data[key] = data;
				}, function (error) {
					console.log("Unable to store: " + key + " - " + value);
				});
			}
		}
	])
