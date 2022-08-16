angular.module('app.controllers', ['app.services', 'app.constants'])
	.controller('searchResultCtrl', ['$scope', '$ionicPopup', '$location', '$ionicHistory', '$translate', 'CONSTANTS', '$ionicLoading', 'localStorageFactory', '$state', 'appConst', '$filter', 'searchResultService', '$rootScope', '$ionicModal', '$ionicPopup',
		function ($scope, $ionicPopup, $location, $ionicHistory, $translate, CONSTANTS, $ionicLoading, localStorageFactory, $state, appConst, $filter, searchResultService, $rootScope, $ionicModal, $ionicPopup) {
			console.log("search result controller")
			var colorLow = 'green';
			var colorMid = 'yellow';
			var colorHigh = 'red';

			var pruceduresInfoById = searchResultService.proceduresByProcId;
			$scope.localStorageFactory = localStorageFactory;
			$scope.sortKey = "orderAcceptance";
			$scope.languageAux = localStorageFactory.data.AppLanguageParam;
			$scope.sortOptions = {
				"DISTANCE": "DistanceFromBase",
				"QUALITY_RATING": "-QualityRating",
				"PRICE_RATING": "PriceRating",
				"NAME": "Medical_GroupName",
				"FACILITY_ACCEPTANCE": "orderAcceptance"
			};
			$scope.newProject = localStorage.getItem('newProject');


			console.log("hello", localStorageFactory.data);

			//test
			// localStorageFactory.data.priceAProcedureList = JSON.parse(localStorage.getItem('testProcedure'));

			//
			$scope.view = {};
			$scope.view["message"] = localStorageFactory.data.priceAProcedureList || [];


			// Get Min and Max for total results display
			$scope.totalResults = {
				minPrice: getTotals('min'),
				maxPrice: getTotals('max')
			};

			$scope.getRating = function (rating) {
				// Ref - https://github.com/rajeshwarpatlolla/ionic-ratings

				if (isNaN(rating)) {
					rating = 0;
				}
				rating = Math.round(rating);
				var obj = {
					iconOn: 'ion-ios-star',    //Optional
					iconOff: 'ion-ios-star',   //Optional
					iconOnColor: 'rgb(233,203,60)',  //Optional
					iconOffColor: 'rgb(213, 213, 213)',    //Optional
					minRating: 1,    //Optional
					readOnly: true,
					callback: function (rating) {    //Mandatory

					}
				};

				obj["rating"] = rating;

				return obj;
			}

			$scope.showAllOnMap = function () {
				var resultlocations = [];
				$scope.list = localStorageFactory.data.priceAProcedureList ? localStorageFactory.data.priceAProcedureList : [];

				$scope.list = $filter('filter')($scope.list, $scope.filterData);
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
					ob["name"] = obj["Medical_GroupName"];
					ob["address"] = obj["formattedaddress"];
					resultlocations.push(ob);
				}

				//console.log(resultlocations);
				localStorageFactory.data.resultlocations = resultlocations;

				$state.go("tabsController.papshowlocationController");

			};

			$scope.getPriceRating = function (rating) {
				if (isNaN(rating) || rating > 5) {
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
					callback: function (rating) { } //Mandatory
				};

				obj["rating"] = rating;
				return obj;
			}

			$scope.searchResult = function (Doctor_Id) {
				$rootScope.procedurDetail = $filter('filter')($scope.view.message, { "Doctor_Id": Doctor_Id })[0];
				//console.log("doctor_id", Doctor_Id);
				$state.go("tabsController.PAPsearchDetails");
				//console.log("hello",$state.go("tabsController.PAPsearchDetails"))
			}
			//console.log("search results", $scope.searchResult);

			var addressFields = ['Address1', 'Address2', 'City', 'State', 'Zip'];

			$scope.view = {};
			$scope.view["message"] = localStorageFactory.data.priceAProcedureList || [];

			for (var i = 0; i < $scope.view.message.length; i++) {
				var l_obj = $scope.view.message[i];
				
				if (l_obj.FacilityAcceptanceText == "Unknown") { $scope.view.message[i].FacilityAcceptanceText = "Limited Experience"; }
				if (l_obj.FacilityAcceptanceText == "Accepted") { $scope.view.message[i].FacilityAcceptanceText = "VBP Accepted"; }
				if (l_obj.FacilityAcceptanceText == "Potentially") { $scope.view.message[i].FacilityAcceptanceText = "Partial Acceptance"; }
				if (l_obj.FacilityAcceptanceText == "Not Accepted") { $scope.view.message[i].FacilityAcceptanceText = "Emergency Use Only"; }
				if (l_obj.FacilityAcceptanceText == "No History") { $scope.view.message[i].FacilityAcceptanceText = "Limited Experience"; }
				if (l_obj.FacilityAcceptanceText == "Pre-Authorization Required") { $scope.view.message[i].FacilityAcceptanceText = "Emergency Use Only"; }
				//l_obj.MemberTotalCost = Math.round(l_obj.MemberTotalCost)
				//console.log("l_obj", l_obj);
				//quality rating
				if (l_obj.QualityRating != "")
					l_obj.QualityRating = Math.round(parseFloat(l_obj.QualityRating));
				else
					l_obj.QualityRating = 0;
				//price ratings
				if (l_obj.PriceRating != "")
					l_obj.PriceRating = Math.round(parseFloat(l_obj.PriceRating));
				else
					l_obj.PriceRating = 6;

				var addressValues = [];

				for (var j in addressFields) {
					var field = addressFields[j];
					if (l_obj[field])
						addressValues.push(l_obj[field]);
				}

				// l_obj.FacilityAcceptanceID = 6
				switch (l_obj.FacilityAcceptanceID) {
					case 6:
						$scope.view.message[i]['orderAcceptance'] = 1;
						$scope.view.message[i].FacilityAcceptanceText = "HST Anchor";
						break;
					case 7:
						$scope.view.message[i]['orderAcceptance'] = 2;
						$scope.view.message[i].FacilityAcceptanceText = "HST Anchor";
						break;
					case 5:
						$scope.view.message[i]['orderAcceptance'] = 3;
						$scope.view.message[i].FacilityAcceptanceText = "Contracted";
						break;
					case 1:
						$scope.view.message[i]['orderAcceptance'] = 4;
						break;
					case 3:
						$scope.view.message[i]['orderAcceptance'] = 5;
						break;
					case 2:
						$scope.view.message[i]['orderAcceptance'] = 6;
						break;
					case 4:
						$scope.view.message[i]['orderAcceptance'] = 7;
						break;
					default:
						break;
				}
				l_obj["formattedaddress"] = addressValues.join(", ");
				// console.log(l_obj.Medical_GroupName  + " : " + l_obj.QualityRating)
				// console.log($scope.view.message[i].Medical_GroupName  + " : " + $scope.view.message[i].QualityRating)
			}

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
			$ionicModal.fromTemplateUrl('pap-filters.html', {
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

			$scope.hideFilters = function () {
				$scope.modal.hide();
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

			$scope.setAcceptanceFilter = function (value) {
				$scope.filter.Acceptance = value;
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

			$scope.applyFilter = function () {
				//console.log($scope.filter.Price);
				//console.log($scope.filter.Quality);

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
			});

			$scope.getEstCost = function (min, max, target) {
				var totalCostWeight = 0;
				var targetVal = target ? target : min;
				var zone1 = min + ((max - min) / 3);
				var zone2 = min + ((max - min) / 2);
				var zone3 = max;
				console.log("targetVal", targetVal);

				if (targetVal < zone1) {
					return colorLow;
				}
				else if (targetVal > zone1 && targetVal < zone2) {
					return colorMid;
				}
				else {
					return colorHigh;
				}
				// console.log( '-----' );
			};
			/*
			var infoTemplate = 
			"<div><i class=\"icon ion-ios-star\"><i class=\"icon ion-ios-star\"><i class=\"icon ion-ios-star\"><i class=\"icon ion-ios-star\"><i class=\"icon ion-ios-star\"></i><br><p>The hospital's overall rating shows the quality of care based on 60 measures reported to Centers for Medicare & Medicaid (CMS) for hospital provided services. The average rating for hospitals is a three-star rating.</p>"+
			"<br><i class=\"icon ion-social-usd\"><i class=\"icon ion-social-usd\"><i class=\"icon ion-social-usd\"><i class=\"icon ion-social-usd\"><i class=\"icon ion-social-usd\"></i><br><p>Price rating is based on the hospital's average charge for a specified procedure. If no procedure is identified the price rating is based on the hospitals overall cost-of-charge.</p></div>"
			$scope.showPopup = function(){
			//Functions for the popup alertg
				var infoPopup = $ionicPopup.show({
					template : infoTemplate,
					title: 'Info',
					scope: $scope,
					buttons: [
						{text: 'Ok'}
					]
				})
			}
			*/

			// function to initiate modal for info
			$ionicModal.fromTemplateUrl('more-info.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.info_modal = modal;
			})
			$ionicModal.fromTemplateUrl('more-info-new.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.info_modal_new = modal;
			})

			$scope.showInfo = function () {
				$scope.info_modal.show()
			}
			$scope.closeInfo = function () {
				$scope.info_modal.hide()
			}
			$scope.showInfoNew = function () {
				$scope.info_modal_new.show()
			}
			$scope.closeInfoNew = function () {
				$scope.info_modal_new.hide()
			}
			//destroy is shared with other modal

			// HELPER METHODS
			function getTotals(type) {
				var messages = $scope.view["message"];
				var min = 0;
				var max = 0;
				messages.forEach(function (msg) {
					min = msg.MinCharge < min || min === 0 ? msg.MinCharge : min;
					max = msg.MaxCharge > max ? msg.MaxCharge : max;
				});
				if (type === 'min') return min;
				else return max;
			}


			$scope.goToLink = function (url) {
				let alertPopup = $ionicPopup.confirm({
					title: $translate.instant('CONFIRM'),
					template: $translate.instant('CONFIRM_OPEN_LINK'),
					buttons: [
						{ text: 'No' },
						{
							text: '<b>Yes</b>',
							type: 'button-positive',
							enabled: true,
							onTap: function (e) {
								window.open(url, '_system', 'location=yes');
							}
						}
					]
				});
			}


			$scope.searchInfoByDescription = function (textDes) {
				$scope.listInfoByDes = [];
				$ionicLoading.show({
					template: '<p>Loading Procedure Information...</p><ion-spinner></ion-spinner>'
				});
				var postData = {};
				var idIdentifier = localStorage.getItem('ProcIdentifier');

				postData["ProcedureIdentifier"] = idIdentifier;

				if (idIdentifier == 470 || idIdentifier == 468) {
					postData["ProcedureDescription"] = localStorageFactory.data.selectedProcedure;
				} else {
					postData["ProcedureDescription"] = "";
				}
				// postData["AppID"] = "8B2A6BCD-7E8A-4D2B-AAB0-88EFAE074FF3" 
				// postData["MemberId"] = "esicard" // localStorageFactory.data.MemberId;
				// postData["GroupId"] = "22"; //localStorageFactory.data.GroupId
				// postData["Language"] = "ES"; //localStorageFactory.data.AppLanguageParam;

				postData["AppID"] = localStorageFactory.data.AppID;
				postData["MemberId"] = localStorageFactory.data.MemberId;
				postData["GroupId"] = localStorageFactory.data.GroupId;
				postData["Language"] = localStorageFactory.data.AppLanguageParam;


				// alert(JSON.stringify(postData))
				pruceduresInfoById.get(postData).$promise.then(function (response) {
					$ionicLoading.hide();
					if (response.message == "Data doesn't exist") {
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('ERROR'),
							template: "No information found"
						});
						return;
					}
					$scope.listInfoByDes = response.message;
					$scope.groupCategories = [];
					$scope.listInfoByDes.forEach(function (item, index) {
						$scope.groupCategories.push({
							rank: item.Rank,
							title: (index + 1) + ' - ' + item.Title,
							fullsumary: item.Fullsummary,
							categories: [],
							categoriesPrint: []
						});
						item.Categories.forEach(function (categories) {
							if ($scope.groupCategories[index].categories.indexOf(categories.CategoryNames[0]) == -1) {

								$scope.groupCategories[index].categories.push(categories.CategoryNames[0]);
								$scope.groupCategories[index].categoriesPrint.push({
									category: categories.CategoryNames[0],
									details: []
								});
								let indexAux = $scope.groupCategories[index].categoriesPrint.length - 1;
								item.Categories.forEach(function (categoriesAux) {
									if (categoriesAux.CategoryNames[0] == categories.CategoryNames[0]) {
										$scope.groupCategories[index].categoriesPrint[indexAux].details.push({
											title: categoriesAux.title,
											url: categoriesAux.url
										})
									}
								})
							} else {

							}
						});
					});
					$scope.showInfoNew();

				}, function (error) {
					$ionicLoading.hide();
					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('NO_CONN_ERR')
					});
					// let test = ``;
					// $scope.listInfoByDes = JSON.parse(test).message;
					// GET GROUP
					// console.log($scope.groupCategories)
					// $scope.showInfoNew();
				});
			}



		}
	]);