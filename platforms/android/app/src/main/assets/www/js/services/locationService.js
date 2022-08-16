'use strict';
/**
 * @name locationService
 *
 * @description 
 * 		Used to get the current location of the user
 *
 * 		NOTE : Load locationService only after the cordova plugin loaded
 * 	
 */

angular.module('app.factories')

.factory('locationService', [ '$cordovaGeolocation', 'localStorageFactory', '$ionicPopup', '$ionicPlatform',
	function ($cordovaGeolocation, localStorageFactory, $ionicPopup, $ionicPlatform) {

		console.log("Starting location service");

		var diagnostic = null;
		var locationPlugin = null;

		document.addEventListener('deviceready', function() {
			console.log("Diagnostic plugin loaded");
			diagnostic = cordova.plugins.diagnostic;
			locationPlugin = $cordovaGeolocation;
		});

		var watch, canAskUser, canAskRepeatedly = true;
		
		function checkLocationServiceEnabled() {
			console.log("Asking to enable location service");
			diagnostic.isLocationEnabled(function(enabled){
				console.log("Location setting is " + (enabled ? "enabled" : "disabled"));
				if(!enabled && canAskUser) {
					// TODO - Show popup and ask user to switch to location settings
					var confirmPopup = $ionicPopup.confirm({
						title: 'Location Service is Off',
						template: "<span ng-bind='\"ARE_YOU_SURE_ENABLE_LOCATION_SERVICE\" | translate'></span>"
					});

					confirmPopup.then(function(res) {
						if(res) {
							console.log('You are sure');
							if(typeof diagnostic.switchToLocationSettings != "undefined")
								diagnostic.switchToLocationSettings();
							else
								diagnostic.switchToSettings(function () {}, function () {});

						} else {
							console.log('You are not sure');
							localStorageFactory.data.locationEnabled = false;
						}
					});
					
				} else {
					checkLocationPermissions();
				}

			}, function(error){
				console.error("The following error occurred: "+error);
			});
		};

		function AskUserToOpenSettings() {
			if(!canAskUser)
				return;
			console.log("Asking to change app settings");
			var confirmPopup = $ionicPopup.confirm({
				title: 'Location Service is Denied',
				template: "<span ng-bind='\"ARE_YOU_SURE_GRANT_LOCATION_SERVICE\" | translate'></span>"
			});

			confirmPopup.then(function(res) {
				if(res) {
					console.log('You are sure');
					diagnostic.switchToSettings(function (status) {
						console.log("App settings opened");
						console.log(status)
					}, function (error) {
						console.log("Unable to open App settings");
						console.log(error)
					});
				} else {
					console.log('You are not sure');
				}
			});
		}

		function checkLocationPermissions() {
			console.log("Checking location authorization status");
			diagnostic.getLocationAuthorizationStatus(function(status) {
				switch(status) {
					case diagnostic.permissionStatus.NOT_REQUESTED:
						console.log("Permission not requested");
						requestLocationPermission();
						break;
					case diagnostic.permissionStatus.DENIED:
						console.log("Permission denied");
						localStorageFactory.data.currentlocation = null;
						AskUserToOpenSettings();
						break;
					case diagnostic.permissionStatus.GRANTED:
					case diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
						console.log("Permission granted");
						getCurrentLocation();
						break;
			   }
			}, function(error){
				console.error(error);
			});
		};
		
		function requestLocationPermission () {
			console.log("Requesting location authorization");
			diagnostic.requestLocationAuthorization(function(status) {
				switch(status){
					case diagnostic.permissionStatus.NOT_REQUESTED:
						console.log("Permission not requested");
						break;
					case diagnostic.permissionStatus.DENIED:
						console.log("Permission denied");
						localStorageFactory.data.currentlocation = null;
						break;
					case diagnostic.permissionStatus.GRANTED:
					case diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
						console.log("Permission granted only when in use");
						checkLocationServiceEnabled();
						break;
				}
			}, function(error){
				console.error(error);
				localStorageFactory.data.currentlocation = null;
			});
		}

		function getCurrentLocation(callback) {
			console.log("Getting current location");
			if(!callback)
				callback = function () {};

			// High Accuracy may cause errors
        	var posOptions = {timeout: 10000, enableHighAccuracy: false};

			locationPlugin.getCurrentPosition(posOptions)
			.then(successCallback, errorCallback);

			/*watch = locationPlugin.watchPosition(posOptions);
			watch.then(
				null,
				function(err) {
					errorCallback(err);
				},
				function(position) {
					successCallback(position);

					watch.clearWatch();
				}
			);*/

			// success Callback
			function successCallback(pos) {
				console.log("Location updated")
				var lat  = pos.coords.latitude;
				var long = pos.coords.longitude;

				console.log(lat, long);

				localStorageFactory.data.currentlocation = {
					"lat" :  lat,
					"long" : long
				}

				var l_location = {
					status : true,
					lat : lat,
					long : long
				};

				callback(l_location);
			}

			// Error Callback
			function errorCallback(error) {
				console.log(error);
				console.log('Unable to get location: ' + error.message);
				localStorageFactory.data.currentlocation = null;
				var l_location = {
					status : false
				};

				callback(l_location);
			};

		};

		function checkLocationAuthorized () {
			console.log("Checking location authorized");
			
			diagnostic.isLocationAuthorized(function(authorized) {
				console.log("Location authorization is " + (authorized ? "enabled" : "disabled"));

				// if(authorized) {
				// 	getCurrentLocation();
				// } else {
					checkLocationServiceEnabled();
				// }

			}, function(error){
				console.error("The following error occurred: "+error);
			});
		}

		// Check authoriztion and ask location permissions
		function checkAndGetLocationFn () {
			if(diagnostic == null || locationPlugin == null) {
				console.log("plugin is not loaded yet")
				return;	
			}
			// Asking to get current location
			if(canAskRepeatedly) {
				canAskRepeatedly = false; // turn off after first time
				canAskUser  = true;
			} else {
				canAskUser = false;
			}

			checkLocationAuthorized(); // Used to get current location
		}

		return {
			canAskRepeatedly : function (flag) {
				canAskRepeatedly = flag;
			},
			checkAndGetLocation : checkAndGetLocationFn
		};
	}
])
