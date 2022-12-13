"use strict";
angular
  .module("app.controllers")

  .controller("findClaimsResultCtrl", [
    "$rootScope",
    "$scope",
    "$location",
    "$ionicPopup",
    "$translate",
    "$filter",
    "$ionicLoading",
    "$ionicHistory",
    "$state",
    "localStorageFactory",
    "findAProviderService",
    "$ionicModal",
    function (
      $rootScope,
      $scope,
      $location,
      $ionicPopup,
      $translate,
      $filter,
      $ionicLoading,
      $ionicHistory,
      $state,
      localStorageFactory,
      findAProviderService,
      $ionicModal
    ) {
      $scope.sortOptions = {};
      $scope.sortOptions["ProviderName"] = "ProviderName";
      $scope.sortOptions["ClaimId"] = "ClaimId";
      $scope.sortOptions["Processed Date"] = "ReturnDate";
      // NEW VARIABLE
      const findClaimsByUser = findAProviderService.userClaims;
      console.log(findClaimsByUser);
      $scope.selectedList = [];

      $scope.filter = {
        sortKey: "ReturnDate",
        search: "",
        type: "",
        dateFrom: "",
        dateTo: "",
        year: "",
      };
      $scope.claimsList = [
        // {
        //   ClaimId: 2609606,
        //   ClaimType: "U",
        //   PatientName: "Kevin Salazar",
        //   ProviderName: "Temecula Dialysis Center",
        //   DateOfService: "20220402",
        //   ReturnDate: "2022-03-10T21:16:25",
        //   TotalCharges: 23744.4,
        //   TotalAllowed: 1391.72,
        //   SaveAmount: 22352.68,
        // },
        // {
        //   ClaimId: 2609604,
        //   ClaimType: "H",
        //   PatientName: "Kevin Salazar",
        //   ProviderName: "Temecula Dialysis Center",
        //   DateOfService: "20220402",
        //   ReturnDate: "2022-05-10T21:16:25",
        //   TotalCharges: 23744.4,
        //   TotalAllowed: 1391.72,
        //   SaveAmount: 22352.68,
        // },
      ];

      $scope.applyFilter = function () {
        $scope.modal.hide();
      };
      $scope.clearFilter = function () {
        $scope.filter = {
          sortKey: "ReturnDate",
          search: "",
          type: "",
          dateFrom: "",
          dateTo: "",
          year: "",
        };
        $scope.modal.hide();
      };
      $scope.hideFilters = function () {
        $scope.modal.hide();
      };

      $scope.goToBack = function () {
        $ionicHistory.goBack();
      };

      $ionicModal
        .fromTemplateUrl("filters.html", {
          scope: $scope,
          animation: "slide-in-up",
        })
        .then(function (modal) {
          $scope.modal = modal;
        });

      $scope.showFilters = function () {
        $scope.modal.show();
      };
      $scope.getClaims = function () {
        $ionicLoading.show({
          template:
            "<p>" +
            $translate.instant("LOADING") +
            "</p><ion-spinner></ion-spinner>",
        });
        var postData = {};
        // postData["AppID"] = "8B2A6BCD-7E8A-4D2B-AAB0-88EFAE074FF3";
        postData["AppID"] = localStorageFactory.data.AppID;
        postData["UserName"] = localStorage.getItem("userName");
        postData["DateFrom"] = "Current day – 1 year";
        postData["DateTo"] = "Current Day";
        findClaimsByUser.get(postData).$promise.then(
          function (response) {
            $scope.claimsList = response.message.map((claim) => {
              claim.ClaimType =
                claim.ClaimType === "U" ? "Facility" : "Physician";
              return claim;
            });
            $ionicLoading.hide(); // Hide loading overlay
          },
          function (error) {
            $ionicLoading.hide(); // Hide loading overlay
            // Show network Error
            var alertPopup = $ionicPopup.alert({
              title: $translate.instant("ERROR"),
              template: $translate.instant("NO_CONN_ERR"),
            });
            alertPopup.then(function (res) {
              console.log("No internet connection Error");
            });
          }
        );
      };
      $scope.getClaims();

      $scope.goToMessage = function (claimId) {
        $state.go("tabsController.messages-options", {
          claimId,
        });
      };
    },
  ]);
