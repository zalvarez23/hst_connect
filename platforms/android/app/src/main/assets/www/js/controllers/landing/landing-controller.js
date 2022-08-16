'use strict';

angular.module('app.controllers')

  .controller('landingPageCtrl', [
    '$rootScope',
    '$scope',
    '$location',
    '$ionicPopup',
    '$translate',
    '$filter',
    '$ionicLoading',
    'profileService',
    'yourDoctorService',
    'messagesService',
    'localStorageFactory',
    'locationService',
    'utilFactory',
    '$state',
    function ($rootScope,
      $scope,
      $location,
      $ionicPopup,
      $translate,
      $filter,
      $ionicLoading,
      profileService,
      yourDoctorService,
      messagesService,
      localStorageFactory,
      locationService,
      utilFactory,
      $state) {


      console.warn('------- landing-controller.js');



      $scope.newProject = localStorage.getItem('newProject');
      // ----------------------------------
      // INIT
      // ----------------------------------
      $rootScope.signedOut = false;
      console.log('Imagen Alvarez', $rootScope.imageSrc);
      if (!$rootScope.imageSrc)
        $rootScope.imageSrc = {};


      // ----------------------------------
      // INIT - LOCALSTORAGE
      // ----------------------------------

      localStorageFactory.read("frontside", function (data) {
        if (data)

          $rootScope.imageSrc.frontside = "data:image/png;base64," + utilFactory.base64_decode(data);
      }, function (err) {
      });

      localStorageFactory.read("backside", function (data) {
        if (data)

          $rootScope.imageSrc.backside = "data:image/png;base64," + utilFactory.base64_decode(data);
      }, function (err) {

      });

      localStorageFactory.read("profilePicture", function (data) {
        if (data)

          $rootScope.imageSrc.profilePicture = "data:image/png;base64," + utilFactory.base64_decode(data);
      }, function (err) {

      });


      // ----------------------------------
      // INIT - PROFILE
      // ----------------------------------
      var postData = {};
      $scope.profile = localStorageFactory.data.profile;
      $scope.messageCount = 0;

      $scope.$watch(function () {
        return localStorageFactory.data.profile;
      }, function (NewValue, OldValue) {
        console.log("Profile updated")
        $scope.profile = localStorageFactory.data.profile;
      }, true);


      // ----------------------------------
      // INIT - MESSAGES
      // ----------------------------------
      $scope.$watch(function () {
        return localStorageFactory.data.userMessages;
      }, function (NewValue, OldValue) {

        $scope.messageCount = $filter('unreadMsgCount')(localStorageFactory.data.userMessages);

      }, true);

      var messages = messagesService.UserMessages;
      var yourDoctor = yourDoctorService.yourDoctor;
      var myProfile = profileService.profile;
      var familyWize = profileService.familiaWize;

      $scope.showFamilyWize = true;
      $scope.getFamilyWizeFlag = function (formdata) {
        familyWize(formdata)
          .success(function (response) {
            $scope.showFamilyWize = response;
          })
          .error(function (err) {
            $scope.showFamilyWize = true;
          });

      };
      // ----------------------------------
      // STATE CHANGE CHECK
      // ----------------------------------
      // Need to check if you arrive on the landing/start screen each time,
      // So we can get current message count, etc.
      $rootScope.$on('$stateChangeStart', stateChangeStart);
      function stateChangeStart(event, toState, toParams, fromState, fromParams) {
        console.log('------- Current State:', toState.name);
        if (toState.name === 'landingPage') {
          initialize();
        }
      }

      // Run just the first time after login
      initialize();


      // ----------------------------------
      // EVENTS
      // ----------------------------------

      window.addEventListener('native.keyboardshow', function () {
        document.body.classList.add('keyboard-open');
      });

      $scope.downloadMessages = downloadMessages;


      // ----------------------------------
      // HELPER FUNCTIONS
      // ----------------------------------

      /**
       *
       */
      function downloadMessages() {
        initialize();
        if ($scope.messageCount > 0) {
          $state.go("tabsController.messages");
        } else {
          $state.go("tabsController.messages-options");
        }

      }

      /**
       *
       */
      function initialize() {
        console.warn('------- landing-controller.js -> initialize()');
        $scope.messageCount = $filter('unreadMsgCount')(localStorageFactory.data.userMessages);
        $scope.profile = localStorageFactory.data.profile;
        // localStorageFactory.data.GroupId = localStorageFactory.data.profile.GroupId;

        var keys = ["AppID", "GroupId", "MemberId"];

        var waitingForLocalStorage = false;
        for (var i in keys) {
          if (typeof localStorageFactory.data[keys[i]] == "undefined") {
            postData[keys[i]] = null;
            waitingForLocalStorage = true;
            readFromLocalStorage(keys[i]);
          }
          else {
            postData[keys[i]] = localStorageFactory.data[keys[i]];
          }
        }

        postData["BuildNumber"] = localStorage["Version"];
        postData["DeviceType"] = localStorage["DeviceType"];
        postData["BuildVersion"] = localStorage["Version"];
        postData["Device_Type"] = localStorage["DeviceType"];
        postData["DeviceId"] = localStorageFactory.getDeviceID();

        if (!waitingForLocalStorage) {
          prefetchData();
        }

        $scope.getFamilyWizeFlag(postData);

      }

      /**
       * Download User data
       */

      function prefetchData() {
        console.warn('------- landing-controller.js -> prefetchData()');

        // Check Post data is ready
        for (var key in postData) {
          //if ( typeof postData[ key ] == "undefined" || postData[ key ] == null )
          //return;
        }

        postData["BuildNumber"] = $rootScope.version;
        postData["DeviceType"] = localStorageFactory.data.Device_Type;
        postData["BuildVersion"] = localStorage["Version"];
        postData["Device_Type"] = localStorage["DeviceType"];
        postData["DeviceId"] = localStorageFactory.getDeviceID();

        // Download User Messages
        console.log("Downloading Messages");
        messages.getUserMessages(postData).$promise.then(function (response) {
          if (response.status.toLowerCase() == "ok" && response.message != null) {
            if (Object.prototype.toString.call(response.message) != '[object Array]')
              response.message = [];
            console.warn('Messages returned from data source');
            console.log('response.message:', response.message);
            var listMessageAux = [];
            response.message.forEach(function (itemE, indexE) {
              listMessageAux.push(itemE.messagelist);
            })

            localStorageFactory.data.userMessages = listMessageAux;
            $scope.messageCount = $filter('unreadMsgCount')(localStorageFactory.data.userMessages);
            console.log('$scope.messageCount:', $scope.messageCount);
          }
          else {
            console.log("Error while downloading User messages");
            console.log(response.message);
          }

        }, function (error) {
          console.log("Error while downloading User messages :");
          console.log(error);
        });

        // Download Your Doctor Info
        if (localStorageFactory.data.pcpinfo != null) {
          console.log("Doctor info already downloaded");
        }
        else {
          yourDoctor.getDoctorDetails(postData).$promise.then(function (response) {
            if (response.status.toLowerCase() == "ok" && response.message != null) {
              var data = response.message;
              localStorageFactory.data.pcpinfo = data;

              var addressFields = ['Address1', 'Address2', 'City', 'State', 'Zip'];
              var addressValues = [];
              data.formattedaddress = "";

              for (var i in addressFields) {
                var field = addressFields[i];
                if (data[field])
                  addressValues.push(data[field]);
              }

              data.formattedaddress = addressValues.join(", ");

            }
            else {
              console.log("Error while downloading Doctor Info");
              console.log(response.message);
            }

          }, function (error) {
            console.log("Error while downloading Doctor Info");
            console.log(error);
          });
        }

        // Download User Profile

        if (localStorageFactory.data.profile != null) {
          $scope.profile = localStorageFactory.data.profile;
          console.log("Profile info already downloaded");
        }
        else {
          postData["User_id"] = localStorage.getItem('User_Id');

          myProfile.getUserProfile(postData).$promise.then(function (response) {

            if (response.status.toLowerCase() == "ok" && response.message != null) {
              localStorageFactory.data.profile = response.message;
              $scope.profile = localStorageFactory.data.profile;

            }
            else {
              console.log("Error while downloading Profile Info");
              console.log(response.message);
            }

          }, function (error) {

            console.log("Error while downloading Profile Info");
            console.log(error);
          });
        }
      }


      function readFromLocalStorage(key) {
        localStorageFactory.read(key, function (data) {
          localStorageFactory.data[key] = data;

          postData[key] = data;

          prefetchData();
        }, function (error) {
          console.log("Unable to get " + key)
        });
      }

      $scope.goToPrescription = function () {
        // COMENTAR PARA ANDROID
        window.open("https://api.familywize.org/widget/Savings?display=0", "_blank", "location=yes");
        return;
        // $state.go("tabsController.prescription");
        cordova.ThemeableBrowser.open('https://api.familywize.org/widget/Savings?display=0', '_blank', {
          toolbar: {
            height: 44,
            color: '#abce61'
          },
          title: {
            color: '#fdf9f9',
            showPageTitle: true,
            staticText: 'Prescription Pricing'
          },
          // backButton: {
          //   wwwImage : "",
          //   align: 'left',
          //   event: 'backPressed'
          // },
          // forwardButton: {
          //   image: 'forward',
          //   imagePressed: 'forward_pressed',
          //   align: 'left',
          //   event: 'forwardPressed'
          // },
          closeButton: {
            // image: 'close',
            // imagePressed: 'close_pressed',
            wwwImage: "img/icons/left-icon-2.png",
            align: 'left',
            event: 'closePressed'
          },
          backButtonCanClose: true
        }).addEventListener('backPressed', function (e) {
          // alert('back pressed');
        }).addEventListener('helloPressed', function (e) {
          // alert('hello pressed');
        }).addEventListener('sharePressed', function (e) {
          // alert(e.url);
        }).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function (e) {
          console.error(e.message);
        }).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function (e) {
          console.log(e.message);
        });

      }

    }
  ])
