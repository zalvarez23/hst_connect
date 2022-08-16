'use strict';
angular.module('app.services')

.service("registrationService", [ "$resource", "apiUrl", "utilFactory",
	function ($resource, apiUrl, utilFactory) {
		this.hello = function () {
			console.log("This is a service function")
	   }

        var baseURL = apiUrl.baseUrl;

    	var registrationUrl = baseURL + "/AddEndUser";
        var userAgreementUrl = baseURL + "/GetAgreement";
        var registrationValidationUrl = baseURL + "/IsValidMemberToRegister";


		this.registration = $resource(registrationUrl, {}, {
			register: {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});

        // POST Request Params
        // AppID:
        // MemberId:
        // GroupId:
        this.userAgreement = $resource(userAgreementUrl, {} , {
            getAgreement: {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: utilFactory.encodePostBody
                }
        });

        // POST Request Params
        // AppID:
        // MemberId:
        // FirstName:
        // LastName:
        // DOB:
        this.registrationValidator = $resource(registrationValidationUrl, {} , {
            validate: {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: utilFactory.encodePostBody
                }
        });
	}
]);
