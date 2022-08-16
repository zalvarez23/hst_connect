'use strict';

angular.module('app.controllers')
.controller('callInsuranceCtrl', ['$scope', '$rootScope', '$ionicPopup', '$location', '$ionicHistory', '$translate', 'CONSTANTS','$ionicLoading','localStorageFactory','$state', '$filter', 'callInsuranceService',
	function($scope, $rootScope, $ionicPopup, $location, $ionicHistory, $translate,CONSTANTS,$ionicLoading,localStorageFactory,$state, $filter, callInsuranceService) {
	
		var callInsurance = callInsuranceService.callInsuranceInfo;

		$scope.callinsuranceinfo = localStorageFactory.data.callinsuranceinfo || [];

		$scope.view = {}

		var postData = {};
		postData["AppId"] = localStorageFactory.data.AppID;
		postData["User_Id"] = localStorage.getItem('User_Id');

		getCallInsuranceInfo();
		$scope.newProject = localStorage.getItem('newProject');
		
		function getCallInsuranceInfo() {

			$ionicLoading.show({
				template: '<p>'+$translate.instant('LOADING_CALL_INSURANCE_INFO')+'</p><ion-spinner></ion-spinner>'
			});

			if(localStorageFactory.data.callinsuranceinfo != null) {
				$ionicLoading.hide(); // Hide loading overlay
				$scope.callinsuranceinfo = localStorageFactory.data.callinsuranceinfo;
				console.log("Call Insurance info already downloaded");
				console.log($scope.callinsuranceinfo);
				return;
			}
			
			callInsurance.get(postData).$promise.then(function(response){
				  //success callaback
				  
				$scope.view = response.message;
				$ionicLoading.hide(); // Hide loading overlay

				if(response.status.toLowerCase() == "ok") {
					localStorageFactory.data.callinsuranceinfo = response.message || null; 
					$scope.callinsuranceinfo = localStorageFactory.data.callinsuranceinfo || {};
					$scope.callinsuranceinfo.splice(2,1); 

				} else {
					console.log(response);
					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('INVALID_DATA')
					});
					alertPopup.then(function(res) {
						console.log('Invalid data');
					});
				}
			}, function(error) {

				$ionicLoading.hide(); // Hide loading overlay

				console.log("Error : ");
				console.log(error);

				// Show network Error
				var alertPopup = $ionicPopup.alert({
					title: $translate.instant('ERROR'),
					template: $translate.instant('NO_CONN_ERR')
				});
				alertPopup.then(function(res) {
					console.log('No internet connection Error');
				});
			});
		};

	}
]);
