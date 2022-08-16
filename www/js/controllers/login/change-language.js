'use strict';

angular.module('app.controllers')
	.controller('changelanguageCtrl', ['$scope', '$ionicPopup', '$location', '$ionicHistory', '$translate', '$ionicLoading', 'localStorageFactory', '$state', 'appConst',
		function($scope, $ionicPopup, $location, $ionicHistory, $translate, $ionicLoading, localStorageFactory, $state, appConst) {

			$scope.selectedLanguage = localStorageFactory.data["AppLang"];

			$scope.languageChanged = function() {
				console.log("Language changed")
				console.log($scope.selectedLanguage);

				if($scope.selectedLanguage == appConst.en) {
					$translate.use("en");
					localStorageFactory.data.AppLanguageParam = "EN";
					storeInLocalStorage("AppLang", appConst.en);
				} else {
					$translate.use("es");
					localStorageFactory.data.AppLanguageParam = "ESP";
					storeInLocalStorage("AppLang", appConst.es);
				}

				// Clear the data for the procedures and provider specialization
				localStorageFactory.data['procedureList'] = [];
				localStorageFactory.data['providerSpecilization'] = [];
			};

			function storeInLocalStorage(key, value) {
				localStorageFactory.data[key] = value;
				localStorageFactory.save(key, value, function(data) {
					localStorageFactory.data[key] = data;
				}, function(error) {
					console.log("Unable to store: " + key + " - " + value);
				});
			};
		}
	])
