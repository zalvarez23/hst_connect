angular.module('app.controllers', ['app.services','app.constants'])
.controller('resetPasswordCtrl', ['$rootScope','$scope', '$state', '$ionicPopup', '$location', '$ionicHistory', '$translate','hstLoginFactory', 'CONSTANTS','$ionicLoading','localStorageFactory', 'appConst',
   function($rootScope,$scope, $state, $ionicPopup, $location, $ionicHistory, $translate, hstLoginFactory,CONSTANTS,$ionicLoading,localStorageFactory, appConst) {

   	var ctrl;
    var init = function(){
      $scope.passwordMatched = true;

      //TODO:Remove 
      ctrl = {};     
      ctrl.data = {};
      ctrl.data.AppID = appConst.appId;
      ctrl.data.DeviceId = '990004939916452';

      $scope.postData = {};      
      $scope.postData["AppID"] = appConst.appId;
      $scope.postData["DeviceId"] = localStorageFactory.getDeviceID();
      $scope.postData["BuildVersion"] = localStorage["Version"];
      $scope.postData["Device_Type"] = localStorage["DeviceType"];
      $scope.postData["DeviceId"] = localStorageFactory.getDeviceID(); 
      
    }
    init();

    // Function used to display loader
    var showLoader = function(){
      $ionicLoading.show({
          template: '<p>'+$translate.instant('LOADING')+'</p><ion-spinner></ion-spinner>'
      });
    }

    // Function used to hide loader
    var hideLoader = function(){
      $ionicLoading.hide();
    }


    /** Checks the password **/
   	$scope.confirmValidate = function(){

      if(!$scope.password || !$scope.confirmPassword)
        return;

      if($scope.password.toLowerCase() == $scope.confirmPassword.toLowerCase())
          $scope.passwordMatched = true;      
      else
          $scope.passwordMatched = false; 
      
    };

    /** Submits the reset password form **/
   	$scope.submit = function(){

      if($scope.resetPassForm.$invalid) 
      {
      	 var alertPopup = $ionicPopup.alert({
                           title: $translate.instant('ERROR'),
                           template: $translate.instant('REQUIRED_DETAILS')
                        });
        alertPopup.then(function(res) {});
      	 return;
      } 

      var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{6,}$/;
      if(!passwordPattern.test($scope.password)) {
      	var alertPopup = $ionicPopup.alert({
                           title: $translate.instant('ERROR'),
                           template: $translate.instant('MUST_1')
                        });
        alertPopup.then(function(res) {});
      		return;
      }

      if(!$scope.passwordMatched){
        var alertPopup = $ionicPopup.alert({
                           title: $translate.instant('ERROR'),
                           template: $translate.instant("PASSWORD_DOES_NOT_MATCH")
                        });
        alertPopup.then(function(res) {});
        return;
      }

   		if($scope.passwordMatched){
          showLoader();          
          var reqData = {"AppID":$scope.postData["AppID"], "DeviceId":  $scope.postData["DeviceId"], "password": $scope.password};

          hstLoginFactory.resetPassword(reqData).$promise.then(function(response){         
            hideLoader();
            $state.go('login');
            if(response.status.toLowerCase() == "ok"){
                  var alertPopup = $ionicPopup.alert({
                    title: $translate.instant('SUCCESS'),
                    template: $translate.instant('SUCCESS_RESET_PWD')
                  });
                  alertPopup.then(function(res) {
                     $state.go('login');
                  });  
            }
            else{                 
                  var alertPopup = $ionicPopup.alert({
                     title: $translate.instant('ERROR'),
                     template: $translate.instant('ERROR_RESET_PWD')
                  });
                  alertPopup.then(function(res) {                    
                     $state.go('login');
                  });
            }
          
         },
        function(error){
          hideLoader();
          $state.go('login');
        });
      }
   		else{   			
        var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: $translate.instant('ERROR_SECURITY')
        });
        alertPopup.then(function(res) {
            $state.go('login');
            console.log('error in network');
         });
   		}
   	};
 }]);
