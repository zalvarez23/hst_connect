{
  'use strict';
  angular.module('app.services', [])
  .factory('searchDetailsService', searchDetailsService)           
    searchDetailsService.$inject = ['$http','apiUrl', 'utilFactory'];
    function searchDetailsService($http, apiUrl, utilFactory){
      return {
        getApproved: getApproved,
        debugMethod: debugMethod
      };
      function getApproved(appID, memberID, groupID, lat, lng, dist, doc, cat, procedure, specID) {
        var rootURL = apiUrl.baseUrl;        
        return $http({
          method: 'POST',
          url: rootURL + '/GetAuthorizedProviders',
          data: {
            language: "English",
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        //return acceptance
      }
      function debugMethod(){
          console.log("test method");
          //console.log("warning will robinson warning")
      }
    }
}