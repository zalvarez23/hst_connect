'use strict';
angular.module('app.controllers')

	.controller('myProfileCtrl', ['$rootScope', '$scope', '$location', '$ionicPopup', '$translate', '$filter', '$ionicLoading', 'profileService', '$ionicHistory', '$state', 'localStorageFactory', 'appConst', 'preFetchDataFactory', '$ionicTabsDelegate', 'messagesService','yourDoctorService',
		function ($rootScope, $scope, $location, $ionicPopup, $translate, $filter, $ionicLoading, profileService, $ionicHistory, $state, localStorageFactory, appConst, preFetchDataFactory, $ionicTabsDelegate, messagesService,yourDoctorService) {
			console.log("My Profile page loaded");
			$ionicTabsDelegate.showBar(false);
			$scope.profile = localStorageFactory.data.profile || {};

			$scope.appLanguages = ["English", "Español"];
			$scope.appLanguagesAux = [{ des: "English" }, { des: "Español" }];
			$scope.selectedLanguage = localStorageFactory.data["AppLang"];

			$scope.downloadMessages = downloadMessages;
			var messages = messagesService.UserMessages;
			var yourDoctor = yourDoctorService.yourDoctor;

			$scope.goBack = function () {
				$state.go("landingPage");
			}
			var alertPopResult = function (title, template, css, $scope) {

				var alertPopup = $ionicPopup.alert({
					title: title,
					template: template,
					cssClass: css,
					scope: $scope
				});
				return alertPopup;
			}
			var alertPop;
			$scope.modalLanguage = function () {
				var cabecera, template;
				$scope.appLanguagesAux.forEach(function (item, index) {
					if ($scope.selectedLanguage == item.des) {
						item['colorSelect'] = "colorSelect";
						item['checked'] = true;
					} else {
						item['colorSelect'] = "";
						item['checked'] = false;
					}
				})
				template = '<div class="modalStyle">' +
					'<div class="card-panel grey lighten-5 z-depth-1 cardP " ng-repeat="item in appLanguagesAux">' +
					'<div class="row valign-wrapper contentPlantilla {{item.colorSelect}}" ng-click="selectIdLanguage(item);">' +
					'<div class="col col-90"><span class="black-text">{{item.des}}</span></div>' +
					'<div class="col"><input type="radio" name="gender" ng-checked="item.checked"></div></div></div></div>';

				alertPop = alertPopResult(cabecera, template, 'modalStyleSelectMillas', $scope);
			}
			$scope.selectIdLanguage = function (item) {
				$scope.selectedLanguage = item.des;
				$scope.languageChanged()
				alertPop.close();
			}


			console.log("HST App Language : ");
			console.log(localStorageFactory.data["AppLang"]);

			$ionicLoading.show({
				template: '<p>' + $translate.instant('LOADING_PROFILE_INFO') + '</p><ion-spinner></ion-spinner>'
			});

			var myProfile = profileService.profile;
			$scope.messageCount = 0;
			$scope.init = function () {
				// Will be called whenever the user opens this view/page
				fetchProfileData();
				$scope.messageCount = $filter('unreadMsgCount')(localStorageFactory.data.userMessages);

			}


			function downloadMessages() {
				initialize();
				if ($scope.messageCount > 0) {
					$state.go("tabsController.messages");
				} else {
					$state.go("tabsController.messages-options");
				}

			}


			function readFromLocalStorage(key) {
				let postData = {};
				localStorageFactory.read(key, function (data) {
					localStorageFactory.data[key] = data;

					postData[key] = data;

					prefetchData();
				}, function (error) {
					console.log("Unable to get " + key)
				});
			}


			function initialize() {
				var postData = {};

				console.warn('------- landing-controller.js -> initialize()');
				$scope.messageCount = $filter('unreadMsgCount')(localStorageFactory.data.userMessages);
				$scope.profile = localStorageFactory.data.profile;
				// localStorageFactory.data.GroupId = localStorageFactory.data.profile.GroupId;

				var keys = ["AppID", "GroupId", "MemberId"];

				var waitingForLocalStorage = false;
				for (var i in keys) {
					if (typeof localStorageFactory.data[keys[i]] == "undefined") {
						postData[keys[i]] = null;
						waitingForLocalStorage = true;
						readFromLocalStorage(keys[i]);
					}
					else {
						postData[keys[i]] = localStorageFactory.data[keys[i]];
					}
				}

				postData["BuildNumber"] = localStorage["Version"];
				postData["DeviceType"] = localStorage["DeviceType"];
				postData["BuildVersion"] = localStorage["Version"];
				postData["Device_Type"] = localStorage["DeviceType"];
				postData["DeviceId"] = localStorageFactory.getDeviceID();

				if (!waitingForLocalStorage) {
					prefetchData();
				}
			}

			function prefetchData() {
				let postData = {};
				console.warn('------- landing-controller.js -> prefetchData()');

				// Check Post data is ready
				for (var key in postData) {
					//if ( typeof postData[ key ] == "undefined" || postData[ key ] == null )
					//return;
				}

				postData["BuildNumber"] = $rootScope.version;
				postData["DeviceType"] = localStorageFactory.data.Device_Type;
				postData["BuildVersion"] = localStorage["Version"];
				postData["Device_Type"] = localStorage["DeviceType"];
				postData["DeviceId"] = localStorageFactory.getDeviceID();

				// Download User Messages
				console.log("Downloading Messages");
				messages.getUserMessages(postData).$promise.then(function (response) {
					if (response.status.toLowerCase() == "ok" && response.message != null) {
						if (Object.prototype.toString.call(response.message) != '[object Array]')
							response.message = [];
						console.warn('Messages returned from data source');
						console.log('response.message:', response.message);
						var listMessageAux = [];
						response.message.forEach(function (itemE, indexE) {
							listMessageAux.push(itemE.messagelist);
						})

						localStorageFactory.data.userMessages = listMessageAux;
						$scope.messageCount = $filter('unreadMsgCount')(localStorageFactory.data.userMessages);
						console.log('$scope.messageCount:', $scope.messageCount);
					}
					else {
						console.log("Error while downloading User messages");
						console.log(response.message);
					}

				}, function (error) {
					console.log("Error while downloading User messages :");
					console.log(error);
				});

				// Download Your Doctor Info
				if (localStorageFactory.data.pcpinfo != null) {
					console.log("Doctor info already downloaded");
				}
				else {
					yourDoctor.getDoctorDetails(postData).$promise.then(function (response) {
						if (response.status.toLowerCase() == "ok" && response.message != null) {
							var data = response.message;
							localStorageFactory.data.pcpinfo = data;

							var addressFields = ['Address1', 'Address2', 'City', 'State', 'Zip'];
							var addressValues = [];
							data.formattedaddress = "";

							for (var i in addressFields) {
								var field = addressFields[i];
								if (data[field])
									addressValues.push(data[field]);
							}

							data.formattedaddress = addressValues.join(", ");

						}
						else {
							console.log("Error while downloading Doctor Info");
							console.log(response.message);
						}

					}, function (error) {
						console.log("Error while downloading Doctor Info");
						console.log(error);
					});
				}

				// Download User Profile

				if (localStorageFactory.data.profile != null) {
					$scope.profile = localStorageFactory.data.profile;
					console.log("Profile info already downloaded");
				}
				else {
					postData["User_id"] = localStorage.getItem('User_Id');

					myProfile.getUserProfile(postData).$promise.then(function (response) {

						if (response.status.toLowerCase() == "ok" && response.message != null) {
							localStorageFactory.data.profile = response.message;
							$scope.profile = localStorageFactory.data.profile;

						}
						else {
							console.log("Error while downloading Profile Info");
							console.log(response.message);
						}

					}, function (error) {

						console.log("Error while downloading Profile Info");
						console.log(error);
					});
				}
			}


			function fetchProfileData() {
				// Download User Profile
				if (localStorageFactory.data.profile != null) {
					$ionicLoading.hide(); // Hide loading overlay
					$scope.profile = localStorageFactory.data.profile;
					console.log("Profile info already downloaded");
					return;
				}

				var postData = {};
				postData["AppID"] = localStorageFactory.data.AppID;
				postData["MemberId"] = localStorageFactory.data.MemberId;
				postData["GroupId"] = localStorageFactory.data.GroupId;
				postData["BuildVersion"] = localStorage["Version"];
				postData["Device_Type"] = localStorage["DeviceType"];
				postData["DeviceId"] = localStorageFactory.getDeviceID();
				postData["User_id"] = localStorage.getItem('User_Id');
				myProfile.getUserProfile(postData).$promise.then(function (response) {
					$ionicLoading.hide(); // Hide loading overlay

					if (response.status.toLowerCase() == "ok" && response.message != null) {
						localStorageFactory.data.profile = response.message;
						$scope.profile = localStorageFactory.data.profile;
					} else {
						console.log("Error while downloading Profile Info");
						console.log(response.message);
					}

				}, function (error) {
					$ionicLoading.hide(); // Hide loading overlay
					console.log("Error while downloading Profile Info");
					console.log(error);
					// Show network Error
					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('NO_CONN_ERR')
					});
					alertPopup.then(function (res) {
						console.log('No internet connection Error');
					});
				});

			}

			$scope.signOut = function () {

				console.log("SignOut : Clear login credentials");

				localStorageFactory.save("userLoggedIn", "false", function (data) {
					console.log("set userLoggedIn : false");

					delete localStorageFactory.data["pcpinfo"]; // Reset All Data
					delete localStorageFactory.data["userMessages"]; // Reset All Data
					delete localStorageFactory.data["callinsuranceinfo"];

					removeFromLocalStorage("MemberId"); // Reset All Data

					$rootScope.signedOut = !$rootScope.signedOut;

					$ionicHistory.nextViewOptions({
						disableBack: true
					});

					$state.go('login');
					// $location.path("/opening");

				}, function (error) {
					console.log("Unable to set userLoggedIn : null")
				});
			};

			function removeFromLocalStorage(key) {
				delete localStorageFactory.data[key];
				localStorageFactory.remove(key, function (data) {
					console.log("Removed from LS : " + key);
				}, function (error) {
					console.log("Unable to remove: " + key);
				});
			}

			function storeInLocalStorage(key, value) {
				localStorageFactory.data[key] = value;
				localStorageFactory.save(key, value, function (data) {
					localStorageFactory.data[key] = data;
				}, function (error) {
					console.log("Unable to store: " + key + " - " + value);
				});
			};

			$scope.takePicture = function (type) {
				$rootScope.imageType = type;
				$state.go("tabsController.profileImage");
			}

			$scope.languageChanged = function () {
				console.log("Language changed")
				console.log($scope.selectedLanguage);

				if ($scope.selectedLanguage == appConst.en) {
					$translate.use("en");
					localStorageFactory.data.AppLanguageParam = "EN";
					storeInLocalStorage("AppLang", appConst.en);
				} else {
					$translate.use("es");
					localStorageFactory.data.AppLanguageParam = "ESP";
					storeInLocalStorage("AppLang", appConst.es);
				}

				// Clear the data for the procedures and provider specialization
				localStorageFactory.data['procedureList'] = [];
				localStorageFactory.data['providerSpecilization'] = [];
				localStorageFactory.data.callinsuranceinfo = null;

				// Download Procedure list and provider specialization list using Factory
				preFetchDataFactory.prefetchSearchData();
			}

		}
	])
