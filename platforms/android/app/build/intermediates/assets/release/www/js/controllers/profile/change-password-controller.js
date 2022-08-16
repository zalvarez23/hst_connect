'use strict';
/**
 * @name changePasswordCtrl
 *
 * @description 
 * 		Controller for the Change password page
 */
angular.module('app.controllers')

	.controller('changePasswordCtrl', ['$scope', '$location', '$ionicPopup', '$translate', '$filter', '$ionicLoading', 'localStorageFactory', 'profileService', '$ionicHistory', '$ionicTabsDelegate',
		function ($scope, $location, $ionicPopup, $translate, $filter, $ionicLoading, localStorageFactory, profileService, $ionicHistory, $ionicTabsDelegate) {

			// Initialize 
			var postData = {};
			$scope.chpass = { "AppID": null, "MemberId": null, "GroupId": null };
			var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{6,}$/;

			$scope.chpass["AppID"] = localStorageFactory.data.AppID;
			$scope.chpass["MemberId"] = localStorageFactory.data.MemberId;
			$scope.chpass["GroupId"] = localStorageFactory.data.GroupId;
			$scope.chpass["BuildVersion"] = localStorage["Version"];
			$scope.chpass["Device_Type"] = localStorage["DeviceType"];
			$scope.chpass["DeviceId"] = localStorageFactory.getDeviceID();

			postData["BuildVersion"] = localStorage["Version"];
			postData["Device_Type"] = localStorage["DeviceType"];

			$ionicTabsDelegate.showBar(false);


			/**
			 * @name changePassword
			 * @description 
			 * 		Call the Change Password API
			 *
			 */
			$scope.changePassword = function () {
				console.log("Change Password Data:");
				console.log($scope.chpass);

				var errMsg = null;

				if ($scope.changePasswordForm.$valid) {
					if (passwordPattern.test($scope.chpass.Password) == false) {
						errMsg = $translate.instant('MUST_1');
						$scope.changePasswordForm.Password.$invalid = true;
					} else if ($scope.chpass.Password != $scope.confirmPassword) {
						// Password mismatch
						errMsg = $translate.instant('PASSWORDS_MUST_MATCH');
						$scope.changePasswordForm.Password.$invalid = true;
						$scope.changePasswordForm.confirmPassword.$invalid = true;
					}
				} else {
					errMsg = $translate.instant('PLEASE_FILL_REQUIRED_FIELDS');
				}

				if (errMsg != null) {
					console.log("invalid form data");

					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: errMsg
					});
					alertPopup.then(function (res) {
					});

					return;
				};


				var passwordChangeService = profileService.changePassword;

				console.log("valid form data");

				$ionicLoading.show({
					template: '<p>' + $translate.instant('LOADING') + '</p><ion-spinner></ion-spinner>'
				});

				passwordChangeService.change($scope.chpass).$promise.then(function (response) {

					$ionicLoading.hide(); // Hide loading overlay

					console.log("Success : ");
					console.log(response);
					if (response.status.toLowerCase() == "ok") {
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('SUCCESS'),
							template: $translate.instant('PASSWORD_UPDATED_SUCCESSFULLY')
						});
						alertPopup.then(function (res) {
							$ionicHistory.goBack();
						});
					} else {
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('ERROR'),
							template: $translate.instant('INVALID_DATA')
						});
						alertPopup.then(function (res) {
							console.log('No internet connection Error');
						});
					}

				}, function (error) {
					$ionicLoading.hide(); // Hide loading overlay

					console.log("Error : ");
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

			};

		}
	])
