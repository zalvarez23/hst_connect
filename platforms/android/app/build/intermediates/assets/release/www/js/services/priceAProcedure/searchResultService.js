// 'use strict';
//  angular.module('app.services', [])
// .factory('searchResultService', ['$resource', "apiUrl",'utilFactory',
//     function ($resource, apiUrl,utilFactory) {

//         var rootURL = apiUrl.baseUrl;

//         return $resource('searchResultService', {}, {
//             searchResult: {
//                 method: 'POST',
//                 url: rootURL + '/GetAuthorizedProviders',
//                 headers: {
//                   'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 transformRequest: utilFactory.encodePostBody
//             }

//         });
//     }
// ]);


// 'use strict';
// /**
//  * 
//  */

angular.module('app.services')

	.service("searchResultService", ["$resource", "apiUrl", "utilFactory",
		function ($resource, apiUrl, utilFactory) {
			var baseUrl = apiUrl.baseUrl;

			// var getProcedureInformationByProcId = baseUrl + "/GetProcedureInformationByProcIdentifier";
			var getProcedureInformationByProcId = baseUrl + "/GetProcedureInformationByMedlineKeywords";

			this.proceduresByProcId = $resource(getProcedureInformationByProcId, {}, {
				get: {
					method: "POST",
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					transformRequest: utilFactory.encodePostBody
				}
			});


		}
	])


