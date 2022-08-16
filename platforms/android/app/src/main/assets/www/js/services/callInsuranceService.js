'use strict';

angular.module('app.services')
.service('callInsuranceService', ['$resource', 'apiUrl', 'utilFactory',
	function ($resource, apiUrl, utilFactory) {

		var rootURL = apiUrl.baseUrl;

		var getCallInsuranceInfoUrl = rootURL + "/GetInsuranceContactInfo2";

		/**
		 * @name  callInsuranceInfo
		 * @description
		 * 		Used to fetch the call insurance info
		 * 		
		 * 
		 */
		this.callInsuranceInfo = $resource(getCallInsuranceInfoUrl, {}, {
			get : {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});

	}
]);
