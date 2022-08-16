{
  'use strict';
  angular.module('app.services', [])
  .factory('getUsageService', getUsageService)           
    getUsageService.$inject = ['$http','apiUrl', 'utilFactory','appConst', 'localStorageFactory'];
    function getUsageService($http, apiUrl, utilFactory,appConst, localStorageFactory){
      return {
        getApproved: getApproved,
        debugMethod: debugMethod
      };
      function getUsage() {
        var rootURL = apiUrl.baseUrl;        
        return $http({
          method: 'POST',
          url: rootURL + '/GetInsurancePlanGenericInfo2',
          params: {appId: appConst.AppId,
             memberId: localStorageFactory.data[MemberId],
             groupId: localStorageFactory.data[GroupId],
             User_id : localStorage.getItem('User_Id')
            },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        //return acceptance
      }
      function debugMethod(){
          console.log("test method");
      }
    }
}
