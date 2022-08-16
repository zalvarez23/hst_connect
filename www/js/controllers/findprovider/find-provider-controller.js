'use strict';
angular.module('app.controllers')

	.controller('findAProviderCtrl', ['$rootScope', '$scope', '$location', '$ionicPopup', '$translate', '$filter', '$ionicLoading', '$ionicHistory', '$state', 'localStorageFactory', 'findAProviderService', 'appConst', 'preFetchDataFactory', '$ionicTabsDelegate',
		function ($rootScope, $scope, $location, $ionicPopup, $translate, $filter, $ionicLoading, $ionicHistory, $state, localStorageFactory, findAProviderService, appConst, preFetchDataFactory, $ionicTabsDelegate) {
			console.log("find provider home page loaded");

			var providersCategory = findAProviderService.providersCategory;
			$scope.newProject = localStorage.getItem('newProject');
			$ionicTabsDelegate.showBar(true);

			prefetchData();

			function prefetchData() {

				// Prefetch Procedure list, Category List, Provider Specialization,
				// Download Provider Category
				if (localStorageFactory.data.providerCategory != null) {
					console.log("Provider Category already downloaded");
				} else {
					providersCategory.get().$promise.then(function (response) {
						if (response.status.toLowerCase() == "ok" && response.message != null) {
							if (Object.prototype.toString.call(response.message) == '[object Array]')
								localStorageFactory.data.providerCategory = response.message;
						} else {
							console.log("Error while downloading Provider Category");
							console.log(response.message);
						}
					}, function (error) {
						console.log("Error while downloading Provider Category :");
						console.log(error);
					});
				}

				// Download Procedure list, Provider Specialization
				preFetchDataFactory.prefetchSearchData();
			};
		}
	])
