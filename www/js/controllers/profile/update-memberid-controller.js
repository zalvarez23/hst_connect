angular.module('app.controllers')

  .controller('updateMmberIdCtrl', ['$rootScope',
    '$scope',
    '$location',
    '$ionicPopup',
    '$translate',
    '$filter',
    '$ionicLoading',
    'localStorageFactory',
    'profileService',
    '$ionicHistory',
    '$ionicTabsDelegate',
    function ($rootScope,
      $scope,
      $location,
      $ionicPopup,
      $translate,
      $filter,
      $ionicLoading,
      localStorageFactory,
      profileService,
      $ionicHistory,
      $ionicTabsDelegate) {


      console.log('-------- update-memberid-controller.js');

      $ionicTabsDelegate.showBar(false);

      // ----------------------------------
      // INIT
      // ----------------------------------

      var updateMemberInfo = profileService.memberInfo;
      $scope.profile = localStorageFactory.data.profile;

      // Convert some inputs to numbers from strings
      // Passing TRUE excludes CellPhone formatting
      convertFormValues(true);


      // ----------------------------------
      // EVENT METHODS
      // ----------------------------------

      $scope.saveMemberId = saveMemberId;


      // ----------------------------------
      // HELPER FUNCTIONS
      // ----------------------------------

      /**
       *
       * @param {Boolean} formatCellPhone - Set to TRUE to not format home phone
       */
      function convertFormValues(formatCellPhone) {
        // Convert PHONE to number
        if (!formatCellPhone) {
          $scope.profile.CellPhone = typeof $scope.profile.CellPhone === 'string' ? $scope.profile.CellPhone.replace(/[- ()]/gi, '') : $scope.profile.CellPhone;
          $scope.profile.CellPhone = $scope.profile.CellPhone === '' ? '' : parseInt($scope.profile.CellPhone);
        }
        // Convert ZIP to number
        $scope.profile.Zip = $scope.profile.Zip === '' ? '' : parseInt($scope.profile.Zip);
      }

      /**
       *
       */
      function saveMemberId() {

        // Store pre-formatted phone number
        var CellPhoneRaw = $scope.profile.CellPhone;

        // Convert some inputs to numbers from strings
        convertFormValues();

        if (!$scope.memberInfo.$valid) {
          var errMsg = "Please fill the required fields";
          console.log("invalid form data");

          var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: errMsg
          });

          alertPopup.then(function (res) {
          });
          return;
        }

        var postData = {};

        postData["AppID"] = localStorageFactory.data.AppID;
        postData["BuildVersion"] = localStorage["Version"];
        postData["Device_Type"] = localStorage["DeviceType"];
        postData["DeviceId"] = localStorageFactory.getDeviceID();
        var params = ["Address1", "Address2", "City", "State", "Zip", "CellPhone", "Email", "MemberId", "GroupId", "CellPhone"];

        for (var i in params) {
          var key = params[i];
          postData[key] = $scope[key] || $scope.profile[key];
        }

        $ionicLoading.show({
          template: '<p>Updating Member Info...</p><ion-spinner></ion-spinner>'
        });

        updateMemberInfo
          .update(postData)
          .$promise
          .then(
            function (response) {

              $ionicLoading.hide(); // Hide loading overlay

              console.log('In update-memberif-controller.js, postData:', postData);

              console.log("Success : ");
              console.log(response);

              if (response.status.toLowerCase() == "ok") {
                var params = ["Address1", "Address2", "City", "State", "Zip", "CellPhone"];

                for (var i in params) {
                  var key = params[i];
                  localStorageFactory.data.profile[key] = $scope[key] || $scope.profile[key];
                }

                // Reset scope Home Phone format for display now that we've formatted it
                // correctly for validation (stripped out ( - and space characters
                $scope.profile.CellPhone = CellPhoneRaw;

                var alertPopup = $ionicPopup.alert({
                  title: $translate.instant('SUCCESS'),
                  template: "Member Info updated successfully"
                });
                alertPopup.then(function (res) {
                  $ionicHistory.goBack();
                });
              }
              else {
                var alertPopup = $ionicPopup.alert({
                  title: $translate.instant('ERROR'),
                  template: "Error while updating Member Info\n" + response.message
                });
                alertPopup.then(function (res) {
                  console.log('No internet connection Error');
                });
              }
            },
            function (error) {
              $ionicLoading.hide(); // Hide loading overlay

              console.log("Error : ");
              console.log(error);

              // Show network Error
              var alertPopup = $ionicPopup.alert({
                title: $translate.instant('ERROR'),
                template: $translate.instant('NO_CONN_ERR')
              });
              alertPopup.then(function (res) {
                console.log('No internet connection Error');
              });
            }
          );
      }

    }
  ])
