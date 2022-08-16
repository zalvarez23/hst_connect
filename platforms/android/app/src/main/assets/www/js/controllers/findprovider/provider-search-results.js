'use strict';
angular.module('app.controllers')

	.controller('findProviderResultCtrl', ['$rootScope', '$scope', '$location', '$ionicPopup', '$translate', '$filter', '$ionicLoading', '$ionicHistory', '$state', 'localStorageFactory', 'findAProviderService', '$ionicModal',
		function ($rootScope, $scope, $location, $ionicPopup, $translate, $filter, $ionicLoading, $ionicHistory, $state, localStorageFactory, findAProviderService, $ionicModal) {
			console.log("find provider result page loaded");

			//test

			// localStorageFactory.data.searchDetailObj = { srcLat: 36.778261, srcLong: -119.41793240000001 };

			// test
			// localStorageFactory.data.providerType = "Hospital"

			// localStorageFactory.data.providerType = 'Doctor';
			//
			$scope.showLegendImages = 0;
			$scope.textDisclaimer = '';
			$scope.currentDate = new Date();
			$scope.sortKey = "DistanceFromBase";
			// if (localStorageFactory.data.providerType == 'Doctor')
				$scope.sortKey = "orderAcceptance";

			$scope.sortOptions = {
				"DISTANCE": "DistanceFromBase"
			};
			// NEW VARIABLE	


			$scope.newProject = localStorage.getItem('newProject');
			$scope.providerType = localStorageFactory.data.providerType;
			//
			$scope.selectedList = [];

			$scope.getQualityRating = function (rating) {
				// Ref - https://github.com/rajeshwarpatlolla/ionic-ratings
				if (isNaN(rating)) {
					rating = 0;
				}
				rating = Math.round(rating);

				var obj = {
					iconOn: 'ion-ios-star',    //Optional
					iconOff: 'ion-ios-star-outline',   //Optional
					iconOnColor: 'rgb(200, 200, 100)',  //Optional
					iconOffColor: 'rgb(200, 100, 100)',    //Optional
					minRating: 1,    //Optional
					readOnly: true,
					callback: function (rating) {    //Mandatory

					}
				};

				obj["rating"] = rating;

				return obj;
			};

			$scope.hideFilters = function () {
				$scope.modal.hide();
			};

			$scope.getPriceRating = function (rating) {
				// Ref - https://github.com/rajeshwarpatlolla/ionic-ratings
				if (isNaN(rating) || rating >= 6) {
					rating = 0;
				}
				rating = Math.round(rating);
				// Set rating color based on rating value
				var ratingColor = '#ccc';
				switch (rating) {
					// Green
					case 1:
					case 2:
						ratingColor = '#86ac32'; break;
					// Yellow
					case 3:
					case 4:
						ratingColor = '#e9d23c'; break;
					// Red
					default: ratingColor = '#c13736';
				}

				var obj = {
					iconOn: 'ion-social-usd',    //Optional
					iconOff: 'ion-social-usd',   //Optional
					iconOnColor: ratingColor,  //Optional
					iconOffColor: 'rgb(213, 213, 213)',    //Optional
					minRating: 1,    //Optional
					readOnly: true,
					callback: function (rating) {    //Mandatory

					}
				};

				obj["rating"] = rating;

				return obj;
			};

			$scope.showOnMap = function (obj) {
				var ob = {
					lat: obj.Latitude,
					lng: obj.Longitude
				};

				if (localStorageFactory.data.authorizedProvidokerType == "Doctor") {
					ob["name"] = obj["FirstName"] + " " + obj["LastName"];
				} else {
					ob["name"] = obj["Medical_GroupName"];
				}

				ob["address"] = obj["formattedaddress"];

				localStorageFactory.data.resultlocations = [ob];

				$state.go("tabsController.showlocationController");
			};


			// TODO - remove this line
			// test
			// localStorageFactory.data.authorizedProviderType = "Doctor";
			//

			if (localStorageFactory.data.authorizedProviderType == "Doctor") {


				if (localStorageFactory.data.doctorList) {
					localStorageFactory.data.doctorList.sort(function (a, b) {
						return parseFloat(b.FacilityAcceptanceID) - parseFloat(a.FacilityAcceptanceID) || a.DistanceFromBase - b.DistanceFromBase;
					});
				}

				$scope.sortOptions["NAME"] = "FirstName";
				$scope.sortOptions["Acceptance"] = "orderAcceptance";
				$scope.doctorList = localStorageFactory.data.doctorList || [];

				// paste test list


				// test finish

				//
				for (var i = 0; i < $scope.doctorList.length; i++) {
					var l_obj = $scope.doctorList[i];
					if (l_obj.FacilityAcceptanceText == "No History") { $scope.doctorList[i].FacilityAcceptanceText = "Limited Experience"; }
					if (l_obj.FacilityAcceptanceText == "Pre-Authorization Required") { $scope.doctorList[i].FacilityAcceptanceText = "Emergency Use Only"; }
					// l_obj.IsPHCSEnabled = true;
					l_obj.IsInNetwork = l_obj.IsPHCSEnabled;
					l_obj.FacilityAcceptanceID = l_obj.IsInNetwork ? 6 : l_obj.FacilityAcceptanceID;
					l_obj.FacilityAcceptanceText = l_obj.IsInNetwork ? 'nn' : l_obj.FacilityAcceptanceText;
					if (l_obj)
						$scope.textDisclaimer = l_obj.StateDisclaimer;

					switch (l_obj.FacilityAcceptanceID) {
						case 6:
							$scope.doctorList[i]['orderAcceptance'] = 1;
							$scope.doctorList[i].FacilityAcceptanceText = "HST Anchor";
							break;
						case 5:
							$scope.doctorList[i]['orderAcceptance'] = 2;
							$scope.doctorList[i].FacilityAcceptanceText = "Contracted";
							break;
						case 1:
							$scope.doctorList[i]['orderAcceptance'] = 3;
							break;
						case 3:
							$scope.doctorList[i]['orderAcceptance'] = 4;
							break;
						case 4:
							$scope.doctorList[i]['orderAcceptance'] = 5;
							break;
						case 2:
							$scope.doctorList[i]['orderAcceptance'] = 6;
							break;
						default:
							break;
					}
				}

				$scope.selectedList = $scope.doctorList;
				$scope.showLegendImages = $scope.doctorList[0]?.HCBBOverallQualityIndicator;
				console.log($scope.showLegendImages)
				console.log('totales', $scope.doctorList[0])
			} else {
				$scope.sortOptions["NAME"] = "Medical_GroupName";
				$scope.sortOptions["QUALITY_RATING"] = "-QualityRating";
				$scope.sortOptions["PRICE_RATING"] = "PriceRating";
				$scope.sortOptions["FACILITY_ACCEPTANCE"] = "orderAcceptance";

				// Find Hospital
				//test
				// localStorageFactory.data.hospitalList = JSON.parse(localStorage.getItem('testHospital'));
				//test
				$scope.hospitalList = localStorageFactory.data.hospitalList || [];

				for (var i = 0; i < $scope.hospitalList.length; i++) {
					var l_obj = $scope.hospitalList[i];
					if (l_obj.FacilityAcceptanceText == "No History") { $scope.hospitalList[i].FacilityAcceptanceText = "Limited Experience"; }
					if (l_obj.FacilityAcceptanceText == "Pre-Authorization Required") { $scope.hospitalList[i].FacilityAcceptanceText = "Emergency Use Only"; }
					if (l_obj.QualityRating != "")
						l_obj.QualityRating = Math.round(parseFloat(l_obj.QualityRating));
					else
						l_obj.QualityRating = 0;

					if (l_obj.PriceRating != "")
						l_obj.PriceRating = Math.round(parseFloat(l_obj.PriceRating));
					else
						l_obj.PriceRating = 6;

					// new validation

					switch (l_obj.FacilityAcceptanceID) {
						case 1:
							l_obj.FacilityAcceptanceText = l_obj.PercChanceOfVBPAcceptance + '%';
							break;
						case 2:
							l_obj.FacilityAcceptanceText = l_obj.PercChanceOfVBPAcceptance + '%';
							break;
						case 3:
							l_obj.FacilityAcceptanceText = l_obj.PercChanceOfVBPAcceptance + '%';
							break;
						default:
							break;
					};


					switch (l_obj.FacilityAcceptanceID) {
						case 6:
							$scope.hospitalList[i]['orderAcceptance'] = 1;
							$scope.hospitalList[i].FacilityAcceptanceText = "HST Anchor";
							break;
						case 7:
							$scope.hospitalList[i]['orderAcceptance'] = 2;
							$scope.hospitalList[i].FacilityAcceptanceText = "HST Anchor";
							break;
						case 5:
							$scope.hospitalList[i]['orderAcceptance'] = 3;
							$scope.hospitalList[i].FacilityAcceptanceText = "Contracted";
							break;
						case 1:
							$scope.hospitalList[i]['orderAcceptance'] = 4;
							break;
						case 3:
							$scope.hospitalList[i]['orderAcceptance'] = 5;
							break;
						case 2:
							$scope.hospitalList[i]['orderAcceptance'] = 6;
							break;
						case 4:
							$scope.hospitalList[i]['orderAcceptance'] = 7;
							break;
						default:
							break;
					}
				}
				$scope.selectedList = $scope.hospitalList;
			}

			var addressFields = ['Address1', 'Address2', 'City', 'State', 'Zip'];
			for (var i = 0; i < $scope.selectedList.length; i++) {
				var obj = $scope.selectedList[i];

				var addressValues = [];
				obj["formattedaddress"] = "";
				obj["formattedaddressCity"] = "";
				var adress2 = obj.Address2.length == 0 ? "" : ", " + obj.Address2 + " ";
				obj.formattedaddress = obj.Address1 + adress2;
				obj.formattedaddressCity = obj.City + ", " + obj.State + " " + obj.Zip;
				/*for(var j in addressFields) {
					var field = addressFields[j];
					if(obj[field])
						addressValues.push(obj[field]);
				}
	
				obj["formattedaddress"] = addressValues.join(", ");*/
			}
			$scope.goToBack = function () {
				$ionicHistory.goBack();
			}
			$scope.showDetailPage = function (item) {
				console.log(item)
				// $rootScope.providerDetail = $filter('filter')($scope.selectedList, { "Doctor_Id": id })[0];
				$rootScope.providerDetail = item;

				console.log($rootScope.providerDetail)
				$state.go("tabsController.providerDetails");
			};

			$scope.showAllOnMap = function () {
				var resultlocations = [];
				var nameKey;

				if (localStorageFactory.data.authorizedProviderType == "Doctor") {
					nameKey = 0;
				} else {
					nameKey = 1;
				}

				$scope.list = $filter('filter')($scope.selectedList, $scope.filterData);
				$scope.list = $filter('orderObjectBy')($scope.list, $scope.sortKey);

				if (Object.prototype.toString.call($scope.list) != '[object Array]') {
					$scope.list = [];
				}

				for (var i = 0; i < $scope.list.length; i++) {
					var obj = $scope.list[i];
					var ob = {
						lat: obj.Latitude,
						lng: obj.Longitude
					};

					if (nameKey == 0)
						ob["name"] = obj["FirstName"] + " " + obj["LastName"];
					else
						ob["name"] = obj["Medical_GroupName"];

					ob["address"] = obj["formattedaddress"];

					resultlocations.push(ob);
				}

				if (resultlocations.length == 0)
					return;

				localStorageFactory.data.resultlocations = resultlocations;

				$state.go("tabsController.showlocationController");

			};

			// Initialize
			$scope.filter = {
				Price: ['ANY'],
				Quality: ['ANY'],
				Acceptance: 'ANY'

			};
			// Initialize
			$scope.actualfilter = {
				Price: ['ANY'],
				Quality: ['ANY'],
				Acceptance: 'ANY'

			};

			// Create Model Template
			$ionicModal.fromTemplateUrl('filters.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.modal = modal;
			});

			$scope.filter.Price = [];
			$scope.filter.Quality = [];

			$scope.showFilters = function () {
				$scope.filter.Price = $scope.actualfilter.Price;
				$scope.filter.Quality = $scope.actualfilter.Quality;

				// Reset Filter values
				$scope.modal.show();
			};

			$scope.setPriceFilter = function (value) {
				if ($scope.filter.Price.indexOf(value) == -1) {
					if (value == 'ANY') {
						$scope.filter.Price = [value];
					} else {
						if ($scope.filter.Price.indexOf('ANY') != -1)
							$scope.filter.Price.splice($scope.filter.Price.indexOf('ANY'), 1);
						$scope.filter.Price.push(value);
					}
				}
				else
					$scope.filter.Price.splice($scope.filter.Price.indexOf(value), 1);
			}

			// function to initiate modal for info
			$ionicModal.fromTemplateUrl('more-info.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.info_modal = modal;
			})
			$scope.showInfo = function () {
				$scope.info_modal.show()
			}
			$scope.closeInfo = function () {
				$scope.info_modal.hide()
			}

			// function to initiate modal for info
			$ionicModal.fromTemplateUrl('more-info-dis.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.info_modal_dis = modal;
			})
			$scope.showInfoDis = function () {
				$scope.info_modal_dis.show()
			}
			$scope.closeInfoDis = function () {
				$scope.info_modal_dis.hide()
			}

			$scope.setQualityFilter = function (value) {
				if ($scope.filter.Quality.indexOf(value) == -1) {
					if (value == 'ANY') {
						$scope.filter.Quality = [value];
					} else {
						if ($scope.filter.Quality.indexOf('ANY') != -1)
							$scope.filter.Quality.splice($scope.filter.Quality.indexOf('ANY'), 1);
						$scope.filter.Quality.push(value);
					}
				}
				else
					$scope.filter.Quality.splice($scope.filter.Quality.indexOf(value), 1);
			}


			$scope.setAcceptanceFilter = function (value) {
				$scope.filter.Acceptance = value;
			}


			$scope.applyFilter = function () {
				console.log($scope.filter.Price);
				console.log($scope.filter.Quality);

				$scope.actualfilter.Price = $scope.filter.Price;
				$scope.actualfilter.Quality = $scope.filter.Quality;
				$scope.actualfilter.Acceptance = $scope.filter.Acceptance;

				if ($scope.actualfilter.Price.length == 0 || $scope.actualfilter.Quality.length == 0) {
					var msg;

					if ($scope.actualfilter.Price.length == 0)
						msg = $translate.instant('SELECT_ONE_PRICE_FILTER');
					else if ($scope.actualfilter.Quality.length == 0)
						msg = $translate.instant('SELECT_ONE_QUALITY_FILTER');

					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: msg
					}).then(function (res) { });
				} else {
					$scope.modal.hide();
				}
			};

			// $scope.filterData = function (obj) {
			// 	var quality = false;
			// 	var price = false;
			// 	if ($scope.actualfilter.Quality.indexOf('ANY') != -1)
			// 		quality = true;

			// 	if ($scope.actualfilter.Price.indexOf('ANY') != -1)
			// 		price = true;

			// 	return (quality || $scope.actualfilter.Quality.indexOf(Math.round(obj.QualityRating).toString()) != -1) && (price || $scope.actualfilter.Price.indexOf(Math.round(obj.PriceRating).toString()) != -1);
			// };

			$scope.filterData = function (obj) {
				var quality = false;
				var price = false;
				var acceptance = false;
				if ($scope.actualfilter.Quality.indexOf('ANY') != -1)
					quality = true;

				if ($scope.actualfilter.Price.indexOf('ANY') != -1)
					price = true;

				if ($scope.actualfilter.Acceptance === 'ANY')
					acceptance = true;

				return (quality || $scope.actualfilter.Quality.indexOf(Math.round(obj.QualityRating).toString()) != -1) && (price || $scope.actualfilter.Price.indexOf(Math.round(obj.PriceRating).toString()) != -1) && (acceptance || $scope.actualfilter.Acceptance === Math.round(obj.FacilityAcceptanceID).toString());
			};

			$scope.$on('$destroy', function () {
				$scope.modal.remove();
				$scope.info_modal.remove();
				$scope.info_modal_dis.remove();
			});
		}
	])
