"use strict";
angular
  .module("app.controllers")

  .controller("findClaimsCtrl", [
    "$scope",
    "$ionicPopup",
    "$translate",
    "$ionicLoading",
    "$state",
    "localStorageFactory",
    "findAProviderService",
    function (
      $scope,
      $ionicPopup,
      $translate,
      $ionicLoading,
      $state,
      localStorageFactory,
      findAProviderService
    ) {
      // Asking to get current location
      localStorageFactory.data.providerType = "Claims";
      $scope.type = "Facility";
      $scope.year = "2022";

      $scope.dateFrom = ''
      $scope.dateTo = ''

      $scope.searchClaims = function () {
        $ionicLoading.show({
          template:
            "<p>" + "Searching claims" + "</p><ion-spinner></ion-spinner>",
        });
        setTimeout(() => {
          $ionicLoading.hide()
          $state.go("tabsController.claimsSearchResults");
        }, 2000);
      };
    },
  ]);
