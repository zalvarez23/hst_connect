'use strict';
angular.module('app.controllers')

  .controller('registration1Ctrl', ['$scope', '$location', '$cordovaDevice', 'registrationFactory', 'registrationService', '$ionicPopup', '$translate', '$filter', '$ionicLoading', 'appConst', 'localStorageFactory', '$cordovaDatePicker', '$state', '$ionicHistory', '$rootScope',
    function ($scope, $location, $cordovaDevice, registrationFactory, registrationService, $ionicPopup, $translate, $filter, $ionicLoading, appConst, localStorageFactory, $cordovaDatePicker, $state, $ionicHistory, $rootScope) {


      $scope.currentPlatform = ionic.Platform.platform();


      // ----------------------------------
      // INIT
      // ----------------------------------
      $scope.reg = registrationFactory.getUserData();
      $scope.reg.AppID = appConst.appId;

      var registrationValidator = registrationService.registrationValidator;

      // Why does no one comment their code???????
      // Fredy: That's a really good question without answer.
      // TODO - Clear User input field values

      // TEST USER - See flag in 'AppCtrl' in controllers.js
      if ($scope.testUser) {
        $scope.reg = {
          AppID: '8B2A6BCD-7E8A-4D2B-AAB0-88EFAE074FF3',
          DeviceId: 'bd1fc4e5d7b4f01b',
          MemberId: 'FredyAndroid1', //BrianTest
          GroupId: '22',
          FirstName: 'Fredy', //Brian
          LastName: 'Android1' //Test
        };
        $scope.birthDate = '07/04/2016'; //01/01/2000
      }


      // ----------------------------------
      // EVENT METHODS
      // ----------------------------------
      $scope.gotoNextPage = gotoNextPage;
      $scope.selectDate = selectDate;
      $scope.cancel = cancel;


      // ----------------------------------
      // HELPER FUNCTIONS
      // ----------------------------------

      /**
       *
       */
      function cancel() {
        if ($rootScope.firstTime) {
          $ionicHistory.goBack();
        } else {
          $state.go("login")
        }
      }

      function gotoNextPage() {

        if ($scope.regForm.$valid) {


          $scope.reg.DeviceId = localStorageFactory.getDeviceID();
          $scope.reg.Device_Type = localStorageFactory.getDeviceType();
          $scope.reg.Device_Token_Id = localStorageFactory.getDeviceToken();

          $ionicLoading.show({
            template: '<p>' + $translate.instant('VALIDATING') + '</p><ion-spinner></ion-spinner>'
          });

          $scope.reg.DOB = $scope.userTest
            ? '01/01/2000'
            : $filter('date')($scope.birthDate, "MM/dd/yyyy");

          var userData = {};
          var validationPostParams = ["AppID", "MemberId", "FirstName", "LastName", "DOB", "GroupId"];

          for (var k in validationPostParams) {
            var key = validationPostParams[k];
            userData[key] = $scope.reg[key];
          }

          // Validate User Data before going to second screen
          userData["BuildVersion"] = localStorage["Version"];
          userData["Device_Type"] = localStorage["DeviceType"];
          userData["DeviceId"] = localStorageFactory.getDeviceID();
          registrationValidator.validate(userData).$promise.then(function (response) {
            $ionicLoading.hide();

            if (response.status.toLowerCase() == "ok" && response.message.toLowerCase() == "true") {
              // {"status":"Ok","message":"True"}
              $location.path("/registration-2");
            }
            else {

              if (response.userMessage == null || response.userMessage == "null" || response.userMessage == "") {
                var alertPopup = $ionicPopup.alert({
                  title: $translate.instant('ERROR'),
                  template: $translate.instant('INVALID_USER_DATA')
                });

              } else {
                var alertPopup = $ionicPopup.alert({
                  title: $translate.instant('ERROR'),
                  template: response.userMessage
                });
              }
              alertPopup.then(function (res) {
                console.log('Invalid user data : ' + response.message);
              });
            }
          }, function (error) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: $translate.instant('ERROR'),
              template: $translate.instant('NO_CONN_ERR')
            });
            alertPopup.then(function (res) {
              console.log('No internet connection Error');
            });
          });

        }
        else {
          console.log("invalid form data");
          var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: $translate.instant('PLEASE_FILL_REQUIRED_FIELDS')
          });
          alertPopup.then(function (res) {
          });
        }
      }

      /**
       *
       */
      function selectDate() {
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

        $cordovaDatePicker.show(options).then(function (date) {
          $scope.birthDate = $filter('date')(date, "MM/dd/yyyy");
          $scope.selectedDate = date;
          console.log('Selected date: ' + date);
        });
      }

    }
  ])
