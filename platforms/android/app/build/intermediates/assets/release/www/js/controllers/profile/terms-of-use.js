'use strict';

angular.module('app.controllers')

.controller('termsOfUseCtrl', ['$rootScope','$scope', '$location', '$ionicPopup', '$translate', '$filter', '$ionicLoading', 'profileService', 'localStorageFactory','$ionicTabsDelegate',
	function($rootScope,$scope, $location, $ionicPopup, $translate, $filter, $ionicLoading, profileService, localStorageFactory,$ionicTabsDelegate) {
		console.log("Terms of use page loaded");

		$scope.termsOfUseText = "Terms of use";
		var termOfUse = profileService.termOfUse;
		$ionicTabsDelegate.showBar(false);
		/*$ionicLoading.show({
			template: '<p>'+$translate.instant('LOADING')+'</p><ion-spinner></ion-spinner>'
		});*/

		var postData = {};
		postData["AppID"] = localStorageFactory.data.AppID;
		postData["MemberId"] = localStorageFactory.data.MemberId;
		postData["GroupId"] = localStorageFactory.data.GroupId;
		postData["BuildVersion"] = localStorage["Version"];
		postData["Device_Type"] = localStorage["DeviceType"];
		postData["DeviceId"] = localStorageFactory.getDeviceID();
		$scope.termsInit = function () {
			getTermsOfUse();
		}
		
		function getTermsOfUse() {
			var txt = $translate.instant('TERMS_USE');
			// Formating the text with HTML tags
			txt = txt.replace(/\n/g, "<br>");
			txt = txt.replace(/\r/g, "");
			txt = txt.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
			localStorageFactory.data.termsOfUseText = txt;
			$scope.termsOfUseText = localStorageFactory.data.termsOfUseText;
			return;			
			if(typeof localStorageFactory.data.termsOfUseText != "undefined") {
				$ionicLoading.hide(); // Hide loading overlay
				$scope.termsOfUseText = localStorageFactory.data.termsOfUseText;
				console.log("Already agreement loaded")
				return;
			}

			console.log(postData);

			for(var k in postData) {
				if(postData[k] == null) {
					return;
				}
			}
			
			termOfUse.getTermOfUse(postData).$promise.then(function(response) {

				$ionicLoading.hide(); // Hide loading overlay

				console.log("Success : ");
				// console.log(response);
				var status = response.status;
				console.log(status);
				if(status.toLowerCase() == "ok") {

					var txt = response.message || "Terms of Use";
					// Formating the text with HTML tags
					txt = txt.replace(/\n/g, "<br>");
					txt = txt.replace(/\r/g, "");
					txt = txt.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
					localStorageFactory.data.termsOfUseText = txt;
					$scope.termsOfUseText = localStorageFactory.data.termsOfUseText;
				} else {
					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('INVALID_DATA')
					});
					alertPopup.then(function(res) {
						console.log('No internet connection Error');
					});
				}

			}, function(error) {
				$ionicLoading.hide(); // Hide loading overlay

				$scope.termsOfUseText = "Unable to load Terms of Use. Please try again"
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
])
