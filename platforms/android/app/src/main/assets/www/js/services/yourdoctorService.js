'use strict';
/**
 * @name yourDoctorService
 *
 * @description 
 * 		AngularJS service to perform API calls in profile page.
 * 		It provides services to getEndUserDetails, Change User Email and Change User password
 * 		
 */

angular.module('app.services')

.service("yourDoctorService", [ "$resource", "apiUrl", "utilFactory",
	function ($resource, apiUrl, utilFactory) {
		var baseUrl = apiUrl.baseUrl;

		var getPCPUrl 			= baseUrl + "/GetPCPInfo";
		var setPCPUrl 			= baseUrl + "/SetPCP";

		/**
		 * @name Get Your Doctor API
		 * @description 
		 * 		Get user's PCP(Personal Care Pysician) detail from the server
		 * 		
		 * @param {JSON object}
		 *        @param {String} AppId
		 *        @param {String} MemberId
		 *        @param {String} GroupId 
		 *        
		 */
		this.yourDoctor = $resource(getPCPUrl, {}, {
			getDoctorDetails : {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});

		/**
		 * @name Set Your Doctor API
		 * @description 
		 * 		Set user's PCP(Personal Care Pysician)
		 * 		
		 * @param {JSON object}
		 *        @param {String} AppId
		 *        @param {String} MemberId
		 *        @param {String} NPI 
		 *        
		 */
		this.setPCP = $resource(setPCPUrl, {}, {
			SetPCP : {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});
	}
]);
