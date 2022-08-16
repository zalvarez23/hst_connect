'use strict';
/**
 * @name MapController
 *
 * @description 
 * 		Used to select location on the map
 * 		
 */

angular.module('app.controllers')
	.controller('mapShowLocationCtrl', ['$rootScope', '$scope', '$ionicPopup', '$translate', '$filter', '$ionicLoading', '$state', 'localStorageFactory', '$ionicHistory',
		function ($rootScope, $scope, $ionicPopup, $translate, $filter, $ionicLoading, $state, localStorageFactory, $ionicHistory) {
			$scope.goToBack = function () {
				$ionicHistory.goBack();
			}
			$scope.newProject = localStorage.getItem('newProject');
			$scope.locations = localStorageFactory.data.resultlocations;
			$scope.providerType = localStorageFactory.data.providerType;
			console.log($scope.providerType)

		}
	])
