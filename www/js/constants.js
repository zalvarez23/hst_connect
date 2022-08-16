'use strict';
angular.module('app.constants', [])

	.constant("CONSTANTS",
		{
			"LOGIN": {
				"USERNAME_TXT_MINLENGTH": "3",
				"USERNAME_TXT_MAXLENGTH": "30",
				"PASSWORD_TXT_MAXLENGTH": 30,
				"PASSWORD_TXT_MINLENGTH": 3
			}
		}
	)
	.constant("appConst",
		{
			"appId": "8B2A6BCD-7E8A-4D2B-AAB0-88EFAE074FF3",
			"en": "English",
			"es": "Español"
		}
	)
	.constant("apiUrl",
		{
			"baseUrl" : "https://mobileclient1.hstechnology.com/api/HSTAdmin"
			// "baseUrl": "https://mobileclient1.hstechnology.com/mobileapi_test/api/HSTAdmin"

		}
	)
