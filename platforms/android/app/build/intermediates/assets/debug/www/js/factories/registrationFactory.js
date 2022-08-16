'use strict';
angular.module('app.factories')

// Used to exchange data between registration pages
.factory('registrationFactory', [ 'localStorageFactory',
	function (localStorageFactory) {
		var user = {
			AppID : "",
			MemberId : "",
			GroupId : "",
			Username : "",
			FirstName : "",
			LastName : "",
			DOB : "",
			Password : "",
			SecurityQ1 : "",
			Ans1 : "",
			SecurityQ2 : "",
			Ans2 : "",
			DeviceId : "",
			Device_Token_Id : "",
			Device_Type : "",
			Email : ""
		};

		return {
			getUserData : function () {
				return user;
			},
			setUserData : function (userData) {
				user = userData;
			}
		}
	}
]);