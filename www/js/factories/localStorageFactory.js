'use strict';
/**
 * @name localStorageFactory
 *
 * @description 
 * 		Used to store all over the app data and read data from the AppStorage
 * 	
 */

angular.module('app.factories')

	.factory('localStorageFactory', ['$cordovaPreferences', '$cordovaDevice', 'appConst', '$ionicPlatform',
		function ($cordovaPreferences, $cordovaDevice, appConst, $ionicPlatform) {

			var defaults = {
				"AppID": appConst.appId,
				"GroupId": "22"
			};

			var deviceToken = null,
				userProfile = null;

			var device = {};

			$ionicPlatform.ready(function () {
				device = $cordovaDevice.getDevice();
			});
			// document.addEventListener('deviceready', function () {
			// 		device = $cordovaDevice.getDevice();
			// }, false);

			return {
				save: function (key, value, successCallback, errorCallback) {
					console.log(key);
					if (typeof value == "string" && value.length < 100)
						console.log(value);

					if (typeof key == "undefined" || typeof value == "undefined")
						return;

					$cordovaPreferences.store(key, value)
						.success(function () {
							console.log("LS Save Success: " + key + " = ");
							if (typeof value == "string" && value.length < 100)
								console.log(value);
							successCallback(value);
						})
						.error(function (error) {
							console.log("LS Save Error: " + key + " = " + error);
							errorCallback(error);
						})
				},

				read: function (key, successCallback, errorCallback) {
					if (!key)
						return;
					$cordovaPreferences.fetch(key)
						.success(function (value) {
							console.log("LS Read Success: " + key + " = ");
							if (typeof value == "string" && value.length < 100)
								if (value == "false") {
									value = "true";
								}
							console.log(value);
							if (value == null && defaults[key]) {
								console.log("Reading value from the defaults");
								successCallback(defaults[key]);
								return;
							}

							successCallback(value);

						})
						.error(function (error) {

							if (defaults[key]) {
								console.log("Reading value from the defaults");
								successCallback(defaults[key]);
								return;
							}

							console.log("LS Read Error: " + key + " = " + error);
							errorCallback(error);
						})
				},
				remove: function (key, successCallback, errorCallback) {
					console.log(key);

					if (typeof key == "undefined")
						return;

					$cordovaPreferences.remove(key)
						.success(function () {
							console.log("LS Remove Success: " + key);
							successCallback();
						})
						.error(function (error) {
							console.log("LS Remove Error: " + key);
							errorCallback(error);
						})
				},
				getDeviceID: function () {
					return device['uuid'] || "";
				},
				getDeviceType: function () {
					return device['platform'] || "";
				},
				getDeviceToken: function () {
					return deviceToken;
				},
				setDeviceToken: function (token) {
					deviceToken = token
					return deviceToken;
				},

				getUserProfile: function () {
					return userProfile;
				},

				setUserProfile: function (obj) {
					userProfile = obj;
					return userProfile;
				},
				termsOfUseDownloaded: false
				,
				data: {
					// Used to store app Data
					"AppID": appConst.appId
				},

				geocodeAddress: function (addressTxt, callback) {
					var request = {
						'address': addressTxt
					};

					plugin.google.maps.Geocoder.geocode(request, function (results) {
						if (results.length) {
							var result = results[0];
							var position = result.position;

							callback(position);
						} else {
							console.log('Geocode was not successful');
							callback({});
						}
					});
				}
			};

		}
	]);
