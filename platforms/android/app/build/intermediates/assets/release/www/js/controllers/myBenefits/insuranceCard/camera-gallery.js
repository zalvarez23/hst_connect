'use strict';

angular.module('app.controllers')
	.controller('PhotoCtrl', ['$scope', '$rootScope', '$ionicPopup', '$translate', '$ionicLoading', 'localStorageFactory', '$state', 'utilFactory', '$ionicHistory', '$cordovaCamera',
		function ($scope, $rootScope, $ionicPopup, $translate, $ionicLoading, localStorageFactory, $state, utilFactory, $ionicHistory, $cordovaCamera) {

			$scope.imageType = $rootScope.imageType // profilePicture
			$scope.image = $rootScope.imageSrc[$scope.imageType];

			var stopper = false;
			$scope.takePhoto = function (value) {

				if (stopper) return;
				stopper = true;
				if (value == 1) {
					// TAKE PHOTO
					var options = {
						quality: 100,
						destinationType: Camera.DestinationType.DATA_URL,
						sourceType: Camera.PictureSourceType.CAMERA,
						allowEdit: false,
						encodingType: Camera.EncodingType.JPEG,
						targetWidth: 450,
						targetHeight: 524,
						popoverOptions: CameraPopoverOptions,
						saveToPhotoAlbum: false
					}
				} else {
					// SELECT PHOTO
					var options = {
						quality: 100,
						destinationType: Camera.DestinationType.DATA_URL,
						sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
						allowEdit: false,
						encodingType: Camera.EncodingType.JPEG,
						targetWidth: 450,
						targetHeight: 524,
						popoverOptions: CameraPopoverOptions,
						saveToPhotoAlbum: false
					}
				};

				$cordovaCamera.getPicture(options).then(function (data) {
					$rootScope.imageSrc[$scope.imageType] = "data:image/jpeg;base64," + data;
					$scope.image = $rootScope.imageSrc[$scope.imageType];
					localStorageFactory.save($scope.imageType, utilFactory.base64_encode(data), function () { }, function () { });
					stopper = false;
				}, function (err) {
					alert(JSON.stringify(err))
					stopper = false;
					console.log(JSON.stringify(err))
					// error
				});
			}
			$scope.successcallback = function (data) {

			}

			$scope.removePhoto = function () {
				$rootScope.imageSrc[$scope.imageType] = null;
				localStorageFactory.remove($scope.imageType, function () { }, function () { });
				$ionicHistory.goBack();
			}
		}
	])
