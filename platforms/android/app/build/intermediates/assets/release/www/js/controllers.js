'use strict';
angular.module('app.controllers', [])


.controller('AppCtrl', function($scope, $rootScope, $location, $ionicNavBarDelegate,$state) {

	var path = $location.path();
	if (path.indexOf('login') != -1)
		$ionicNavBarDelegate.showBackButton(false);
	else
		$ionicNavBarDelegate.showBackButton(true);

	$rootScope.changeState = function(state){
		$state.go(state)
	}

	// TOGGLE TEST USER REGISTRATION
  // Set this to TRUE to auto-fill test Registration data during development
	$scope.testUser = false;
})

.controller('openingCtrl',function($scope){

})

.controller('myBenefitsCtrl', function($scope) {

})

.controller('callInsuranceCtrl', function($scope) {

})

.controller('priceAProcedureCtrl', function($scope) {

})


.controller('tabCtrl', ['$scope','localStorageFactory', '$state', '$ionicTabsDelegate',
function($scope, localStorageFactory, $state, $ionicTabsDelegate) {
	var vm = this
	$scope.setTab = function(tab){
		localStorageFactory.data.currentTabSelection = tab+"";
	}
}])


.controller('prefCtrl', function($scope, $cordovaPreferences) {
	var ctrl = this;

	ctrl.store = function() {
		console.log(ctrl.key);
		console.log(ctrl.value);

		if(!ctrl.key || !ctrl.value)
			return;

		$cordovaPreferences.store(ctrl.key, ctrl.value)
			.success(function(value) {
				console.log("Success: " + value);
			})
			.error(function(error) {
				console.log("Error: " + error);
			})
	};

	ctrl.read = function () {
		if(!ctrl.key)
			return;
		$cordovaPreferences.fetch(ctrl.key)
		.success(function(value) {
			ctrl.value = value;
			console.log("Success: " + value);
		})
		.error(function(error) {
			console.log("Error: " + error);
		})

	}
})

.controller('hSTCtrl', function($scope) {

})
