"use strict";
angular
  .module("app.controllers")

  .controller("registration2Ctrl", [
    "$scope",
    "registrationFactory",
    "$location",
    "$ionicPopup",
    "$translate",
    "appConst",
    "localStorageFactory",
    "$state",
    "$ionicHistory",
    "$rootScope",
    function (
      $scope,
      registrationFactory,
      $location,
      $ionicPopup,
      $translate,
      appConst,
      localStorageFactory,
      $state,
      $ionicHistory,
      $rootScope
    ) {
      var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{6,}$/;

      $scope.securityQuestion1 =
        localStorageFactory.data["AppLang"] == appConst.en
          ? [
              "What is your favorite children’s book?",
              "What is your dream job?",
              "What was your childhood nickname?",
              "What was the model of your first car?",
              "Who was your favorite singer or band in high school?",
              "Who was your favorite film star or character in school?",
            ]
          : [
              "¿Cuál es su libro infantil favorito?",
              "¿Cuál es su trabajo ideal?",
              "¿Cuál era su apodo en la infancia? ",
              "¿Cuál fue el modelo de su primer auto?",
              "¿Quién era su cantante o cuál era su banda favorita en la escuela secundaria?",
              "¿Quién era su actor o personaje favorito cuando era estudiante?",
            ];

      $scope.securityQuestion2 =
        localStorageFactory.data["AppLang"] == appConst.en
          ? [
              "What was the first name of your first boss?",
              "In what city did your parents meet?",
              "What was the name of your first pet?",
              "What is the first name of your best friend in high school?",
              "What was the first film you saw in the theater?",
              "What was the first thing you learned to cook?",
            ]
          : [
              "¿Cuál era el nombre de pila de su primer jefe?",
              "¿En qué ciudad se conocieron sus padres?",
              "¿Cuál era el nombre de su primera mascota? ",
              "¿Cuál es el nombre de pila de su mejor amigo en la escuela secundaria?",
              "¿Cuál fue la primera película que vio en el cine?",
              "¿Qué fue lo primero que aprendió a cocinar?",
            ];

      $scope.reg = registrationFactory.getUserData();

      function cancel() {
        if ($rootScope.firstTime) {
          $ionicHistory.goBack();
        } else {
          $state.go("login");
        }
      }

      $scope.cancel = cancel;

      $scope.gotoNextPage = function () {
        var errMsg = null;

        if ($scope.testUser || $scope.regForm.$valid) {
          // TEST USER - See flag in 'AppCtrl' in controllers.js
          if ($scope.testUser) {
            $location.path("/registration-3");
            return;
          }

          if (passwordPattern.test($scope.reg.Password) == false) {
            errMsg = $translate.instant("MUST_1");
            $scope.regForm.Password.$invalid = true;
          } else if ($scope.reg.Password != $scope.confirmPassword) {
            // Password mismatch
            errMsg = $translate.instant("PASSWORDS_MUST_MATCH");
            $scope.regForm.Password.$invalid = true;
            $scope.regForm.confirmPassword.$invalid = true;
          } else if ($scope.reg.Email.$dirty) {
            errMsg = $translate.instant("ENTER_VALID_EMAIL");
            $scope.regForm.Email.$invalid = true;
          } else {
            console.log($scope.reg);
            localStorage.setItem("userName", $scope.reg.Username);
            $location.path("/registration-3");
          }
        } else {
          errMsg = $translate.instant("PLEASE_FILL_REQUIRED_FIELDS");
        }

        if (errMsg != null) {
          console.log("invalid form data");

          var alertPopup = $ionicPopup.alert({
            title: $translate.instant("ERROR"),
            template: errMsg,
          });
          alertPopup.then(function (res) {});
        }
      };
    },
  ]);
