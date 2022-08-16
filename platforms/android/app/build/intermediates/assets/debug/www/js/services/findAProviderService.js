'use strict';
/**
 * 
 */

angular.module('app.services')

.service("findAProviderService", [ "$resource", "apiUrl", "utilFactory",
	function ($resource, apiUrl, utilFactory) {
		var baseUrl = apiUrl.baseUrl;

		var getProvidersCategoryUrl = baseUrl + "/GetProviderCategory";
		var getInNetworkProvider = baseUrl + "/GetInNetworkProvider";

		var getProceduresUrl = baseUrl + "/GetProcedures";
		var getAuthorizedProvidersDoctorUrl = baseUrl + "/GetAuthorizedProviders_PHCSNetwork";

		var getProviderSpecializationUrl = baseUrl + "/GetProviderSpecialization";
		var setPCPUrl = baseUrl + "/SetPCP";

		var getProSpecializationByLangURL = baseUrl + "/GetProviderSpecializationByLang";
		var getProcedureInformationByDes = baseUrl + "/GetProcedureInformationByDescription";
		var getProceduresByLangUrl = baseUrl + "/GetProceduresByLang";
		var getProceduresByLangUrlBody = baseUrl + "/GetProcedureByBodyPart";
		var getFacilitySpecializationByLang = baseUrl + "/GetFacilitySpecializationByLang";
		var getAuthorizedFacilities = baseUrl + "/GetAuthorizedFacilities";
		var getAuthorizedProvidersUrl = baseUrl + "/GetAuthorizedProviders";

		/**
		 * @name  providersCatefory
		 * @description 
		 * 		Get Provider Category list
		 * 
		 */
		this.providersCategory = $resource(getProvidersCategoryUrl, {}, {
			get : {
				method : "GET"
			}
		});

		this.inNetworkProvider = $resource(getInNetworkProvider, {}, {
			get : {
				method : "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});
		


		/**
		 * @name  procedures
		 * @description 
		 * 		get list of procedures
		 * 		
		 *
		 */
		this.procedures = $resource(getProceduresUrl, {}, {
			get : {
				method : "POST"
			}
		});


		/**
		 * @name authorizedProviders
		 * @description 
		 * 		Search providers (doctors or hospital)
		 *
		 * POST Params
		 * AppID
		 * MemberId
		 * GroupId
		 * 
		 * Latitude
		 * Longitude
		 * Distance
		 * 
		 * Name
		 * CategoryId
		 * 
		 * ProcedureIndicator
		 * SpecializationID
		 */
	
		this.authorizedProviders = $resource(getAuthorizedProvidersUrl, {}, {
			get : {
				method : "POST",
				timeout : 1000 * 60, // Timeout for call
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});


	
		this.authorizedProvidersDoctor = $resource(getAuthorizedProvidersDoctorUrl, {}, {
			get : {
				method : "POST",
				timeout : 1000 * 60, // Timeout for call
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});


		/**
		 * @name providerSpecialization
		 *
		 * @description 
		 * 		get provider specialization list
		 *
		 */
		this.providerSpecialization = $resource(getProviderSpecializationUrl, {}, {
			get : {
				method : "GET"
			}
		});


		/**
		 * @name  procedures
		 * @description 
		 * 		set PCP 
		 * 		
		 * 		AppID
		 *		MemberId
		 *		NPI
		 *
		 */
		this.setPCP = $resource(setPCPUrl, {}, {
			set : {
				method : "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});


		this.proceduresByLang = $resource(getProceduresByLangUrl, {}, {
			get : {
				method : "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});

		this.proceduresByLangBody = $resource(getProceduresByLangUrlBody, {}, {
			get : {
				method : "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});	
		
		this.proceduresByDescription = $resource(getProcedureInformationByDes, {}, {
			get : {
				method : "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});	

		this.providerSpecializationByLang = $resource(getProSpecializationByLangURL, {}, {
			get : {
				method : "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});

		this.facilitySpecializationByLang = $resource(getFacilitySpecializationByLang, {}, {
			get : {
				method : "GET"
			}
		});	

		this.authorizedFacilities = $resource(getAuthorizedFacilities, {}, {
			get : {
				method : "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: utilFactory.encodePostBody
			}
		});	
		
	}
])
