"use strict";
angular
  .module("app.controllers")

  .controller("findDoctorCtrl", [
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
      console.log("find Doctor page loaded");
      $scope.newProject = localStorage.getItem("newProject");
      // Asking to get current location
      locationService.checkAndGetLocation();
      localStorageFactory.data.providerType = "Doctor";

      $scope.loc_choice = "currentlocation";
      var WITHIN = $translate.instant("WITHIN");
      var MILES = $translate.instant("MILES");
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

      $scope.$watch(
        function () {
          return localStorageFactory.data.providerSpecilization;
        },
        function (NewValue, OldValue) {
          console.log("Provider Specialization list updated in doctor page");
          $scope.specializationList =
            localStorageFactory.data.providerSpecilization || [];
        },
        true
      );

      /*setTimeout(function(){
	
	$scope.specializationList = [{"ID":0,"Name":"ALL"},{"ID":1,"Name":"Addiction Medicine"},{"ID":2,"Name":"Adolescent Medicine"},{"ID":3,"Name":"Adult Reconstructive Orthopaedic Surgery"},{"ID":4,"Name":"Aerospace Medicine"},{"ID":5,"Name":"Allergy"},{"ID":6,"Name":"Allergy & Immunology"},{"ID":7,"Name":"Anatomic Pathology"},{"ID":8,"Name":"Anatomic Pathology & Clinical Pathology"},{"ID":9,"Name":"Anesthesiology"},{"ID":10,"Name":"Blood Banking & Transfusion Medicine"},{"ID":11,"Name":"Body Imaging"},{"ID":12,"Name":"Cardiovascular Disease"},{"ID":13,"Name":"Chemical Pathology"},{"ID":14,"Name":"Child & Adolescent Psychiatry"},{"ID":15,"Name":"Clinical & Laboratory Dermatological Immunology"},{"ID":16,"Name":"Clinical & Laboratory Immunology"},{"ID":17,"Name":"Clinical Cardiac Electrophysiology"},{"ID":18,"Name":"Clinical Cytogenetic"},{"ID":19,"Name":"Clinical Genetics (M.D.)"},{"ID":20,"Name":"Clinical Molecular Genetics"},{"ID":21,"Name":"Clinical Neurophysiology"},{"ID":22,"Name":"Clinical Pathology"},{"ID":23,"Name":"Clinical Pharmacology"},{"ID":24,"Name":"Colon & Rectal Surgery"},{"ID":25,"Name":"Critical Care Medicine"},{"ID":26,"Name":"Cytopathology"},{"ID":27,"Name":"Dermatology"},{"ID":28,"Name":"Dermatopathology"},{"ID":29,"Name":"Diagnostic Radiology"},{"ID":30,"Name":"Dietitian, Registered"},{"ID":31,"Name":"Emergency Medicine"},{"ID":32,"Name":"Endocrinology, Diabetes & Metabolism"},{"ID":33,"Name":"Family Medicine"},{"ID":34,"Name":"Foot and Ankle Surgery"},{"ID":35,"Name":"Forensic Pathology"},{"ID":36,"Name":"Forensic Psychiatry"},{"ID":37,"Name":"Gastroenterology"},{"ID":38,"Name":"General Practice"},{"ID":39,"Name":"Geriatric Medicine"},{"ID":40,"Name":"Geriatric Psychiatry"},{"ID":41,"Name":"Gynecologic Oncology"},{"ID":42,"Name":"Gynecology"},{"ID":43,"Name":"Hematology"},{"ID":44,"Name":"Hematology & Oncology"},{"ID":45,"Name":"Hepatology"},{"ID":46,"Name":"Hospice and Palliative Medicine"},{"ID":47,"Name":"Infectious Disease"},{"ID":48,"Name":"Internal Medicine"},{"ID":49,"Name":"Maternal & Fetal Medicine"},{"ID":50,"Name":"Medical Microbiology"},{"ID":51,"Name":"Medical Oncology"},{"ID":52,"Name":"Medical Toxicology"},{"ID":53,"Name":"Neonatal-Perinatal Medicine"},{"ID":54,"Name":"Nephrology"},{"ID":55,"Name":"Neurological Surgery"},{"ID":56,"Name":"Neurology"},{"ID":57,"Name":"Neurology with Special Qualifications in Child Neurology"},{"ID":58,"Name":"Neuromusculoskeletal Medicine & OMM"},{"ID":59,"Name":"Neuropathology"},{"ID":60,"Name":"Neuroradiology"},{"ID":61,"Name":"Nuclear Imaging & Therapy"},{"ID":62,"Name":"Nuclear Radiology"},{"ID":63,"Name":"Obstetrics"},{"ID":64,"Name":"Obstetrics & Gynecology"},{"ID":65,"Name":"Occupational Medicine"},{"ID":66,"Name":"Ophthalmology"},{"ID":67,"Name":"Oral and Maxillofacial Radiology"},{"ID":68,"Name":"Orthopaedic Surgery"},{"ID":69,"Name":"Orthopaedic Surgery of the Spine"},{"ID":70,"Name":"Orthopaedic Trauma"},{"ID":71,"Name":"Otolaryngology"},{"ID":72,"Name":"Otology & Neurotology"},{"ID":73,"Name":"Pain Medicine"},{"ID":74,"Name":"Pediatric Allergy/Immunology"},{"ID":75,"Name":"Pediatric Cardiology"},{"ID":76,"Name":"Pediatric Critical Care Medicine"},{"ID":77,"Name":"Pediatric Emergency Medicine"},{"ID":78,"Name":"Pediatric Endocrinology"},{"ID":79,"Name":"Pediatric Gastroenterology"},{"ID":80,"Name":"Pediatric Hematology-Oncology"},{"ID":81,"Name":"Pediatric Infectious Diseases"},{"ID":82,"Name":"Pediatric Nephrology"},{"ID":83,"Name":"Pediatric Orthopaedic Surgery"},{"ID":84,"Name":"Pediatric Otolaryngology"},{"ID":85,"Name":"Pediatric Pathology"},{"ID":86,"Name":"Pediatric Radiology"},{"ID":87,"Name":"Pediatric Rheumatology"},{"ID":88,"Name":"Pediatric Surgery"},{"ID":89,"Name":"Pediatric Urology"},{"ID":90,"Name":"Pediatrics"},{"ID":91,"Name":"Ph.D. Medical Genetics"},{"ID":92,"Name":"Physical Medicine & Rehabilitation"},{"ID":93,"Name":"Plastic Surgery"},{"ID":94,"Name":"Plastic Surgery Within the Head and Neck"},{"ID":95,"Name":"Procedural Dermatology"},{"ID":96,"Name":"Psychiatry"},{"ID":97,"Name":"Psychoanalyst"},{"ID":98,"Name":"Public Health & General Preventive Medicine"},{"ID":99,"Name":"Pulmonary Disease"},{"ID":100,"Name":"Radiation Oncology"},{"ID":101,"Name":"Radiological Physics"},{"ID":102,"Name":"Reproductive Endocrinology"},{"ID":103,"Name":"Rheumatology"},{"ID":104,"Name":"Sleep Medicine"},{"ID":105,"Name":"Specialist/Technologist, Other"},{"ID":106,"Name":"Spinal Cord Injury Medicine"},{"ID":107,"Name":"Sports Medicine"},{"ID":108,"Name":"Surgery"},{"ID":109,"Name":"Surgery of the Hand"},{"ID":110,"Name":"Surgical Critical Care"},{"ID":111,"Name":"Surgical Oncology"},{"ID":112,"Name":"Technician, Pathology"},{"ID":113,"Name":"Thoracic Surgery (Cardiothoracic Vascular Surgery)"},{"ID":114,"Name":"Transplant Surgery"},{"ID":115,"Name":"Trauma Surgery"},{"ID":116,"Name":"Undersea and Hyperbaric Medicine"},{"ID":117,"Name":"Urology"},{"ID":118,"Name":"Vascular & Interventional Radiology"},{"ID":119,"Name":"Vascular Surgery"}];
			}, 1000);*/

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
      $scope.nameProc = "Select . . ";

      $scope.modalSelect = function () {
        var cabecera, template;
        var cabecera = $translate.instant("PROCEDURE");
        var txtSearch = $translate.instant("SEARCH");
        $scope.showok = true;
        if ($scope.procedure != undefined) {
          $scope.specializationList.forEach(function (item, index) {
            if ($scope.specialization == item.ID) {
              item["colorSelect"] = "colorSelect";
              item["checked"] = true;
            } else {
              item["colorSelect"] = "";
              item["checked"] = false;
            }
          });
          console.log("listo para cambiar color");
        }
        template =
          '<div class="modalStyle"><div class="searchInput">' +
          '<label class="item item-input"><i class="icon ion-search placeholder-icon"></i>' +
          '<input type="text" placeholder="' +
          txtSearch +
          '" ng-model="search"> </label></div>' +
          '<div class="card-panel grey lighten-5 z-depth-1 cardP " ng-repeat="item in specializationList | filter : search">' +
          '<div class="row valign-wrapper contentPlantilla {{item.colorSelect}}" ng-click="selectId(item);">' +
          '<div class="col col-90"><span class="black-text">{{item.Name}}</span></div>' +
          '<div class="col"><input type="radio" name="gender" ng-checked="item.checked"></div></div></div></div>';

        alertPop = alertPopResult(
          cabecera,
          template,
          "modalStyleSelect",
          $scope
        );
      };
      $scope.selectId = function (item) {
        $scope.procedure = item;
        $scope.nameProc = item.Name;
        $scope.specialization = String(item.ID);
        alertPop.close();
      };
      var categoryDoctor = null;
      delete localStorageFactory.data["inputAddress"];

      for (var i in $scope.categories) {
        var obj = $scope.categories[i];
        if (obj["CategoryName"] == "Doctor") {
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

      $scope.selectIdMillas = function (item) {
        $scope.aroundDistance = item.distance;
        alertPop.close();
      };

      // SEARCH MILES
      var authorizedProviders = findAProviderService.authorizedProvidersDoctor;

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
        //
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
              location["lat"] = localStorageFactory.data.selectedlocation.lat;
              location["long"] = localStorageFactory.data.selectedlocation.long;
            }
            break;
        }

        postData["Name"] = $scope.name || "";
        postData["distance"] = $scope.aroundDistance;

        postData["SpecializationID"] = $scope.specialization; // Must for doctor search
        postData["ProcedureIndicator"] = ""; // not needed for doctor search
        postData["Zip"] = !isNaN($scope.inputaddress)
          ? $scope.inputaddress
          : "";

        $ionicLoading.show({
          template:
            "<p>" +
            $translate.instant("SEARCHING_DOCTORS") +
            "</p><ion-spinner></ion-spinner>",
        });

        localStorageFactory.data.authorizedProviderType = "Doctor";
        delete localStorageFactory.data["doctorList"];

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

        // localStorageFactory.data.authorizedProviderType = "Doctor";
        // delete localStorageFactory.data["doctorList"];
        // var postData = {};
        // postData["AppID"] = "8B2A6BCD-7E8A-4D2B-AAB0-88EFAE074FF3";
        // postData["MemberId"] = "kevinsalazar";
        // postData["GroupId"] = "22";
        // postData["BuildVersion"] = "3.3.7";
        // postData["Device_Type"] = "android";
        // postData["DeviceId"] = "8fb51648e636d0e4";
        // postData["CategoryId"] = 2;
        // postData["Name"] = "";
        // postData["distance"] = 15;
        // postData["SpecializationID"] = 2;
        // postData["ProcedureIndicator"] = "";
        // postData["Latitude"] = "33.6147846";
        // postData["Longitude"] = "-117.637617";
        // postData["Zip"] = "92692";

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
                localStorageFactory.data.doctorList = response.message;
              }

              // Go to the search result page
              $state.go("tabsController.providerSearchResults");
            } else {
              console.log(
                "Error while searching authorized providers - Doctor"
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
        alertPopup.then(function (res) {
          $scope.loc_choice = "inputlocation";
        });
      }
    },
  ]);
