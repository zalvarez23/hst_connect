'use strict';

angular.module('app.controllers')
    .controller('insuranceCardPhotosCtrl', ['$scope', '$ionicPopup', '$location', '$ionicHistory', '$translate', 'CONSTANTS', '$ionicLoading', 'localStorageFactory', '$state', 'appConst', '$filter', '$rootScope', 'utilFactory',
        function($scope, $ionicPopup, $location, $ionicHistory, $translate, CONSTANTS, $ionicLoading, localStorageFactory, $state, appConst, $filter, $rootScope, utilFactory) {
            //insuranceCardService,profileService

            $scope.takePicture = function (type) {
            	$rootScope.imageType = type;
            	$state.go("tabsController.camera");
            }
        }
    ]);
