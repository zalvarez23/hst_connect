'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var appDependencies = [
	'ionic',
	//'ionic.service.core',
	'ngCordova',
	'app.controllers',
	'app.routes',
	'app.directives',
	'app.factories',
	'app.services',
	'app.filters',
	'pascalprecht.translate',
	'oc.lazyLoad',
	'ngResource',
	'ngSanitize',
	'app.constants',
	'ionic-ratings'
];
//s

var hstApp = angular.module('hstApp', appDependencies)

	.config(function ($ionicConfigProvider) {

		// note that you can also chain configs
		$ionicConfigProvider.navBar.alignTitle('center');
		$ionicConfigProvider.tabs.position('bottom');
		$ionicConfigProvider.backButton.previousTitleText(false).text('&emsp;&emsp;');
	})

	.run(['$rootScope', '$ionicPlatform', '$location', 'localStorageFactory', 'locationService', '$translate', 'appConst', '$state', '$ionicHistory', '$timeout',
		function ($rootScope, $ionicPlatform, $location, localStorageFactory, locationService, $translate, appConst, $state, $ionicHistory, $timeout) {
			$ionicPlatform.ready(function () {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
					cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
					cordova.plugins.Keyboard.disableScroll(true);
				}
				if (window.StatusBar) {
					// org.apache.cordova.statusbar required
					StatusBar.styleBlackOpaque();
					StatusBar.backgroundColorByHexString("#aeca5f");
				}

				$rootScope.version = "";
				if (cordova.getAppVersion != undefined) {
					cordova.getAppVersion.getVersionNumber().then(function (version) {
						localStorage["Version"] = version;
						localStorage["DeviceType"] = cordova.platformId;
					});
				}

				if (cordova.plugins.backgroundMode) {

					// // Android customization 
					// cordova.plugins.backgroundMode.setDefaults({ title: $translate.instant('TITLE_BACKGROUND_MODE'), text: $translate.instant('DESC_BACKGROUNND_MODE') });
					// // Enable background mode 
					// cordova.plugins.backgroundMode.enable();

					// // Called when background mode has been activated 
					// cordova.plugins.backgroundMode.onactivate = function () {
					// 	console.log("Init Background Mode");
					// 	storeInLocalStorage("lastViewChanged", new Date().getTime());

					// 	function task(){
					// 		var halfAnHourInMS = 30 * 60 * 1000;
					// 		//var halfAnHourInMS = 10000;
					// 		readFromLocalStorage("lastViewChanged", function (lastViewChangedTimeinMS) {
					// 			console.log("guardo");
					// 			var lastActiveTimeDiff = new Date().getTime() - lastViewChangedTimeinMS;
					// 			if (lastActiveTimeDiff > halfAnHourInMS) {
					// 				console.log("Timeout exceeded : " + halfAnHourInMS)
					// 				console.log("SignOut : Force signout after 30 minutes of inactivity");
					// 				localStorageFactory.save("userLoggedIn", "false", function (data) {
					// 					console.log("set userLoggedIn : false");

					// 					delete localStorageFactory.data["pcpinfo"]; // Reset All Data
					// 					delete localStorageFactory.data["userMessages"]; // Reset All Data
					// 					delete localStorageFactory.data["callinsuranceinfo"];

					// 					removeFromLocalStorage("MemberId"); // Reset All Data

					// 					$ionicHistory.nextViewOptions({
					// 						disableBack: true
					// 					});
					// 					$state.go('login');
					// 					// $location.path("/opening");
					// 				}, function (error) {
					// 					console.log("Unable to set userLoggedIn : null")
					// 				});
					// 			} else {
					// 				setTimeout(function(){
					// 					console.log("corriendo la tarea de sesion");
					// 					task();
					// 				},10000)
					// 			}
					// 		});
					// 	}

					// 	setTimeout(function(){
					// 		console.log("corriendo la tarea de sesion");
					// 		task();
					// 	},10000);


					// }
				}

				var push = new Ionic.Push({
					"debug": true
				});

				var firstIns = localStorage["firstTime"];

				if (firstIns === null || firstIns === undefined || firstIns === "") {
					$rootScope.firstTime = true;
					localStorage["firstTime"] = "true";
				} else {
					$rootScope.firstTime = (localStorage["firstTime"] == "true");
				}



				document.addEventListener('deviceready', function () {
					localStorageFactory.read("device_token", function (data) {

						if (data != null) {
							localStorageFactory.setDeviceToken(data);
							return;
						}

						push.register(function (token) {
							console.log("My Device token : ");
							console.log(token.token);
							push.saveToken(token);  // persist the token in the Ionic Platform

							localStorageFactory.setDeviceToken(token.token);
							localStorageFactory.save("device_token", token.token, function (data) { }, function (data) { });
						});
					}, function (error) {
						console.log("Unable to get device_token")
					});

					// Read App language from local storage
					readFromLocalStorage("AppLang", function () {
						// Initially default language won't be available
						if (!localStorageFactory.data["AppLang"])
							storeInLocalStorage("AppLang", appConst.en);

						console.log("setting lang")
						// Set selected language for translate
						if (localStorageFactory.data["AppLang"] == appConst.en) {
							$translate.use("en");
							localStorageFactory.data.AppLanguageParam = "EN";
						} else {
							$translate.use("es");
							localStorageFactory.data.AppLanguageParam = "ESP";
						}

					});

					// localStorageFactory.read("userLoggedIn", function (data) {
					// 	if (data != null)
					// 		localStorageFactory.data["alreadyLoggedIn"] = true;

					// 	if (data == "true") {
					// 		// User already logged in, now go to landing page directly		
					// 		var keys = ["AppID", "GroupId", "MemberId"];
					// 		for (var i in keys) {
					// 			readFromLocalStorage(keys[i])
					// 		}

					// 		$ionicHistory.nextViewOptions({
					// 			disableBack: true
					// 		});

					// 		$location.path("/landingPage");
					// 	}
					// }, function (error) {
					// 	console.log("Unable to get userLoggedIn")
					// });
				}, false);


				function readFromLocalStorage(key, callback) {
					localStorageFactory.read(key, function (data) {
						localStorageFactory.data[key] = data;
						if (callback)
							callback(data);
					}, function (error) {
						console.log("Unable to get " + key)
					});
				}

				function storeInLocalStorage(key, value, callback) {
					localStorageFactory.data[key] = value;
					localStorageFactory.save(key, value, function (data) {
						localStorageFactory.data[key] = data;
						if (callback)
							callback(data);
					}, function (error) {
						console.log("Unable to store: " + key + " - " + value);
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

				$ionicPlatform.on('resume', function () {
					console.log("App resumed. Getting location");
					// Asking to get current location
					locationService.canAskRepeatedly(true);
					locationService.checkAndGetLocation();
					// Check the last view changed time stamp
					var halfAnHourInMS = 30 * 60 * 1000;
					//var halfAnHourInMS = 10000;
					readFromLocalStorage("lastViewChanged", function (lastViewChangedTimeinMS) {
						console.log("guardo");
						var lastActiveTimeDiff = new Date().getTime() - lastViewChangedTimeinMS;
						if (lastActiveTimeDiff > halfAnHourInMS) {
							console.log("Timeout exceeded : " + halfAnHourInMS)
							console.log("SignOut : Force signout after 30 minutes of inactivity");
							localStorageFactory.save("userLoggedIn", "false", function (data) {
								console.log("set userLoggedIn : false");

								delete localStorageFactory.data["pcpinfo"]; // Reset All Data
								delete localStorageFactory.data["userMessages"]; // Reset All Data
								delete localStorageFactory.data["callinsuranceinfo"];

								removeFromLocalStorage("MemberId"); // Reset All Data

								$ionicHistory.nextViewOptions({
									disableBack: true
								});
								$state.go('login');
								// $location.path("/opening");
							}, function (error) {
								console.log("Unable to set userLoggedIn : null")
							});
						} else {
							setTimeout(function () {
								console.log("corriendo la tarea de sesion");
								task();
							}, 10000)
						}
					});
					inactiveTimedout();
				});

				$ionicPlatform.on('pause', function () {
					console.log("App paused. Getting location");
					// // Asking to get current location
					// locationService.canAskRepeatedly(true);
					// locationService.checkAndGetLocation();
					// // Check the last view changed time stamp
					// inactiveTimedout();
					storeInLocalStorage("lastViewChanged", new Date().getTime());
				});

				storeInLocalStorage("lastViewChanged", new Date().getTime());
				$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
					console.log("State changing : ");
					// Check the last view changed time stamp
					console.log(fromState)
					inactiveTimedout();
					localStorageFactory.read("userLoggedIn", function (data) {
						if (data == "false" || data == null) {
							$timeout(function () {
								var cv = $ionicHistory.currentView();
								if (cv.stateId != "login" && cv.stateId != "registration" && cv.stateId != "opening" && cv.stateId != "registration2" && cv.stateId != "registration3" && cv.stateId != "registration4") {
									$ionicHistory.clearHistory();
									$ionicHistory.nextViewOptions({
										disableBack: true
									});

									if ($rootScope.firstTime) {
										$state.go('registration');
									} else {
										$state.go('login');
									}
								}
							}, 0)
						}
					}, function (error) {
						console.log("Unable to get userLoggedIn")
					});
					// console.log(toState)
				});

				function inactiveTimedout() {
					var halfAnHourInMS = 30 * 60 * 1000;
					readFromLocalStorage("lastViewChanged", function (lastViewChangedTimeinMS) {
						var lastActiveTimeDiff = new Date().getTime() - lastViewChangedTimeinMS;
						if (lastActiveTimeDiff > halfAnHourInMS) {
							console.log("Timeout exceeded : " + halfAnHourInMS)
							forceSignOut();
							storeInLocalStorage("lastViewChanged", new Date().getTime());
						} else {
							storeInLocalStorage("lastViewChanged", new Date().getTime());
						}
					});
				}

				function forceSignOut() {
					console.log("SignOut : Force signout after 30 minutes of inactivity");
					localStorageFactory.save("userLoggedIn", "false", function (data) {
						console.log("set userLoggedIn : false");

						delete localStorageFactory.data["pcpinfo"]; // Reset All Data
						delete localStorageFactory.data["userMessages"]; // Reset All Data
						delete localStorageFactory.data["callinsuranceinfo"];

						removeFromLocalStorage("MemberId"); // Reset All Data

						$ionicHistory.nextViewOptions({
							disableBack: true
						});
						$state.go('login');
						// $location.path("/opening");
					}, function (error) {
						console.log("Unable to set userLoggedIn : null")
					});
				};

			});
		}
	])
