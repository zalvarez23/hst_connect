'use strict';
angular.module('app.factories')

// Used to exchange data between registration pages
.factory('preFetchDataFactory', [ 'localStorageFactory', '$ionicLoading', 'findAProviderService', 
	function (localStorageFactory, $ionicLoading, findAProviderService) {

		var procedures = findAProviderService.proceduresByLang;
		var providerSpecialization = findAProviderService.providerSpecializationByLang;

		function prefetchData() {

			var fetching = {
				specialization : true,
				procedures : true
			};

			$ionicLoading.show({
				template: '<p>Loading Procedure list...</p><ion-spinner></ion-spinner>'
			});

			// Download Procedure list data
			var postData = {};
			postData["language"] = localStorageFactory.data.AppLanguageParam;
			procedures.get(postData).$promise.then(function(response) {
				fetching.procedures = false; 
				hideloader();

				if(response.status.toLowerCase() == "ok" && response.message != null) {
					if( Object.prototype.toString.call(response.message) == '[object Array]')
						localStorageFactory.data.procedureList = response.message;
				} else {
					console.log("Error while downloading Procedures");
					console.log(response.message);
				}
			}, function(error) {
				fetching.procedures = false; 
				hideloader();
				console.log("Error while downloading Procedures :");
				console.log(error);
			});
	
			// Download Provider Specialization list data
			var postData = {};
			postData["language"] = localStorageFactory.data.AppLanguageParam;
			providerSpecialization.get(postData).$promise.then(function(response) {
				fetching.specialization = false;
				hideloader();

				if(response.status.toLowerCase() == "ok" && response.message != null) {
					if( Object.prototype.toString.call(response.message) == '[object Array]')
						localStorageFactory.data.providerSpecilization = response.message;
				} else {
					console.log("Error while downloading Provider Specialization");
					console.log(response.message);
				}
			}, function(error) {
				fetching.specialization = false;
				hideloader();
				console.log("Error while downloading Provider Specialization :");
				console.log(error);
			});

			function hideloader() {
				if(fetching.procedures == false && fetching.specialization == false)
					$ionicLoading.hide();
			};

		};

		return {
			"prefetchSearchData" : prefetchData
		};

	}
])
