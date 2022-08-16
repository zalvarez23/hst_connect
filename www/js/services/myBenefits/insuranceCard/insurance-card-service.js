'use strict';

angular.module('app.services')
.service('insuranceCardService', ['$resource', 'apiUrl', 'utilFactory',
	function ($resource, apiUrl, utilFactory) {

		var rootURL = apiUrl.baseUrl;
		var insuranceInfoUrl = rootURL + '/GetMemberFullInsuranceInfo';
		var insuranceRedCard = rootURL + '/GetRedCardMemberIDCard';

		this.InsuranceCardInfo = $resource(insuranceInfoUrl, {}, {
			get : {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});

		this.ShowRedCard = $resource(insuranceRedCard, {}, {
			get : {
				method: 'GET',
				headers: {
				  'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});		
	}
])
