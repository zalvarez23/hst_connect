'use strict';

angular.module('app.services')
.service('planInformationService', ['$resource', 'apiUrl', 'utilFactory', '$http',
	function ($resource, apiUrl, utilFactory, $http) {
		var rootURL = apiUrl.baseUrl;
		var planInfoUrl = rootURL + '/GetInsurancePlanGenericInfo2';
		var usageUrl = rootURL + '/GetInsurancePlanGenericInfo2';
		this.planInfo = $resource(planInfoUrl, {}, {
			get : {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});

		this.getUsage = function (appId, memberId, groupId,Deviceid,Device_type,Buildversion,user_id){			
			return $http({
				method: 'POST',
				url: usageUrl,
				data: {appID: appId,
					memberID: memberId,
					groupID: groupId,
					DeviceId : Deviceid,
					Device_Type : Device_type,
					BuildVersion : Buildversion,
					User_id : user_id
					},
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			});
		}

	}
]);
