'use strict';
angular.module('app.controllers')

  .controller('registration3Ctrl', [ '$scope', 'registrationFactory', 'registrationService', '$ionicPopup', '$translate', '$ionicLoading', '$ionicScrollDelegate', '$state', '$ionicHistory', '$rootScope','localStorageFactory',
    function($scope, registrationFactory, registrationService, $ionicPopup, $translate, $ionicLoading, $ionicScrollDelegate,$state, $ionicHistory, $rootScope,localStorageFactory) {

      $scope.reg = registrationFactory.getUserData();
      function cancel() {
        if ($rootScope.firstTime) {
          $ionicHistory.goBack();
        }else{
          $state.go("login")
        }
      }

      $scope.cancel = cancel;

      // TEST USER - See flag in 'AppCtrl' in controllers.js
      if ( $scope.testUser ) {
        $scope.reg.MemberId = 'FredyAndroid1'; //BrianTest
        $scope.reg.GroupId = '22'; 
        $scope.reg.DeviceId = 'bd1fc4e5d7b4f01b'; //is is a new field
        $scope.reg.FirstName = 'Fredy'; //Brian
        $scope.reg.LastName = 'Android1'; //Test
        $scope.reg.Username = 'FredyAndroid1'; //BCarver
        $scope.reg.Password = 'Qwe!23'; //Password1
        $scope.reg.SecurityQ1 = 'Q1'; //Q1
        $scope.reg.Device_Token_Id = null; //null
        $scope.reg.DOB = '07/04/2016'; //ç
        $scope.reg.Ans1 = 'A1'; //A1
        $scope.reg.SecurityQ2 = 'Q2'; //Q2
        $scope.reg.Ans2 = 'A2'; //A2
        $scope.reg.Email = 'fguibert@hstechnology.com'; //bcarver@pint.com
        $scope.confirmPassword = 'Qwe!23'; //Password1
      }

      $scope.licenceAgreement = "";

      var userAgreementData = {};
      var agreementPostParams = [ "AppID", "MemberId", "GroupId" ];

      for ( var k in agreementPostParams ) {
        var key = agreementPostParams[ k ];
        userAgreementData[ key ] = $scope.reg[ key ];
      }

      $ionicLoading.show({
        template : '<p>' + $translate.instant('LOADING') + '</p><ion-spinner></ion-spinner>'
      });

      var userAgreement = registrationService.userAgreement;
      userAgreementData["BuildVersion"] = localStorage["Version"];
      userAgreementData["Device_Type"] = localStorage["DeviceType"]; 
      userAgreementData["DeviceId"] = localStorageFactory.getDeviceID(); 
      userAgreement.getAgreement(userAgreementData).$promise.then(function(response) {
        $ionicLoading.hide();
        if ( response.status.toLowerCase() == "ok" ) {

          var txt = response.message;
          // Formating the text with HTML tags
          txt = txt.replace(/\n/g, "<br>");
          txt = txt.replace(/\r/g, "");
          txt = txt.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
          $scope.licenceAgreement = txt;
          $ionicScrollDelegate.scrollBottom(true);
        }
        else {
          var alertPopup = $ionicPopup.alert({
            title    : $translate.instant('ERROR'),
            template : $translate.instant('UNABLE_GET_USER_AGREEMENT')
          });
          alertPopup.then(function(res) {
            console.log('Unable to get User Agreement');
          });
        }

      }, function(error) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
          title    : $translate.instant('ERROR'),
          template : $translate.instant('NO_CONN_ERR')
        });
        alertPopup.then(function(res) {
          console.log('No internet connection Error');
        });
      });
    }
  ])
