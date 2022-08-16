angular.module('app.controllers')

  .controller('changeEmailCtrl', [
    '$rootScope',
    '$scope',
    '$location',
    '$ionicPopup',
    '$translate',
    '$filter',
    '$ionicLoading',
    'localStorageFactory',
    'profileService',
    '$ionicHistory',
    function($rootScope,
             $scope,
             $location,
             $ionicPopup,
             $translate,
             $filter,
             $ionicLoading,
             localStorageFactory,
             profileService,
             $ionicHistory) {


      console.warn('------- change-email-controller.js');


      // ----------------------------------
      // INIT
      // ----------------------------------
      var updateMemberInfo = profileService.memberInfo;
      $scope.profile = localStorageFactory.data.profile || {};


      // ----------------------------------
      // EVENT METHODS
      // ----------------------------------
      $scope.saveEmail = saveEmail;


      // ----------------------------------
      // HELPER FUNCTIONS
      // ----------------------------------

      /**
       *
       */
      function saveEmail() {

        console.warn('------- change-email-controller.js -> saveEmail()');

        var errMsg = null;

        // if ( $scope.changeEmailForm.$valid ) {
        //   if ( $scope.Email.$dirty ) {
        //     errMsg = $translate.instant('ENTER_VALID_EMAIL');
        //     $scope.changeEmailForm.Email.$invalid = true;
        //   }
        // }
        // else {
        //   errMsg = $translate.instant('PLEASE_FILL_REQUIRED_FIELDS');
        // }

        if ( $scope.profile.Email === undefined || $scope.profile.Email === '' ) {
          errMsg = 'Please enter a valid email address';
        }
        else if ( $scope.profile.Email && !$scope.profile.Email.match(/^[^@]+@[^@]+\.[^@]+$/) ) {
          errMsg = 'Please enter a valid email address';
        }

        if ( errMsg !== null ) {
          console.log("invalid form data");

          var alertPopup = $ionicPopup.alert({
            title    : $translate.instant('ERROR'),
            template : errMsg
          });

          alertPopup.then(function(res) {
          });

          return;
        }
        ;

        var postData = {};

        postData[ "AppID" ] = localStorageFactory.data.AppID;
        postData[ "Email" ] = $scope.profile.Email;
        postData["BuildVersion"] = localStorage["Version"];
        postData["Device_Type"] = localStorage["DeviceType"];
        postData["DeviceId"] = localStorageFactory.getDeviceID();
        var postDataParams = [ "MemberId", "GroupId", "Address1", "Address2", "City", "State", "Zip", "HomePhone", "CellPhone" ];

        for ( var i in postDataParams ) {
          var key = postDataParams[ i ];
          postData[ key ] = $scope.profile[ key ];
        }

        $ionicLoading.show({
          template : '<p>' + $translate.instant('LOADING') + '</p><ion-spinner></ion-spinner>'
        });

        updateMemberInfo
          .update(postData)
          .$promise
          .then(function(response) {

            $ionicLoading.hide(); // Hide loading overlay

            console.log("Success : ");
            console.log(response);

            if ( response.status.toLowerCase() == "ok" ) {
              localStorageFactory.data.profile.Email = $scope.profile.Email;

              var alertPopup = $ionicPopup.alert({
                title    : $translate.instant('SUCCESS'),
                template : $translate.instant('EMAIL_UPDATED_SUCCESSFULLY')
              });
              alertPopup.then(function(res) {
                $ionicHistory.goBack();
              });
            }
            else {
              var alertPopup = $ionicPopup.alert({
                title    : $translate.instant('ERROR'),
                template : 'Invalid data: ' + response.message
              });
              alertPopup.then(function(res) {
                console.log('No internet connection Error');
              });
            }

          }, function(error) {
            $ionicLoading.hide(); // Hide loading overlay

            console.log("Error : ");
            console.log(error);

            // Show network Error
            var alertPopup = $ionicPopup.alert({
              title    : $translate.instant('ERROR'),
              template : $translate.instant('NO_CONN_ERR')
            });
            alertPopup.then(function(res) {
              console.log('No internet connection Error');
            });
          });

      }

    }
  ])
