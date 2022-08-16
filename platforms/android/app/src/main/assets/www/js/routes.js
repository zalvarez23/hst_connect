'use strict';
/**
 * @name Router
 * @description HST app route module
 *
 */

angular.module('app.routes', [])

	.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider

			.state('landingPage', {
				url: '/landingPage',
				templateUrl: 'templates/landing/landing.html',
				resolve: {
					landingPageCtrl: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'langingPage',
							files: [
								'js/services/profileService.js',
								'js/services/messagesService.js',
								'js/services/yourdoctorService.js',
								'js/controllers/landing/landing-controller.js'
							]
						})
					}
				}
			})
			.state('messages', {
				url: '/messages',
				templateUrl: 'templates/landing/landing.html',
			})
			.state('yourdoctor', {
				url: '/your-doctor',
				templateUrl: 'templates/landing/landing.html',
			})
			.state('opening', {
				url: '/opening',
				templateUrl: 'templates/opening/opening.html',
				resolve: {
					openScreenLoader: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'hstApp',
							files: [
								'js/controllers/opening/opening-controller.js'
							]
						})
					}
				}

			})
			.state('login', {
				url: '/login',
				templateUrl: 'templates/login/login.html',
				resolve: {
					hstAppLoader: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'hstApp',
							files: [
								'js/services/login/login-service.js',
								'js/controllers/login/login-controller.js'

							]
						})
					}
				}
			})

			.state('changeLanguage', {
				url: '/change-lang',
				templateUrl: 'templates/login/changeLanguage.html',
				resolve: {
					changeLanguage: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'changeLanguage',
							files: [
								'js/controllers/login/change-language.js'
							]
						})
					}
				}
			})

			.state('forgotUsername2', {
				url: '/forgotUsername2/:isUsername',
				cache: false,
				templateUrl: 'templates/forgot/forgot-username.html',
				controller: 'forgotPasswordCtrl'
			})
			.state('forgotPassword2', {
				url: '/forgotPassword2/:isUsername',
				cache: false,
				templateUrl: 'templates/forgot/forgot-password.html',
				controller: 'forgotPasswordCtrl'
			})
			.state('forgotPassword', {
				url: '/forgotPassword',
				templateUrl: 'templates/forgot/forgot-password.html',
				params: {
					isUsername: false
				},
				resolve: {
					hstAppLoader: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'hstApp',
							files: [
								'js/services/login/login-service.js',
								'js/controllers/forgot/forgot.js'
							]
						})
					}
				}
			})
			.state('forgotUsername', {
				url: '/forgotUsername',
				templateUrl: 'templates/forgot/forgot-username.html',
				params: {
					isUsername: false
				},
				resolve: {
					hstAppLoader: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'hstApp',
							files: [
								'js/services/login/login-service.js',
								'js/controllers/forgot/forgot.js'

							]
						})
					}
				}
			})
			.state('resetPassword', {
				url: '/reset-password',
				templateUrl: 'templates/resetpassword/resetpassword.html',
				resolve: {
					hstAppLoader: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'hstApp',
							files: [
								'js/services/login/login-service.js',
								'js/controllers/resetPassword/reset-password-controller.js'

							]
						})
					}
				}
			})
			.state('registration', {
				url: '/registration-1',
				templateUrl: 'templates/registration/registration1.html',
				resolve: {
					depLoader: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'hstApp',
							files: [
								'js/services/registrationService.js',
								'js/factories/registrationFactory.js',
								'js/controllers/registration/registration1.js'
							]
						})
					}
				}
			})

			.state('registration2', {
				url: '/registration-2',
				templateUrl: 'templates/registration/registration2.html',
				resolve: {
					depLoader: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'hstApp',
							files: [
								'js/factories/registrationFactory.js',
								'js/controllers/registration/registration2.js'
							]
						})
					}
				}
			})

			.state('registration3', {
				url: '/registration-3',
				templateUrl: 'templates/registration/registration3.html',
				resolve: {
					depLoader: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'hstApp',
							files: [
								'js/services/registrationService.js',
								'js/factories/registrationFactory.js',
								'js/controllers/registration/registration3.js'
							]
						})
					}
				}
			})

			.state('registration4', {
				url: '/registration-4',
				templateUrl: 'templates/registration/registration4.html',
				resolve: {
					depLoader: function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'hstApp',
							files: [
								'js/services/registrationService.js',
								'js/factories/registrationFactory.js',
								'js/controllers/registration/registration4.js'
							]
						})
					}
				}
			})

			.state('hST', {
				url: '/hst',
				templateUrl: 'templates/hST.html',
				controller: 'hSTCtrl'
			})

		$urlRouterProvider.otherwise('/opening')
		// $urlRouterProvider.otherwise('/landingPage')
	})

	.controller('forgotPasswordCtrl', ['$scope', '$rootScope', '$state', '$ionicPopup', '$location', '$ionicHistory', '$translate', 'hstLoginFactory', 'CONSTANTS', '$ionicLoading', 'localStorageFactory', '$filter', '$stateParams', 'appConst', '$cordovaDatePicker',
		function ($scope, $rootScope, $state, $ionicPopup, $location, $ionicHistory, $translate, hstLoginFactory, CONSTANTS, $ionicLoading, localStorageFactory, $filter, $stateParams, appConst, $cordovaDatePicker) {
			console.log($stateParams.isUsername)

			//Init  
			var init = function () {
				$scope.questonRes = {};
				$scope.userAnswer = {};
				$scope.userIdentityRes = {};
				$scope.view = {};
				$scope.showQuestionContainer = false;
				$scope.postData = {};
				$scope.postData["AppID"] = appConst.appId;
				$scope.postData["MemberId"] = localStorageFactory.data.MemberId;
				$scope.postData["GroupId"] = localStorageFactory.data.GroupId;
				$scope.postData["BuildVersion"] = localStorage["Version"];
				$scope.postData["Device_Type"] = localStorage["DeviceType"];
				$scope.postData["DeviceId"] = localStorageFactory.getDeviceID();
			}


			// Function used to display loader
			var showLoader = function () {
				$ionicLoading.show({
					template: '<p>' + $translate.instant('LOADING') + '</p><ion-spinner></ion-spinner>'
				});
			}

			// Function used to hide loader
			var hideLoader = function () {
				$ionicLoading.hide();
			}

			/**
			 *@description Function used to get security Questions for a given user
			 *@name validate
			 */
			$scope.validate = function () {
				if ($scope.forgot.$invalid) {
					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('PLEASE_FILL_REQUIRED_DETAILS')
					});
					alertPopup.then(function (res) { });
					return;
				}

				var reqData = {
					"AppID": $scope.postData.AppID,
					"MemberId": $scope.view.memeberId,
					"DOB": $filter('date')($scope.view.birthDate, 'yyyy-MM-dd'),
					"groupId": $scope.view.groupId,
					"BuildVersion": localStorage["Version"],
					"Device_Type": localStorage["DeviceType"],
					"DeviceId": localStorageFactory.getDeviceID()
				};
				showLoader();
				hstLoginFactory.verifyIdentity(reqData).$promise.then(function (response) {
					if (response.status.toLowerCase() != "ok") {
						hideLoader();
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('ERROR'),
							template: $translate.instant('RECORDS_NOT_MATCHED')
						});
						alertPopup.then(function (res) { });
						return;
					}
					$scope.showQuestionContainer = true;
					$scope.userIdentityRes = response;
					hideLoader();
				},
					function (error) {

					});

			};

			/**
			 * @description Checks submitted answer with the response
			 */
			$scope.submit = function () {

				if ($scope.questionForm.$invalid)
					return;

				var reqDataVerify = {
					"MemberId": $scope.view.memeberId,
					"DeviceId": localStorageFactory.getDeviceID(),
					"Ans1": $scope.userAnswer.ans1.toLowerCase(),
					"Ans2": $scope.userAnswer.ans2.toLowerCase(),
					"AppID": appConst.appId
				};
				hstLoginFactory.verifiAnswes(reqDataVerify).$promise
					.then(function (response) {
						if (response.status.toLowerCase() == "ok" &&
							response.message.toLowerCase() == "true") {
							if ($stateParams.isUsername == "true") {
								var alertPopup = $ionicPopup.alert({
									title: $translate.instant('YOUR_USERNAME'),
									template: $scope.userIdentityRes.message.Username
								});
								alertPopup.then(function (res) {
									$state.go('login');
								});
							}
							else {
								$state.go('resetPassword');
							}
							return;
						} else {
							// Need to update the error messages
							var alertPopup = $ionicPopup.alert({
								title: $translate.instant('ERROR'),
								template: $translate.instant('ERROR_SECURITY')
							});
							alertPopup.then(function (res) { });
						}
					}, function (error) {

						// Need to update the error messages
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('ERROR'),
							template: $translate.instant('ERROR_SECURITY')
						});
						alertPopup.then(function (res) { });
					});

				// // Incasesentive string comparing - Comparing answers 
				// if (($scope.userAnswer.ans1.toLowerCase() == $scope.userIdentityRes.message.Ans1.toLowerCase()) &&
				// 	($scope.userAnswer.ans2.toLowerCase() == $scope.userIdentityRes.message.Ans2.toLowerCase())) {
				// 	if ($stateParams.isUsername == "true") {
				// 		var alertPopup = $ionicPopup.alert({
				// 			title: $translate.instant('YOUR_USERNAME'),
				// 			template: $scope.userIdentityRes.message.Username
				// 		});
				// 		alertPopup.then(function (res) {
				// 			$state.go('login');
				// 		});
				// 	}
				// 	else {
				// 		$state.go('resetPassword');
				// 	}
				// 	return;
				// }
				// else {
				// 	// Need to update the error messages
				// 	var alertPopup = $ionicPopup.alert({
				// 		title: $translate.instant('ERROR'),
				// 		template: $translate.instant('ERROR_SECURITY')
				// 	});
				// 	alertPopup.then(function (res) { });
				// }
			};

			init();

			$scope.selectDate = function () {
				var options = {
					date: $scope.selectedDate || new Date(),
					mode: 'date', // or 'time'
					allowOldDates: true,
					allowFutureDates: false,
					doneButtonLabel: 'DONE',
					// doneButtonColor: '#F2F3F4',
					cancelButtonLabel: 'CANCEL',
					// cancelButtonColor: '#000000'
				};

				$cordovaDatePicker.show(options).then(function (date) {
					$scope.view.birthDate = $filter('date')(date, "MM/dd/yyyy");
					$scope.selectedDate = date;
					console.log('Selected date: ' + date);
				});
			};

		}]);
