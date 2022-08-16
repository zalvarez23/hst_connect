angular
  .module("app.controllers", ["app.services", "app.constants"])
  .controller("loginCtrl", [
    "$scope",
    "$ionicPopup",
    "$location",
    "$ionicHistory",
    "$translate",
    "hstLoginFactory",
    "CONSTANTS",
    "$ionicLoading",
    "localStorageFactory",
    "$state",
    "appConst",
    function (
      $scope,
      $ionicPopup,
      $location,
      $ionicHistory,
      $translate,
      hstLoginFactory,
      CONSTANTS,
      $ionicLoading,
      localStorageFactory,
      $state,
      appConst
    ) {
      $scope.CONSTANTS = CONSTANTS.LOGIN;
      $scope.canShowRegisterButton = localStorageFactory.data.alreadyLoggedIn
        ? "false"
        : "true";

      $scope.selectedLanguage = localStorageFactory.data["AppLang"];
      $scope.canShowRegisterButton = "true";
      console.log("canShowRegisterButton :");
      console.log($scope.canShowRegisterButton);
      function formatDate(date) {
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
      }
      const daysValidateBanner = [
        "2021-12-09",
        "2021-12-10",
        "2021-12-11",
        "2021-12-12",
      ];
      const todayDate = formatDate(new Date());
      const htmlBannner = document.getElementById("bannerTop");
      htmlBannner.style.display = "none";
      if (daysValidateBanner.includes(todayDate)) {
        htmlBannner.style.display = "";
      }

      console.log(todayDate);
      var ctrl = this;
      ctrl.user = {};
      var isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone/i.test(
          navigator.userAgent
        )
          ? true
          : false;

      /**
       *  Methods
       */

      //Function used to validate login form and submit the credentials
      ctrl.validateAndLogin = function () {
        if ($scope.loginForm.$invalid) {
          var alertPopup = $ionicPopup.alert({
            title: $translate.instant("ERROR"),
            template: $translate.instant("PLEASE_FILL_REQUIRED_DETAILS"),
          });
          alertPopup.then(function (res) {});
          return;
        }
        $ionicLoading.show({
          template:
            "<p>" +
            $translate.instant("LOADING") +
            "</p><ion-spinner></ion-spinner>",
        });

        ctrl.user.DeviceId = localStorageFactory.getDeviceID();
        var buildVersion = localStorage["Version"];
        var deviceType = localStorage["DeviceType"];
        ctrl.user.AppID = appConst.appId;

        hstLoginFactory
          .login({
            Username: $scope.username,
            Password: $scope.password,
            AppID: ctrl.user.AppID,
            DeviceId: ctrl.user.DeviceId,
            Device_Type: deviceType,
            BuildVersion: buildVersion,
          })
          .$promise.then(
            function (response) {
              $ionicLoading.hide();
              console.log(response);
              if (response.status.toLowerCase() == "ok") {
                var data = response.message;

                for (var key in data) {
                  storeInLocalStorage(key, data[key]);
                }
                localStorage.setItem("User_Id", data["User_Id"]);

                storeInLocalStorage("userLoggedIn", "true");
                storeInLocalStorage("MemberId", data["MemberID"]);
                localStorageFactory.data["MemberID"] = data["MemberID"];

                $ionicHistory.nextViewOptions({
                  disableBack: true,
                });
                $state.go("landingPage");
              } else {
                var alertPopup = $ionicPopup.alert({
                  title: $translate.instant("ERROR"),
                  template: response.message,
                });
                alertPopup.then(function (res) {});
              }
            },
            function (error) {
              $ionicLoading.hide();

              console.log("Error in Network");
              console.log(error);
              var alertPopup = $ionicPopup.alert({
                title: $translate.instant("ERROR"),
                template: $translate.instant("NO_CONN_ERR"),
              });
              alertPopup.then(function (res) {
                console.log("No internet connection Error");
              });
            }
          );

        function storeInLocalStorage(key, v) {
          localStorageFactory.data[key] = v;
          localStorageFactory.save(
            key,
            v,
            function (data) {
              localStorageFactory.data[key] = data;
            },
            function (error) {
              console.log("Unable to store: " + key + " - " + v);
            }
          );
        }
      };
      ctrl.changePageForgot = function (isUsername) {
        if (isUsername) {
          $state.go("forgotUsername2", { isUsername: true });
        } else {
          $state.go("forgotPassword2", { isUsername: false });
        }
      };
      ctrl.changeLang = function (lang) {
        $translate.use(lang);
      };
    },
  ]);
