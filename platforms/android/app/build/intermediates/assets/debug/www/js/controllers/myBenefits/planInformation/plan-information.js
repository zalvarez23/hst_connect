'use strict';

angular.module('app.controllers')
.controller('planInfoCtrl', ['$rootScope','$scope','$ionicPopup', '$location', '$ionicHistory', '$translate', '$ionicLoading', 'localStorageFactory', '$state', '$filter', 'planInformationService','$window','$cordovaFileTransfer', '$cordovaInAppBrowser','$timeout',
	function($rootScope,$scope, $ionicPopup, $location, $ionicHistory, $translate, $ionicLoading, localStorageFactory, $state, $filter, planInformationService,$window,$cordovaFileTransfer, $cordovaInAppBrowser,$timeout) {
		//$route.reload();
		// SCOPE DE OCULTAR TODO
		$scope.hidePanel = {
			hidePhysicianServices : false,
			inpatientHospital : false,
			outpatientSurgery : false,
			emergencyRoom : false,
			diagnosticTest : false,
			regularRxCoverage : false,
			MailOrderRxCoverage : false,
			rxCopayTypes : false
		}
		//
		$scope.debug_plan= function(){
			console.log(localStorageFactory)
		}
		$scope.showVIEW_PLAN_SUMMARY = true;
		/*$timeout(function(){
$scope.view = {"ID":1298,"PlanName":"Better Medical Insurance","CalendarOrPlanYear":"Calendar","DeductibleIndividualAmt":"$3,150","DeductibleFamilyAmt":"$6,250","OutOfPocketLimitIndividualAmt":"$6,650","OutOfPocketLimitFamilyAmt":"$13,650","PhysicianServicesPreventiveCopay":"HIDE","PhysicianServicesPreventiveNotes":"","PhysicianServicesPCPOfficeVisitCopay":"HIDE","PhysicianServicesSpecialistCopay":"HIDE","PhysicianServicesSpecialistNotes":"","PhysicianServicesUrgentCareCopay":"HIDE","PhysicianServicesChiropractorCopay":"HIDE","PhysicianServicesChiropractorNotes":"","PhysicianServicesMentalHealthCopay":"HIDE","PhysicianServicesMentalHealthNotes":"","Copay_InpatientHospital":"30 %","Copay_OutpatientHospital":"30 %","Copay_EmergencyRoom":"$250 then 30%<br/>after deductible","Copay_DiagnosticTestsLab":"30 %","DiagnosticTestLabNotes":"","Copay_DiagnosticTestXRay":"HIDE","Copay_DiagnosticTestHighTechImg":"HIDE","DiagnosticTestHighTechImgNotes":"","RX_Copay_RegularRXCoverage_Generic":"HIDE","RX_Copay_RegularRXCoverage_Preferred":"OK","RX_Copay_RegularRXCoverage_Brand":"HIDE","RX_Copay_RegularRXCoverage_Specialty":"HIDE","RX_Copay_MailOrderRXCoverage_Generic":"HIDE","RX_Copay_MailOrderRXCoverage_Preferred":"HIDE","RX_Copay_MailOrderRXCoverage_Brand":"HIDE","ViewPlanSummaryLink":"","DeductableIndividualUsedAmt":"$370","DeductableIndividualMaxAmt":"$3,150","DeductableIndividualUsedPercentage":"12 %","DeductableFamilyUsedAmt":"$1,065","DeductableFamilyMaxAmt":"$6,250","DeductableFamilyUsedPercentage":"17 %","OutOfPocketIndividualUsedAmt":"$500","OutOfPocketIndividualMaxAmt":"$6,650","OutOfPocketIndividualUsedPercentage":"8 %","OutOfPocketFamilyUsedAmt":"$1,500","OutOfPocketFamilyMaxAmt":"$13,650","OutOfPocketFamilyUsedPercentage":"11 %"}
		},1000)
		setTimeout(function(){ 
			
		
			executeHide();
		
		}, 1000);*/

		var executeHide = function(){
			if ($scope.view.PhysicianServicesPreventiveCopay == "HIDE" &&
					$scope.view.PhysicianServicesPCPOfficeVisitCopay == "HIDE" &&
					$scope.view.PhysicianServicesSpecialistCopay == "HIDE" &&
					$scope.view.PhysicianServicesUrgentCareCopay == "HIDE" &&
					$scope.view.PhysicianServicesChiropractorCopay == "HIDE" &&
					$scope.view.PhysicianServicesMentalHealthCopay == "HIDE") {
					$scope.hidePanel.hidePhysicianServices = true;
				};
				// hide Inpatient Hospital			
				if ($scope.view.Copay_InpatientHospital == "HIDE") {
					$scope.hidePanel.inpatientHospital = true;
				}
				// hide Outpatient Surgecy			
				if ($scope.view.Copay_OutpatientHospital == "HIDE") {
					$scope.hidePanel.outpatientSurgery = true;
				}
				// hide Emergency Room			
				if ($scope.view.Copay_EmergencyRoom == "HIDE") {
					$scope.hidePanel.emergencyRoom = true;
				}
				// hide diagnostic Test
				if ($scope.view.Copay_DiagnosticTestsLab == "HIDE" &&
					$scope.view.Copay_DiagnosticTestXRay == "HIDE" &&
					$scope.view.Copay_DiagnosticTestHighTechImg == "HIDE") {
					$scope.hidePanel.diagnosticTest = true;
				};

				
				// hide Regular Rx Coverage
				if($scope.view.RX_Copay_RegularRXCoverage_Generic == "HIDE" &&
				   $scope.view.RX_Copay_RegularRXCoverage_Preferred == "HIDE" &&
				   $scope.view.RX_Copay_RegularRXCoverage_Brand == "HIDE" &&
				   $scope.view.RX_Copay_RegularRXCoverage_Specialty == "HIDE"){
					$scope.hidePanel.regularRxCoverage = true;
				}

				// hide Mail Order Rx Coverage

				if($scope.view.RX_Copay_MailOrderRXCoverage_Generic == "HIDE" &&
				   $scope.view.RX_Copay_MailOrderRXCoverage_Preferred == "HIDE" &&
				   $scope.view.RX_Copay_MailOrderRXCoverage_Brand == "HIDE"){
					$scope.hidePanel.MailOrderRxCoverage = true;
				}

				// HIDE RX COPAY TYPES

				if ($scope.hidePanel.regularRxCoverage == true && $scope.hidePanel.MailOrderRxCoverage == true) {
					$scope.hidePanel.rxCopayTypes = true;
				}

		}
    	$scope.localStorageFactory = localStorageFactory;		
		$scope.view = {}
		var postData = {};
		postData["AppID"] = localStorageFactory.data.AppID;
		postData["MemberId"] = localStorageFactory.data.MemberId;
		postData["GroupId"] = localStorageFactory.data.GroupId;
		postData["BuildVersion"] = localStorage["Version"];
		postData["Device_Type"] = localStorage["DeviceType"];
		postData["DeviceId"] = localStorageFactory.getDeviceID();
		postData["User_id"] = localStorage.getItem('User_Id');
		//variables for the svg
		var dedIndUse, dedFamUse, oopIndUse, oopFamUse;
		var dedIndMax, dedFamMax, oopIndMax, oopFamMax;

		//getUsageService.debugMethod();		
		var planInformation = planInformationService.planInfo;
		console.log(postData["GroupId"]);
		var planUsage = planInformationService.getUsage(postData["AppID"],
		postData["MemberId"],
		postData["GroupId"],
		postData["DeviceId"],
		postData["Device_Type"],
		postData["BuildVersion"],
		postData["User_id"]).success(function(result){			
			console.log("result",result);
			if(result.status.toLowerCase() == "ok" && result.message != null) {
				$scope.texto2 = JSON.stringify(result.message);
				console.log(Object.prototype.toString.call(result.message));
				$scope.showVIEW_PLAN_SUMMARY = true;
				if( Object.prototype.toString.call(result.message) === '[object Object]' ) {
					console.log(result);
					dedIndUse = result.message.DeductableIndividualUsedAmt;
					dedFamUse = result.message.DeductableFamilyUsedAmt;
					//oop usage is questionable
					oopIndUse = result.message.OutOfPocketIndividualUsedAmt;
					oopFamUse = result.message.OutOfPocketFamilyUsedAmt;
					//-------------------------
					dedIndMax = result.message.DeductableIndividualMaxAmt;
					dedFamMax = result.message.DeductableFamilyMaxAmt;
					oopIndMax = result.message.OutOfPocketIndividualMaxAmt;
					oopFamMax = result.message.OutOfPocketFamilyMaxAmt;
					//console.log("hello", oopFamMax)
				}
				else{
					//console.log("ffffff", oopFamMax)					
					dedIndUse = 0;
					dedFamUse = 0;
					oopIndUse = 0;
					oopFamUse = 0;
					dedIndMax = 0;
					dedFamMax = 0;
					oopIndMax = 0;
					oopFamMax = 0;
				}					
			}	
			else{
				//console.log("really fffff")
				var alertPopup = $ionicPopup.alert({
					title: $translate.instant('ERROR'),
					template: result.message
				});
				$scope.showVIEW_PLAN_SUMMARY = false;
				alertPopup.then(function(res) {});
			}			
		}).error(function(err){
			$scope.texto2 = "error pue";
			$scope.showVIEW_PLAN_SUMMARY = false;
			console.error("error:",err)
		})
		
		fetchPlaninformation();
		//ng-bind-html alvarez
		$scope.downloadLink = function () {
			console.log(localStorageFactory.getDeviceType());
			if(localStorageFactory.getDeviceType() == "Android") {

				// Check for STORAGE WRITE PERMISSION
				// Otherwise ask user to grant permission
				
				cordova.plugins.diagnostic.getPermissionsAuthorizationStatus(function(statuses){
					
					for (var permission in statuses) {						
						switch(statuses[permission]) {
							case cordova.plugins.diagnostic.permissionStatus.GRANTED:							
								console.log("Permission granted to use "+permission);
								downloadPlanInformation();
								break;
							case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:							
								console.log("Permission to use "+permission+" has not been requested yet");
								requestWriteStoragePermission();
								break;
							case cordova.plugins.diagnostic.permissionStatus.DENIED:							
								console.log("Permission denied to use "+permission+" - ask again?");
								requestWriteStoragePermission();
								break;
							case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:							
								console.log("Permission permanently denied to use "+permission+" - guess we won't be using it then!");
								requestWriteStoragePermission();
								break;
						}
					}
				}, function(error){
					console.error("The following error occurred: "+error);
				},[
					cordova.plugins.diagnostic.runtimePermission.WRITE_EXTERNAL_STORAGE
				]);

			} else {
				// For iPhone Just open the plan information in Web view
				console.log($scope.view.ViewPlanSummaryLink);
				
				var browserOptions = {
					location : "no",
					hardwareback : "no",
					closebuttoncaption : "Done"
				};
				
				$cordovaInAppBrowser.open($scope.view.ViewPlanSummaryLink, '_blank', browserOptions)
				.then(function(event) {
					console.log("Success browser opened")
				})
				.catch(function(event) {
					console.log("Error browser not opened")
					console.log(event);
				});
			}
		}

		function parsePercent(p) {
			var c = Math.PI * 20 * 2;
			p = ((100 - parseInt(p)) / 100) * c;
			return p;
		}

		function fetchPlaninformation() {
			
			if(localStorageFactory.data.planinfo != null) {
				$scope.view = localStorageFactory.data.planinfo;
				executeHide();
				console.log("Plan information already downloaded");
				return;
			}

			$ionicLoading.show({
				template: '<p>' + $translate.instant("LOADING_PLAN_INFORMATION") +'</p><ion-spinner></ion-spinner>'
			});

			//api Calling
			planInformation.get(postData).$promise.then(function(response) {
				$ionicLoading.hide(); // Hide loading overlay
				console.log("Success");
				
				if(response.status.toLowerCase() == "ok" && response.message != null) {
					localStorageFactory.data.planinfo = response.message;
					$scope.view = localStorageFactory.data.planinfo;
					executeHide();
					var dIndDash = parsePercent($scope.view.DeductableIndividualUsedPercentage);
					$scope.dIndDash = dIndDash+"";
					localStorageFactory.data.dIndDash = dIndDash+'';
					var dFamDash = parsePercent($scope.view.DeductableFamilyUsedPercentage);
					$scope.dFamDash = dFamDash;
					localStorageFactory.data.dFamDash = dFamDash+'';					
				  //console.log("dingling", dIndDash)

					if ($scope.view.OutOfPocketFamilyUsedPercentage == '') {
						var pIndDash = parsePercent(0)
					} else {
						var pIndDash = parsePercent($scope.view.OutOfPocketIndividualUsedPercentage);
					}
					$scope.pIndDash = pIndDash;
					localStorageFactory.data.pIndDash=pIndDash
					if ($scope.view.OutOfPocketFamilyUsedPercentage == '') {
						var pFamDash = parsePercent(0)
					} else {
						var pFamDash = parsePercent($scope.view.OutOfPocketFamilyUsedPercentage);
					}
					$scope.pFamDash = pFamDash;
					localStorageFactory.data.pFamDash=pFamDash;
				} else {
					console.log("Error while downloading Plan information");
					console.log(response.message);
				}

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
			});
		};


		function downloadPlanInformation() {
			ionic.Platform.ready(function(){
					 var url = $scope.view.ViewPlanSummaryLink;
					 var filename = url.split("/").pop();
					 var targetPath = cordova.file.externalRootDirectory + 'Docs/PlanInformation.pdf';
					 console.log('filename'+filename);
					 $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
							$ionicLoading.hide();
							//After download, open the file												
							$cordovaInAppBrowser.open(targetPath, '_system',  {location : "no"})
							.then(function(event) {
								//success callback
							})
							.catch(function(event) {
								//Error callback
							});
							
					 }, function (error) {
							$ionicLoading.hide(); // stop loading
							console.log('error');
					 }, function (progress) {
							//iniate loading			              	
							$scope.downloadProgress = (progress.loaded / progress.total) * 100;
							$ionicLoading.show({
								template: '<p><span ng-bind="\'DOWNLOADING\' | translate"></span>..'+parseInt($scope.downloadProgress)+' %</p> <ion-spinner></ion-spinner>'
							});
							//$ionicLoading.hide(); 
					});
			});
		};

		function requestWriteStoragePermission() {
			cordova.plugins.diagnostic.requestRuntimePermission(function(status){
				switch(status){
					case cordova.plugins.diagnostic.permissionStatus.GRANTED:
						console.log("Permission granted to use the write storage");
						downloadPlanInformation();
						break;
					case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
						console.log("Permission to use the write storage has not been requested yet");
						break;
					case cordova.plugins.diagnostic.permissionStatus.DENIED:
						console.log("Permission denied to use the write storage - ask again?");
						break;
					case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
						console.log("Permission permanently denied to write storage - guess we won't be using it then!");
						break;
				}
			}, function(error){
				console.error("The following error occurred: "+error);
			}, cordova.plugins.diagnostic.runtimePermission.WRITE_EXTERNAL_STORAGE);
		};

	}
])
