"use strict";
angular
  .module("app.controllers")

  .controller("findHospitalCtrl", [
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
    "locationService",
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
      locationService
    ) {
      console.log("find Hospital page loaded");
      $scope.newProject = localStorage.getItem("newProject");
      // Asking to get current location
      locationService.checkAndGetLocation();
      localStorageFactory.data.providerType = "Hospital";

      $scope.loc_choice = "currentlocation";
      var WITHIN = $translate.instant("WITHIN");
      var MILES = $translate.instant("MILES");
      var facilitySpecializationByLang =
        findAProviderService.facilitySpecializationByLang;
      var authorizedFacilities = findAProviderService.authorizedFacilities;
      var authorizedProviders = findAProviderService.authorizedProviders;

      $scope.distanceList = ["5", "10", "15", "25", "50"];
      $scope.distanceListAux = [
        { id: 1, distance: "5", description: WITHIN + " " + "5" + " " + MILES },
        {
          id: 2,
          distance: "10",
          description: WITHIN + " " + "10" + " " + MILES,
        },
        {
          id: 3,
          distance: "15",
          description: WITHIN + " " + "15" + " " + MILES,
        },
        {
          id: 4,
          distance: "25",
          description: WITHIN + " " + "25" + " " + MILES,
        },
        {
          id: 5,
          distance: "50",
          description: WITHIN + " " + "50" + " " + MILES,
        },
      ];
      $scope.specializationList =
        localStorageFactory.data.providerSpecilization || [];
      $scope.categories = localStorageFactory.data.providerCategory || null;
      $scope.listGroupTypes = [];
      $scope.listGroupSubTypes = [];
      $scope.listGroupServices = [];
      $scope.typeSelected = "";
      $scope.subTypeSelected = "";
      $scope.serviceSelected = "";
      var categoryDoctor = null;
      delete localStorageFactory.data["inputAddress"];

      for (var i in $scope.categories) {
        var obj = $scope.categories[i];
        if (obj["CategoryName"] == "Hospital") {
          categoryDoctor = obj["CategoryId"];
        }
      }
      // SEARCH MILES
      var alertPopResult = function (title, template, css, $scope) {
        var alertPopup = $ionicPopup.alert({
          title: title,
          template: template,
          cssClass: css,
          scope: $scope,
        });
        return alertPopup;
      };
      var alertPop;
      $scope.modalMillas = function () {
        var cabecera, template;
        var txtSearch = $translate.instant("SEARCH");
        $scope.distanceListAux.forEach(function (item, index) {
          if ($scope.aroundDistance == item.distance) {
            item["colorSelect"] = "colorSelect";
            item["checked"] = true;
          } else {
            item["colorSelect"] = "";
            item["checked"] = false;
          }
        });
        template =
          '<div class="modalStyle"><div class="searchInput" style="display:none">' +
          '<label class="item item-input"><i class="icon ion-search placeholder-icon"></i>' +
          '<input type="text" placeholder="' +
          txtSearch +
          '" ng-model="search"> </label></div></br>' +
          '<div class="card-panel grey lighten-5 z-depth-1 cardP " ng-repeat="item in distanceListAux | filter :search">' +
          '<div class="row valign-wrapper contentPlantilla {{item.colorSelect}}" ng-click="selectIdMillas(item);">' +
          '<div class="col col-90"><span class="black-text">{{item.description}}</span></div>' +
          '<div class="col"><input type="radio" name="gender" ng-checked="item.checked"></div></div></div></div>';

        alertPop = alertPopResult(
          cabecera,
          template,
          "modalStyleSelectMillas",
          $scope
        );
      };

      $scope.modalTypes = function () {
        var cabecera, template;
        var txtSearch = $translate.instant("SEARCH");
        $scope.listGroupTypes.forEach(function (item) {
          if ($scope.typeSelected == item.type) {
            item["colorSelect"] = "colorSelect";
            item["checked"] = true;
          } else {
            item["colorSelect"] = "";
            item["checked"] = false;
          }
        });
        template =
          '<div class="modalStyle"><div class="searchInput search-flex">' +
          '<label class="item item-input"><i class="icon ion-search placeholder-icon"></i>' +
          '<input type="text" placeholder="' +
          txtSearch +
          '" ng-model="search"> </label><i class="icon ion-close placeholder-icon" ng-click="closeModal()"></i></div></br>' +
          '<div class="card-panel grey lighten-5 z-depth-1 cardP " ng-repeat="item in listGroupTypes | filter :search">' +
          '<div class="row valign-wrapper contentPlantilla {{item.colorSelect}}" ng-click="selectType(item.type);">' +
          '<div class="col col-90"><span class="black-text">{{item.type}}</span></div>' +
          '<div class="col"><input type="radio" name="gender" ng-checked="item.checked"></div></div></div></div>';

        alertPop = alertPopResult(
          cabecera,
          template,
          "modalStyleSelectMillas",
          $scope
        );
      };

      $scope.modalSubTypes = function () {
        var cabecera, template;
        var txtSearch = $translate.instant("SEARCH");
        $scope.listGroupSubTypes.forEach(function (item) {
          if ($scope.subTypeSelected == item.subType) {
            item["colorSelect"] = "colorSelect";
            item["checked"] = true;
          } else {
            item["colorSelect"] = "";
            item["checked"] = false;
          }
        });
        template =
          '<div class="modalStyle"><div class="searchInput search-flex">' +
          '<label class="item item-input"><i class="icon ion-search placeholder-icon"></i>' +
          '<input type="text" placeholder="' +
          txtSearch +
          '" ng-model="search"> </label><i class="icon ion-close placeholder-icon" ng-click="closeModal()"></i></div></br>' +
          '<div class="card-panel grey lighten-5 z-depth-1 cardP " ng-repeat="item in listGroupSubTypes | filter :search">' +
          '<div class="row valign-wrapper contentPlantilla {{item.colorSelect}}" ng-click="selectSubType(item.subType);">' +
          '<div class="col col-90"><span class="black-text">{{item.subType}}</span></div>' +
          '<div class="col"><input type="radio" name="gender" ng-checked="item.checked"></div></div></div></div>';

        alertPop = alertPopResult(
          cabecera,
          template,
          "modalStyleSelectMillas",
          $scope
        );
      };

      $scope.modalServices = function () {
        var cabecera, template;
        var txtSearch = $translate.instant("SEARCH");
        $scope.listGroupServices.forEach(function (item) {
          if ($scope.serviceSelected == item.service) {
            item["colorSelect"] = "colorSelect";
            item["checked"] = true;
          } else {
            item["colorSelect"] = "";
            item["checked"] = false;
          }
        });
        template =
          '<div class="modalStyle"><div class="searchInput search-flex">' +
          '<label class="item item-input"><i class="icon ion-search placeholder-icon"></i>' +
          '<input type="text" placeholder="' +
          txtSearch +
          '" ng-model="search"></label><i class="icon ion-close placeholder-icon" ng-click="closeModal()"></i></div></br>' +
          '<div class="card-panel grey lighten-5 z-depth-1 cardP " ng-repeat="item in listGroupServices | filter :search">' +
          '<div class="row valign-wrapper contentPlantilla {{item.colorSelect}}" ng-click="selectService(item);">' +
          '<div class="col col-90"><span class="black-text">{{item.service}}</span></div>' +
          '<div class="col"><input type="radio" name="gender" ng-checked="item.checked"></div></div></div></div>';

        alertPop = alertPopResult(
          cabecera,
          template,
          "modalStyleSelectMillas",
          $scope
        );
      };
      $scope.closeModal = function () {
        alertPop.close();
      };
      $scope.selectType = function (type) {
        $scope.typeSelected = type;
        $scope.subTypeSelected = "";
        $scope.getListGroupSubTypes();
        alertPop.close();
      };
      $scope.selectSubType = function (subType) {
        $scope.subTypeSelected = subType;
        $scope.serviceSelected = "";
        $scope.geetListGroupServices();
        alertPop.close();
      };
      $scope.selectService = function (item) {
        $scope.serviceSelected = item.service;
        $scope.specialization = String(item.id);
        alertPop.close();
      };
      $scope.selectIdMillas = function (item) {
        $scope.aroundDistance = item.distance;
        alertPop.close();
      };
      // SEARCH MILES

      var postData = {};
      postData["AppID"] = localStorageFactory.data.AppID;
      postData["MemberId"] = localStorageFactory.data.MemberId;
      postData["GroupId"] = localStorageFactory.data.GroupId;
      postData["BuildVersion"] = localStorage["Version"];
      postData["Device_Type"] = localStorage["DeviceType"];
      postData["DeviceId"] = localStorageFactory.getDeviceID();
      postData["CategoryId"] = categoryDoctor;

      $scope.searchProvider = function () {
        //test
        // callSearchAPI();
        // return;
        //test
        console.log($scope.loc_choice);
        var loc_choice = $scope.loc_choice;

        var location = {};

        switch (loc_choice) {
          case "currentlocation":
            if (localStorageFactory.data.currentlocation) {
              location["lat"] = localStorageFactory.data.currentlocation.lat;
              location["long"] = localStorageFactory.data.currentlocation.long;
            } else {
              AlertUserToInputLocation();
              return;
            }
            break;

          case "inputlocation":
            console.log($scope.inputaddress);
            location = null;
            break;

          case "maplocation":
            if (localStorageFactory.data.selectedlocation) {
              console.log("issues");
              console.log(localStorageFactory.data.selectedlocation);
              location["lat"] = localStorageFactory.data.selectedlocation.lat;
              location["long"] = localStorageFactory.data.selectedlocation.long;
            }
            break;
        }

        postData["Name"] = $scope.name || "";
        postData["distance"] = $scope.aroundDistance;

        postData["SpecializationID"] = $scope.specialization; // Must for doctor search
        postData["ProcedureIndicator"] = ""; // not needed for doctor search

        $ionicLoading.show({
          template:
            "<p>" +
            $translate.instant("SEARCHING_HOSPITALS") +
            "</p><ion-spinner></ion-spinner>",
        });

        localStorageFactory.data.authorizedProviderType = "Hospital";
        delete localStorageFactory.data["hospitalList"];

        if (location == null) {
          // Geocode the address and call the api
          $scope.inputaddress = $scope.inputaddress || "";
          localStorageFactory.geocodeAddress(
            $scope.inputaddress,
            function (pos) {
              // Get Lat long from corresponding object
              console.log("Geocoded location");
              console.log(pos);
              if (typeof pos["lat"] == "undefined") {
                $ionicLoading.hide(); // Hide loading overlay
                AlertUserAddressIncorrect();
                return;
              }
              postData["Latitude"] = pos["lat"];
              postData["Longitude"] = pos["lng"];

              callSearchAPI();
            }
          );
        } else {
          // Get Lat long from corresponding object
          postData["Latitude"] = location["lat"];
          postData["Longitude"] = location["long"];

          callSearchAPI();
        }
      };

      function callSearchAPI() {
        // test
        // postData["AppID"] = "8B2A6BCD-7E8A-4D2B-AAB0-88EFAE074FF3";
        // postData["MemberId"] = "kevinsalazar";
        // postData["GroupId"] = "22";
        // postData["CategoryId"] = "1";
        // postData["ProcedureIndicator"] = "621";
        // postData["BuildVersion"] = "3.3.2";
        // postData["Device_Type"] = "android";
        // postData["DeviceId"] = "8fb51648e636d0e4";
        // postData["distance"] = "50";
        // postData["Latitude"] = "33.6147846";
        // postData["Longitude"] = "-117.637617";
        // postData["SpecializationID"] = $scope.specialization;
        // postData["Zip"] = "92692";
        //test
        localStorageFactory.data.searchDetailObj = {
          srcLat: postData["Latitude"],
          srcLong: postData["Longitude"],
        };
        authorizedProviders.get(postData).$promise.then(
          function (response) {
            $ionicLoading.hide(); // Hide loading overlay

            if (
              response.status.toLowerCase() == "ok" &&
              response.message != null
            ) {
              if (
                Object.prototype.toString.call(response.message) ===
                "[object Array]"
              ) {
                localStorageFactory.data.hospitalList = response.message;

                // localStorage.setItem('testHospital', JSON.stringify(response.message))
              }

              // Go to the search result page
              $state.go("tabsController.providerSearchResults");
            } else {
              console.log(
                "Error while searching authorized providers - Hospital"
              );
              console.log(response.message);
              var alertPopup = $ionicPopup.alert({
                title: $translate.instant("ERROR"),
                template: response.message,
              });
              alertPopup.then(function (res) {});
            }
          },
          function (error) {
            $ionicLoading.hide(); // Hide loading overlay
            console.log(
              "Error while searching authorized providers - Hospital"
            );
            console.log(error);
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
      }

      // reset the Value - If the user changes the radio button
      // localStorageFactory.data.selectedlocation
      $scope.openMap = function () {
        localStorageFactory.data.inputAddress = $scope.inputaddress;
        $state.go("tabsController.LocationSelectionController");
      };

      function AlertUserToInputLocation() {
        var alertPopup = $ionicPopup.alert({
          title: $translate.instant("ERROR"),
          template: $translate.instant("ENTER_YOUR_LOCATION"),
        });
        alertPopup.then(function (res) {});
      }

      function AlertUserAddressIncorrect() {
        var alertPopup = $ionicPopup.alert({
          title: $translate.instant("ERROR"),
          template: $translate.instant("ENTERED_INCORRECT_ADDRESS"),
        });
        alertPopup.then(function (res) {});
      }

      function getFacilitySpecializationByLang() {
        // $ionicLoading.show({
        // 	template: '<p>' + $translate.instant('SEARCHING_DOCTORS') + '</p><ion-spinner></ion-spinner>'
        // });
        facilitySpecializationByLang.get().$promise.then(
          function (response) {
            $ionicLoading.hide(); // Hide loading overlay
            if (
              response.status.toLowerCase() == "ok" &&
              response.message != null
            ) {
              $scope.specializationData = response.message;
              getTypes();
            } else {
              console.log(
                "Error while searching authorized providers - Doctor"
              );
              var alertPopup = $ionicPopup.alert({
                title: $translate.instant("ERROR"),
                template: response.message,
              });
              alertPopup.then(function (res) {});
            }
          },
          function (error) {
            $ionicLoading.hide(); // Hide loading overlay
            console.log("Error while searching authorized providers - Doctor");
            console.log(error);
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
      }

      function getTypes() {
        $scope.listGroupTypes = $scope.specializationData.reduce((ac, item) => {
          if (ac.some((itemT) => itemT.type === item.Type)) return ac;
          ac.push({
            type: item.Type,
          });
          return ac;
        }, []);
      }

      $scope.getListGroupSubTypes = function () {
        $scope.listGroupSubTypes = $scope.specializationData
          .filter((item) => item.Type === $scope.typeSelected)
          .reduce((ac, item) => {
            if (ac.some((itemT) => itemT.subType === item.SubType)) return ac;
            ac.push({
              subType: item.SubType,
            });
            return ac;
          }, []);
      };

      $scope.geetListGroupServices = function () {
        $scope.listGroupServices = $scope.specializationData
          .filter(
            (item) =>
              item.Type === $scope.typeSelected &&
              item.SubType === $scope.subTypeSelected
          )
          .reduce((ac, item) => {
            if (ac.some((itemS) => itemS.service === item.Service)) return ac;
            ac.push({
              id: item.ID,
              service: item.Service,
            });
            return ac;
          }, []);
      };
      getFacilitySpecializationByLang();
    },
  ]);
