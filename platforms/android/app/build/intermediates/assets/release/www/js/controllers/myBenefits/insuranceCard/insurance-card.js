'use strict';

angular.module('app.controllers')

	.controller('insuranceCardCtrl', ['$scope', '$rootScope', '$ionicPopup', '$location', '$ionicHistory', '$translate', '$ionicLoading', 'localStorageFactory', '$state', '$filter', 'insuranceCardService', 'profileService', '$cordovaCamera', 'utilFactory', '$ionicModal',
		function ($scope, $rootScope, $ionicPopup, $location, $ionicHistory, $translate, $ionicLoading, localStorageFactory, $state, $filter, insuranceCardService, profileService, $cordovaCamera, utilFactory, $ionicModal) {

			var postData = {};
			postData["AppID"] = localStorageFactory.data.AppID;
			postData["MemberId"] = localStorageFactory.data.MemberId;
			postData["GroupId"] = localStorageFactory.data.GroupId;
			postData["BuildVersion"] = localStorage["Version"];
			postData["Device_Type"] = localStorage["DeviceType"];
			postData["DeviceId"] = localStorageFactory.getDeviceID();
			$scope.view = {};
			$scope.profileView = {};

			var InsuranceCardInfo = insuranceCardService.InsuranceCardInfo;
			var InsuranceShowRedCard = insuranceCardService.ShowRedCard;
			var myProfile = profileService.profile;

			fetchInsuranceCardInfo();

			function generateEmailContent() {
				$scope.profileView.DOB = $filter('date')($scope.profileView.DOB, "MM/dd/yyyy");
				console.log($scope.view,'alva')
				$scope.cardContent = "General Info:%0D%0ADate of birth:" + ($scope.profileView.DOB ? $scope.profileView.DOB : '-') + "%0D%0AGender: " + ($scope.profileView.Gender ? $scope.profileView.Gender : '-') + "%0D%0AMemberId:" + ($scope.view.InsuranceInfo.MemberId ? $scope.view.InsuranceInfo.MemberId : '-') + "%0D%0AGroup Number:"
					+ ($scope.view.InsuranceInfo.GroupId ? $scope.view.InsuranceInfo.GroupId : '-') + "%0D%0APlan Name:" + ($scope.view.InsuranceInfo.Plan ? $scope.view.InsuranceInfo.Plan : '-') + "%0D%0AMemember Services :" + ($scope.view.InsuranceInfo.MemberServicesPhone ? $scope.view.InsuranceInfo.MemberServicesPhone : '-') + "%0D%0ARx Services:"
					+ ($scope.view.InsuranceInfo.RxCarrier ? $scope.view.InsuranceInfo.RxServicesPhone : '-') + "%0D%0A%0D%0APharmacy Benefits Info: %0D%0ARx Bin:" + ($scope.view.InsuranceInfo.RxBin ? $scope.view.InsuranceInfo.RxBin : '-') + "%0D%0ARx Carrier: " + ($scope.profileView.RxCarrier ? $scope.profileView.RxCarrier : $scope.view.InsuranceInfo.RxCarrier) +
					"%0D%0A%0D%0ACurrent Coverage Info:%0D%0ACoverage Level:" + ($scope.view.InsuranceInfo.CoverageLevel ? $scope.view.InsuranceInfo.CoverageLevel : '-') + "%0D%0ACoverage Period: " + ($scope.view.InsuranceInfo.CoveragePeriod ? $scope.view.InsuranceInfo.CoveragePeriod : '-') + "%0D%0ACoverage status:" + ($scope.view.InsuranceInfo.CoverageStatus ? $scope.view.InsuranceInfo.CoverageStatus : '-');

				for (var i = 0; i < $scope.view.SubmemberList.length; i++) {
					$scope.cardContent += "%0D%0A%0D%0AMember and Current Benefits: %0D%0ARelationshipName: " + $scope.view.SubmemberList[i].RelationshipName + "%0D%0AName: " + $scope.view.SubmemberList[i].SubMemberFirstName + " " + $scope.view.SubmemberList[i].SubMemberLastName + "%0D%0ADate of Birth: " + $filter('date')($scope.view.SubmemberList[i].SubMemberDOB, "MM/dd/yyyy") + '%0D%0ABenefits: ' + $scope.view.SubmemberList[i].Benefits + "%0D%0ARx";
				};

			}
			$ionicModal.fromTemplateUrl('my-modal-card.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.modal = modal;
			});
			$scope.openModal = function () {
				$scope.modal.show();
			};
			$scope.closeModal = function () {
				$scope.modal.hide();
			};

			function fetchInsuranceCardInfo() {

				if (localStorageFactory.data.insuranceCard != null) {
					$scope.view = localStorageFactory.data.insuranceCard;
					console.log('alva', $scope.view)
					console.log("Insurance card info already downloaded");
					return;
				}

				$ionicLoading.show({
					template: '<p>' + $translate.instant("LOADING_INSURANCE_CARD_INFO") + '</p><ion-spinner></ion-spinner>'
				});

				//api Calling
				InsuranceCardInfo.get(postData).$promise.then(function (response) {
					$ionicLoading.hide(); // Hide loading overlay
					console.log("Success : ");

					if (response.status.toLowerCase() == "ok" && response.message != null) {
						localStorageFactory.data.insuranceCard = response.message;
						$scope.view = localStorageFactory.data.insuranceCard;
					} else {
						console.log("Error while downloading Insurance card Info");
						console.log(response.message);
					}
					generateEmailContent();


				}, function (error) {
					$ionicLoading.hide(); // Hide loading overlay
					console.log("Error : ");
					console.log(error);

					// Show network Error
					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('NO_CONN_ERR')
					});
					alertPopup.then(function (res) {
						console.log('No internet connection Error');
					});
				});
			};

			// Download User Profile
			if (localStorageFactory.data.profile != null) {
				$scope.profileView = localStorageFactory.data.profile;
				if ($scope.profileView.Gender.toLowerCase() == 'm') {
					$scope.Gender = "Male";
				} else {
					$scope.Gender = "Female";
				}
				console.log("Profile info already downloaded");
			} else {
				postData["User_id"] = localStorage.getItem('User_Id');
				myProfile.getUserProfile(postData).$promise.then(function (response) {

					if (response.status.toLowerCase() == "ok" && response.message != null) {
						localStorageFactory.data.profile = response.message;
						$scope.profileView = localStorageFactory.data.profile;
						if ($scope.profileView.Gender.toLowerCase() == 'm') {
							$scope.Gender = "Male";
						} else {
							$scope.Gender = "Female";
						}
					} else {
						console.log("Error while downloading Profile Info");
						console.log(response.message);
					}

				}, function (error) {
					console.log("Error while downloading Profile Info");
					console.log(error);
				});
			}

			// Camera api calling
			$scope.getPicture = function () {
				if (typeof Camera == "undefined") {
					console.log("Camera is not available");
					return;
				}

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
					var image = document.getElementById('photo');
					image.src = "data:image/png;base64," + imageData;
				}, function (err) {
					// error
				});
			}
			$scope.imgCard = "";
			$scope.showRedCard = function () {
				$scope.openModal();
				/*var postDataCard = {};			
				postDataCard["memberId"] = localStorageFactory.data.MemberId;			
				//postDataCard["memberId"] = "47200000125";			
				$scope.imgCard = "https://mobileclient1.hstechnology.com/api/HSTAdmin/GetRedCardMemberIDCard?memberId=" + postDataCard["memberId"];
				$ionicLoading.show({
					template: '<p>' + $translate.instant("LOADING_INSURANCE_CARD_INFO") +'</p><ion-spinner></ion-spinner>'
				});
	
				//api Calling
				$scope.openModal();
				InsuranceShowRedCard.get(postDataCard).$promise.then(function(response) {				
					$ionicLoading.hide(); // Hide loading overlay
					console.log("Success : ");				
					
					if(response.status.toLowerCase() == "ok" && response.message != null) {
						//localStorageFactory.data.insuranceCard = response.message;
						//$scope.view = localStorageFactory.data.insuranceCard;
					} else {
						console.log("Error while downloading Insurance card Info");
						console.log(response.message);
					}
					generateEmailContent();
					
	
				}, function(error) {								
					$ionicLoading.hide(); // Hide loading overlay
					console.log("Error : ");
					console.log(error);
	
					// Show network Error
					var alertPopup = $ionicPopup.alert({
						title: $translate.instant('ERROR'),
						template: $translate.instant('NO_CONN_ERR')
					});
					alertPopup.then(function(res) {					
						console.log('No internet connection Error');
					});
				});*/
			};
			$scope.showCard = false;
			var validarCard = function () {
				$scope.loadedImg = true;
				var postDataCard = {};
				postDataCard["memberId"] = localStorageFactory.data.MemberId;
				//postDataCard["memberId"] = "47200000125";			
				$scope.imgCard = "https://mobileclient1.hstechnology.com/api/HSTAdmin/GetRedCardMemberIDCard?memberId=" + postDataCard["memberId"];
			}
			validarCard();
			$scope.onImgLoad = function (event) {
				if (event.type == 'load') {
					// true
					$scope.showCard = true;
				} else {
					//false
					$scope.showCard = false;
				}
				$scope.loadedImg = false;
			}
		}
	])
