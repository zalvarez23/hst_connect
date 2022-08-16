'use strict';
angular.module('app.directives', ['app.factories'])

	.directive('homeIcon', ['$timeout', function ($timeout) {
		return {
			compile: function (element, tAttrs) {
				element[0].innerHTML = '<ion-nav-buttons side="left"><button ui-sref="landingPage" class="button button-icon button-clear icon-home cur-pointer"><img src="img/home-icon.png" class="menu-icon"/></button></ion-nav-buttons>' + element[0].innerHTML;
			}
		}
	}
	])
	.directive('sbLoad', ['$parse', function ($parse) {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				var fn = $parse(attrs.sbLoad);
				elem.on('load', function (event) {
					scope.$apply(function () {
						fn(scope, { $event: event, message: 'success' });
					});
				});
				elem.on('error', function (event) {
					scope.$apply(function () {
						fn(scope, { $event: event, message: 'error' });
					});
				});
			}
		};
	}])
	.directive('capturePhoto', ['$timeout', '$cordovaCamera', '$rootScope', function ($timeout, $cordovaCamera, $rootScope) {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {

				element[0].onclick = function () {
					//Camera
					console.log(attrs);
					if (attrs.phototype == 'camera') {
						var options = {
							quality: 100,
							destinationType: Camera.DestinationType.DATA_URL,
							sourceType: Camera.PictureSourceType.CAMERA,
							allowEdit: false,
							encodingType: Camera.EncodingType.PNG,
							targetWidth: 500,
							targetHeight: 500,
							popoverOptions: CameraPopoverOptions,
							saveToPhotoAlbum: true,
							correctOrientation: true
						};

						$cordovaCamera.getPicture(options).then(function (imageData) {
							scope.$eval(attrs.successcallback)(imageData);
						}, function (err) {
							console.log(err);
						});

					} else {
						// Phone gallery
						var options = {
							quality: 100,
							destinationType: Camera.DestinationType.DATA_URL,
							sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
							allowEdit: false,
							encodingType: Camera.EncodingType.PNG,
							targetWidth: 500,
							targetHeight: 500,
							popoverOptions: CameraPopoverOptions,
							saveToPhotoAlbum: true,
							correctOrientation: true
						};

						$cordovaCamera.getPicture(options).then(function (imageData) {
							scope.$eval(attrs.successcallback)(imageData);
						}, function (err) {
							console.log(err);
						});

					}

				}
			}
		}
	}
	])

	/**
	 * @description 
	 * 		Map Directive used to render Google Map and select a location on Map
	 *
	 */
	.directive('mapLocationSelector',
		function ($ionicPlatform, localStorageFactory) {
			return {
				restrict: 'E',
				link: function ($scope, $element, $attr) {
					$ionicPlatform.ready(function () {
						function initializeMap(lat, lng) {
							var markers;
							if (lat == null) {
								console.log("null lat")
								lat = 0.0;
							}
							if (lng == null) {
								console.log("null lat")
								lng = 0.0;
							}
							var div = document.getElementById('map');
							//check for maps existence
							if (typeof google !== 'object' || typeof google.maps !== 'object') {
								console.log("Map Plugin not available")
								return;
							}
							console.log("Initializing Map Location Selector")

							//create map with inital location
							var myLoc = new google.maps.LatLng(lat, lng);
							var map = new google.maps.Map(div, {
								zoom: 15,
								center: myLoc,
								mapTypeControl: false,
								streetViewControl: false,
								zoomControl: false
							});
							console.log(myLoc);
							//create marker
							var marker = new google.maps.Marker({
								position: myLoc,
								map: map
							});

							//Add listener
							addMarkerMovement(map, marker)
							//moveMarker(marker, map);
						}
						function addMarkerMovement(map, marker) {
							map.addListener('click', function (event) {
								console.log("hello world");
								var latitude = event.latLng.lat();
								var longitude = event.latLng.lng();
								console.log("hello world", event.latLng);
								console.log(latitude + ', ' + longitude);
								marker.setPosition(event.latLng);
								console.log(localStorageFactory.data);
								localStorageFactory.data.selectedlocation = {
									"lat": latitude,
									"long": longitude
								};
								map.panTo(event.latLng);
							});
						}

						if (localStorageFactory.data.inputAddress) {
							console.log("if", localStorageFactory.data.inputAddress);
							localStorageFactory.geocodeAddress(localStorageFactory.data.inputAddress, function (pos) {
								// Get Lat long from corresponding object
								console.log("Geocoded location : " + localStorageFactory.data.inputAddress);
								console.log(pos);
								if (typeof pos["lat"] == "undefined") {
									initializeMap();
								} else {
									initializeMap(pos["lat"], pos["lng"]);
									localStorageFactory.data.selectedlocation = {
										"lat": pos.lat,
										"long": pos.lng
									};
								}
							});
						} else if (localStorageFactory.data.currentlocation != null) {
							console.log("elseif:", localStorageFactory.data.currentlocation);
							localStorageFactory.data.selectedlocation = localStorageFactory.data.currentlocation;
							initializeMap(localStorageFactory.data.currentlocation.lat, localStorageFactory.data.currentlocation.long);
						} else {
							console.log("else init map");
							console.log("factory", localStorageFactory.data);
							initializeMap(33.0, -117.0);
						}
					});
				}

			}
		}
	)

	/**
	 * @name mapShowLocation
	 * @description 
	 * 		This directive is used to show a marker on the Google Map
	 *
	 */
	.directive('mapShowLocation', ['$ionicPlatform', 'localStorageFactory', '$cordovaInAppBrowser', '$translate', '$rootScope', '$filter', '$state',
		function ($ionicPlatform, localStorageFactory, $cordovaInAppBrowser, $translate, $rootScope, $filter, $state) {
			return {
				restrict: 'E',
				link: function ($scope, $element, $attr) {
					var markerLocations = localStorageFactory.data.resultlocations;

					var div = document.getElementById('location_map');
					//check if ionic is ready then do other stuff
					$ionicPlatform.ready(function () {
						console.log("halp", $scope)
						console.log($state);

						function openNavigation(latDestiny, longDestiny) {
							var origString = latDestiny + ',' + longDestiny;
							launchnavigator.navigate([localStorageFactory.data.searchDetailObj.srcLat, localStorageFactory.data.searchDetailObj.srcLong], { start: origString });
						}
						window.openNavigation = openNavigation;
						//basic function to init map and render it onto the screen
						function initializeMap() {

							//get the long and latt
							var pos = markerLocations[0] || {};
							var latt = pos.lat || 0.0;
							var long = pos.lng || 0.0;

							//check for maps existence
							if (typeof google !== 'object' || typeof google.maps !== 'object') {
								console.log("Map Plugin not available")
								return;
							}
							console.log("Initializing Map Show Location");
							var zoom = 6;
							console.log("dat", localStorageFactory.data)
							//create map with inital location
							var uluru = new google.maps.LatLng(parseFloat(latt), parseFloat(long));
							var map = new google.maps.Map(div, {
								zoom: zoom,
								center: uluru,
								mapTypeControl: false,
								streetViewControl: false,
								zoomControl: false
							});

							console.log("end")
							//create singular info window for use
							var infowindow = new google.maps.InfoWindow();
							//create listener
							//loop through marker locations
							console.log("local storage factory", localStorageFactory.data)
							console.log("markers", markerLocations)
							var papIndex = 0;
							var listofItems = [];
							var doc_flag = false;


							if (localStorageFactory.data.currentTabSelection === 'tabsController.priceAProcedure') {
								listofItems = localStorageFactory.data.priceAProcedureList
								doc_flag = false;
							}
							else if (localStorageFactory.data.providerType === 'Hospital') {
								listofItems = localStorageFactory.data.hospitalList
								doc_flag = false;
							}
							else if (localStorageFactory.data.providerType === 'Doctor') {
								listofItems = localStorageFactory.data.doctorList
								console.log(listofItems)
								doc_flag = true;
							}

							var markerBounds = new google.maps.LatLngBounds();
							for (var i = 0; i < markerLocations.length; i++) {

								const itemMarker = markerLocations[i];
								//get the various details of the actuall marker locations
								var acceptance = 4;
								for (var j = 0; j < listofItems.length; j++) {
									// ALVAREZ 2
									if (listofItems[j].formattedaddress == markerLocations[i].address) {
										acceptance = listofItems[j].FacilityAcceptanceID;
										// papIndex = j;
										markerLocations[i]['id_general'] = listofItems[j].Doctor_Id;
										markerLocations[i]['acceptance'] = acceptance;

									}
								}

							}
							markerLocations.sort(function (a, b) {
								return parseFloat(b.acceptance) - parseFloat(a.acceptance);
							});
							for (let i = 0; i < markerLocations.length; i++) {
								var position = markerLocations[i];

								var pos = new google.maps.LatLng(parseFloat(markerLocations[i].lat), parseFloat(markerLocations[i].lng));
								//var snippet = position.address + '<br><a href="http://maps.google.com/maps?saddr=' + localStorageFactory.data.searchDetailObj.srcLat + ',' + localStorageFactory.data.searchDetailObj.srcLong + '&daddr=' + markerLocations[i].lat + ',' + markerLocations[i].lng + '&dirflg=d">' + $translate.instant('GET_DIRECTIONS') + '</a>'; 
								//var snippet = position.address + '<br><a onclick="window.open(\'http://apache.org\', \'_blank\', \'location=yes\')">' + $translate.instant('GET_DIRECTIONS') + '</a>'; 
								var destString = localStorageFactory.data.searchDetailObj.srcLat + "," + localStorageFactory.data.searchDetailObj.srcLong;
								var origString = markerLocations[i].lat + ',' + markerLocations[i].lng;
								//var snippet = "<div class = \"popup\"><p>"+ position.address + '</p> <div class = "popup-row"> <a onclick="window.open(\'https://www.google.com/maps/dir/?api=1&destination='+destString+'&origin='+origString+'\',\'_blank\', \'location=yes\')">'+ $translate.instant('GET_DIRECTIONS') +'</a>'
								var snippet = "<div class = \"popup\"><p>" + position.address + '</p> <div class = "popup-row"> <a onclick="window.openNavigation(' + markerLocations[i].lat + ',' + markerLocations[i].lng + ')">' + $translate.instant('GET_DIRECTIONS') + '</a>'
								var snippet = snippet + "<a onclick='angular.element(document.body).scope().$root.$broadcast(\"gmapsIF\"," + position.id_general + " )' > Details</a></div></div>"
								var imgUrl1 = "img/marker-g.png"
								var imgUrl2 = "img/marker-y.png"
								var imgUrl3 = "img/marker-r.png"
								var imgUrl4 = "img/marker-b.png"
								var imgUrl6 = "img/marker-w.png"
								var icon;


								//changes the icons
								// Last change newProject
								/*var newProject = localStorage.getItem('newProject');
								if (newProject == 'true' || newProject == true) {
									acceptance = 4;
								}*/
								switch (markerLocations[i].acceptance) {
									case 1:
										icon = {
											url: imgUrl1,
										}
										break;
									case 3:
										icon = {
											url: imgUrl2,
										}
										break;
									case 2:
										icon = {
											url: imgUrl3,
										}
										break;
									case 4:
										icon = {
											url: imgUrl4,
										}
										break;
									case 6:
										icon = {
											url: imgUrl6,
										}
										break;
									default:
										console.log("Default")
										icon = {
											url: imgUrl4,
										}
										break;
								}
								google.maps.event.addListener(map, "click", function (event) {
									infowindow.close();
								});

								var marker = new google.maps.Marker({
									position: pos,
									map: map,
									title: position.name,
									snippet: snippet,
									icon: icon
								});
								//var toAddress = marker.getTitle() + marker.getSnippet();
								var toAddress = position.name + "<br>" + snippet;
								// toAddress = toAddress.split("\n")[0];
								//add event listener to handle the various info windows
								contentString = toAddress;
								addMarkerPopup(contentString, pos, marker, map, infowindow);
								markerBounds.extend(pos);

							}

							//get the current location information and add it to the maps
							var currentlocation = localStorageFactory.data.currentlocation;
							if (typeof currentlocation != "undefined" && currentlocation != null) {
								var l_loc = new google.maps.LatLng(parseFloat(currentlocation.lat), parseFloat(currentlocation.long));
								console.log("lloc", l_loc)
								var marker = new google.maps.Marker({
									position: l_loc,
									map: map
								});
								var contentString = "<div>Current Location</div>"
								addMarkerPopup(contentString, l_loc, marker, map, infowindow);
								markerBounds.extend(l_loc);
							}

							map.fitBounds(markerBounds);
						}

						function addMarkerPopup(contentString, location, marker, map, infowindow) {
							google.maps.event.addListener(marker, 'click', function () {
								console.log(contentString);
								infowindow.close(); // Close previously opened infowindow
								infowindow.setContent(contentString);
								infowindow.open(map, marker);
							});
						}

						//method to get directions to provider
						function openDirectionToProvider(lat, long) {
							var currentlocation = localStorageFactory.data.currentlocation;
							if (currentlocation == null || currentlocation.lat == null) {
								console.log("Current location is not available");
								return;
							} else {
								currentlocation.lat = isNaN(currentlocation.lat) ? 0.0 : parseFloat(currentlocation.lat).toFixed(6);
								currentlocation.long = isNaN(currentlocation.long) ? 0.0 : parseFloat(currentlocation.long).toFixed(6);
							}

							var browserOptions = {
								location: "no",
								hardwareback: "no",
								closebuttoncaption: "Done"
							};

							var url = 'http://maps.google.com/maps?saddr=' + currentlocation.lat + ',' + currentlocation.long + '&daddr=' + lat + "," + long + '&dirflg=d';
							$cordovaInAppBrowser.open(url, '_blank', browserOptions)
								.then(function (event) {
									console.log("Success browser opened")
								})
								.catch(function (event) {
									console.log("Error browser not opened")
									console.log(event);
								});
						}

						var showDetailPage = function (id, list) {
							if (typeof list === 'undefined' && !list) {
								list = []
								console.log("bad things happen alot")
							}
							$rootScope.providerDetail = $filter('filter')(list, { "Doctor_Id": id })[0];
							$state.go("tabsController.providerDetails");
						};

						var searchResult = function (Doctor_Id) {
							var message = localStorageFactory.data.priceAProcedureList || [];
							$rootScope.procedurDetail = $filter('filter')(message, { "Doctor_Id": Doctor_Id })[0];
							$state.go("tabsController.PAPsearchDetails");
							//console.log("hello",$state.go("tabsController.PAPsearchDetails"))
						}

						$scope.$on('gmapsIF', function (event, docID) {
							if (localStorageFactory.data.currentTabSelection === "tabsController.priceAProcedure") {
								//console.log("this shouldnt be happening")
								searchResult(docID);
							}
							else if (localStorageFactory.data.currentTabSelection === 'tabsController.findAProvider' && localStorageFactory.data.providerType === "Hospital") {
								showDetailPage(docID, localStorageFactory.data.hospitalList)
							}
							else if (localStorageFactory.data.currentTabSelection === 'tabsController.findAProvider' && localStorageFactory.data.providerType === "Doctor") {
								showDetailPage(docID, localStorageFactory.data.doctorList)
							}
						})
						// tabsController.providerSearchResults
						initializeMap();
					})
				}
			};
		}
	])

	/**
	 * ionToggleText
	 *
	 * @description 
	 * 		Ionic toggle button with Text
	 * 		
	 */
	.directive('ionToggleText', function () {
		var $ = angular.element;

		return {
			restrict: 'A',
			link: function ($scope, $element, $attrs) {

				// Try to figure out what text values we're going to use 

				var textOn = $attrs.ngTrueValue || 'on',
					textOff = $attrs.ngFalseValue || 'off';

				if ($attrs.ionToggleText) {
					var x = $attrs.ionToggleText.split(';');

					if (x.length === 2) {
						textOn = x[0] || textOn;
						textOff = x[1] || textOff;
					}
				}

				textOn = textOn.replace(/\'/g, "");
				textOff = textOff.replace(/\'/g, "");

				// Create the text elements

				var $handleEnglish = $('<div class="handle-text handle-text-true">' + textOn + '</div>'),
					$handleSpanish = $('<div class="handle-text handle-text-false hide">' + textOff + '</div>');

				var checkbox = $element.find('input');

				if (checkbox.length) {
					checkbox = checkbox[0];
					checkbox.addEventListener('change', function (event) {
						if (checkbox.checked) {
							$handleEnglish.removeClass("hide")
							$handleSpanish.addClass("hide")
						} else {
							$handleEnglish.addClass("hide")
							$handleSpanish.removeClass("hide")
						}
					})
				}

				var label = $element.find('label');

				if (label.length) {
					label.addClass('toggle-text');

					// Locate both the track and handle elements

					var $divs = label.find('div'),
						$track, $handle;

					angular.forEach($divs, function (div) {
						var $div = $(div);

						if ($div.hasClass('handle')) {
							$handle = $div;
						} else if ($div.hasClass('track')) {
							$track = $div;
						}
					});

					if ($handle && $track) {

						// Append the text elements

						$handle.append($handleEnglish);
						$handle.append($handleSpanish);

						// Grab the width of the elements

						var wTrue = $handleEnglish[0].offsetWidth,
							wFalse = $handleSpanish[0].offsetWidth;

						// Adjust the offset of the left element

						$handleEnglish.css('left', '-' + (wTrue + 10) + 'px');

						// Ensure that the track element fits the largest text

						var wTrack = Math.max(wTrue, wFalse);
						$track.css('width', (wTrack + 60) + 'px');
					}
				}
			}
		}
	})
