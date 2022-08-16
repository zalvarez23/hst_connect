'use strict';
angular.module('app.services', [])
  .factory('hstLoginFactory', ['$resource', "apiUrl", 'utilFactory',
    function ($resource, apiUrl, utilFactory) {

      var rootURL = apiUrl.baseUrl;

      return $resource('hstLoginFactory', {}, {
        login: {
          method: 'POST',
          url: rootURL + '/Login',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: utilFactory.encodePostBody
        },
        logout: {
          method: 'PUT',
          url: ''
        },
        verifyIdentity: {
          method: 'POST',
          url: rootURL + '/VerifyIdentity',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: function (data) {
            var str = [];
            for (var d in data)
              str.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            return str.join("&");
          }
        },
        forgotPassword: {
          method: 'POST',
          url: rootURL + '/ForgetPassword',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: function (data) {
            var str = [];
            for (var d in data)
              str.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            return str.join("&");
          }
        },
        resetPassword: {
          method: 'POST',
          url: rootURL + '/Resetpassword',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: function (data) {
            var str = [];
            for (var d in data)
              str.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            return str.join("&");
          }


        },

        verifiAnswes: {
          method: 'POST',
          url: rootURL + '/VerifySecurityAnswers',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: function (data) {
            var str = [];
            for (var d in data)
              str.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            return str.join("&");
          }


        },
        IsDeviceRegistered: {
          method: 'POST',
          url: rootURL + '/IsDeviceRegistered',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: utilFactory.encodePostBody
        }/*,
            getUsers:{
              method: 'GET',
              url: 'https://mobileclient1.hstechnology.com/api/HSTAdmin/GetEndUser'
            }*/

      });
    }
  ]);
