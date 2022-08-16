'use strict';

angular.module('app.controllers')
	.controller('openingScreenCtrl', ['$scope', '$translate', 'localStorageFactory', '$rootScope', 'apiUrl', 'appConst', 'utilFactory', '$http', '$timeout', '$ionicLoading', '$ionicPopup',
		function ($scope, $translate, localStorageFactory, $rootScope, apiUrl, appConst, utilFactory, $http, $timeout, $ionicLoading, $ionicPopup) {

			console.log("Opening Screen")
			$scope.selectedLanguage = localStorageFactory.data["AppLang"] || "English";
			$scope.version = $rootScope.version;
			console.log("Default Lang")
			console.log(localStorageFactory.data["AppLang"]);
			// $scope.firstTime = $rootScope.firstTime;

			//var firstTime = localStorage["firstTime"] == "false" ? false : true;

			// test

			//
			$scope.showButtons = false;
			var rootURL = apiUrl.baseUrl;
			var usageUrl = rootURL + '/IsDeviceRegistered';
			var getUsage = function (appId, deviceid) {
				return $http({
					method: 'POST',
					url: usageUrl,
					data: { APIId: appId, DeviceId: deviceid, AppID: appId },
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					transformRequest: utilFactory.encodePostBody
				});
			};

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

			$scope.executeGetDeviceRegistered = function () {
				$timeout(function () {
					$ionicLoading.show({
						template: '<p>' + $translate.instant("LOADING_INFORMATION") + '</p><ion-spinner></ion-spinner>'
					});
					var appIdSend = appConst.appId;
					var deviceIdSend = localStorageFactory.getDeviceID();
					getUsage(appIdSend, deviceIdSend).success(function (result) {
						$ionicLoading.hide(); // Hide loading overlay
						if (result.status.toLowerCase() == "ok") {
							// Get VBP Info
							if (result.message.toLowerCase() == "registered") {
								getVBPinfo(appIdSend, deviceIdSend).success(function (resultVBP) {
									
									localStorageFactory.data.alreadyLoggedIn = true;
									storeInLocalStorage("userLoggedIn", "true");
									localStorage.setItem('firstTimeAux', "false");
									$rootScope.firstTime = false;
									localStorage["firstTime"] = "false";
									$scope.firstTimeAux = false;
									$scope.showButtons = true;
									//
									if (resultVBP.message == "HideVBP") {
										localStorage.setItem('newProject',true)
									}else{
										localStorage.setItem('newProject','')
									}
								}).error(function (errVBP) {
									$ionicLoading.hide();
									var alertPopup = $ionicPopup.alert({
										title: $translate.instant('ERROR'),
										template: $translate.instant('NO_CONN_ERR')
									});
									alertPopup.then(function (res) {
										console.log('No internet connection Error');
									});
									$timeout(function () {
										$scope.executeGetDeviceRegistered();
									}, 2500)
								})
							} else {
								$scope.firstTimeAux = true;
								$scope.showButtons = true;
							};

							//
						}
					}).error(function (err) {
						$ionicLoading.hide();
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('ERROR'),
							template: $translate.instant('NO_CONN_ERR')
						});
						alertPopup.then(function (res) {
							console.log('No internet connection Error');
						});
						$timeout(function () {
							$scope.executeGetDeviceRegistered();
						}, 2500)
					});
				}, 1500)

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
	]);
