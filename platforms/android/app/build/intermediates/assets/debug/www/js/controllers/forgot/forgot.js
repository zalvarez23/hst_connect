'use strict';
/** Controller for Forgot Password/Username **/

angular.module('app.controllers', ['app.services','app.constants'])
.controller('forgotPasswordCtrl', ['$scope', '$rootScope', '$state', '$ionicPopup', '$location', '$ionicHistory', '$translate','hstLoginFactory', 'CONSTANTS','$ionicLoading','localStorageFactory','$filter','$stateParams', 'appConst', '$cordovaDatePicker',
   function($scope, $rootScope, $state, $ionicPopup, $location, $ionicHistory, $translate, hstLoginFactory,CONSTANTS,$ionicLoading,localStorageFactory, $filter,$stateParams, appConst, $cordovaDatePicker) {
    
    //Init  
    var init = function(){
      $scope.questonRes = {};
      $scope.userAnswer = {};
      $scope.userIdentityRes = {};  
      $scope.view={};    
      $scope.showQuestionContainer = false;         
      $scope.postData = {};      
      $scope.postData["AppID"] = appConst.appId;
      $scope.postData["MemberId"] = localStorageFactory.data.MemberId;
      $scope.postData["GroupId"] = localStorageFactory.data.GroupId;
      $scope.postData["BuildVersion"] = localStorage["Version"];
      $scope.postData["Device_Type"] = localStorage["DeviceType"];
      $scope.postData["DeviceId"] = localStorageFactory.getDeviceID();
    } 
    
   
    // Function used to display loader
    var showLoader = function(){
      $ionicLoading.show({
          template: '<p>' + $translate.instant('LOADING') + '</p><ion-spinner></ion-spinner>'
      });
    }

    // Function used to hide loader
    var hideLoader = function(){
      $ionicLoading.hide();
    }
   	
    /**
     *@description Function used to get security Questions for a given user
     *@name validate
     */
   	$scope.validate = function(){	      
   		if($scope.forgot.$invalid) 
   		{
         var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: $translate.instant('PLEASE_FILL_REQUIRED_DETAILS')
           });
        alertPopup.then(function(res) {});
        return;
      }	   
      
      var reqData = {
        "AppID":$scope.postData.AppID,
        "MemberId": $scope.view.memeberId,
        "DOB" : $filter('date')($scope.view.birthDate, 'yyyy-MM-dd'),
        "groupId": $scope.view.groupId,
        "BuildVersion" : localStorage["Version"],
        "Device_Type" : localStorage["DeviceType"], 
        "DeviceId" : localStorageFactory.getDeviceID()  
      };
      showLoader();      
    	hstLoginFactory.verifyIdentity(reqData).$promise.then(function(response){
        if(response.status.toLowerCase() != "ok")
        {
            hideLoader();
           var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: $translate.instant('RECORDS_NOT_MATCHED')
           });
          alertPopup.then(function(res) {});
          return;
        }  
   			$scope.showQuestionContainer = true;
   			$scope.userIdentityRes = response;
   			hideLoader();
   		},
   		function(error){  
       
   		});   		

   	};

    /**
     * @description Checks submitted answer with the response
     */
   	$scope.submit = function(){

   		if($scope.questionForm.$invalid) 
   			return;
      
      // Incasesentive string comparing - Comparing answers 
   		if(($scope.userAnswer.ans1.toLowerCase() == $scope.userIdentityRes.message.Ans1.toLowerCase()) && 
          ($scope.userAnswer.ans2.toLowerCase() == $scope.userIdentityRes.message.Ans2.toLowerCase())) {
   			if($stateParams.isUsername)
        {
           var alertPopup = $ionicPopup.alert({
            title: $translate.instant('YOUR_USERNAME'),
            template: $scope.userIdentityRes.message.Username
           });
          alertPopup.then(function(res) {            
            $state.go('login');
          });
        }
        else{          
          $state.go('resetPassword');
        }
        return;
   		}
   		else{   			
        //  alert('Entro error')
        // Need to update the error messages
        var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: $translate.instant('ERROR_SECURITY')
          });
          alertPopup.then(function(res) {});
   		}
   	};	

    init();

    $scope.selectDate = function() {
      var options = {
        date: $scope.selectedDate || new Date(),
        mode: 'date', // or 'time'
        allowOldDates: true,
        allowFutureDates: false,
        doneButtonLabel: 'DONE',
        // doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        // cancelButtonColor: '#000000'
      };

      $cordovaDatePicker.show(options).then(function(date){
        $scope.view.birthDate = $filter('date')(date, "MM/dd/yyyy");
        $scope.selectedDate = date;
        console.log('Selected date: ' + date);
      });
    };

}]);
