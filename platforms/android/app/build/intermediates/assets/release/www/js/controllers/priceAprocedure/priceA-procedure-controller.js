'use strict';

angular.module('app.controllers')

	.controller('priceProcedureCtrl', ['$rootScope', '$scope', '$ionicPopup', '$location',
		'$ionicHistory', '$translate', '$ionicLoading', 'localStorageFactory', '$state',
		'$filter', 'findAProviderService', 'locationService', '$ionicModal', '$timeout', '$ionicTabsDelegate',
		function ($rootScope, $scope, $ionicPopup, $location, $ionicHistory, $translate,
			$ionicLoading, localStorageFactory, $state, $filter, findAProviderService, locationService, $ionicModal, $timeout, $ionicTabsDelegate) {

			$ionicTabsDelegate.showBar(true);


			$scope.listBody = [];
			//$scope.listBody = JSON.parse('[{"ID":"4","ProcIdentifier":"236","Description":"Coronary Bypass (CABG) w/o Cardiac Catheterization","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Chest"},{"ID":"13","ProcIdentifier":"470","Description":"Knee Replacement","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Leg"},{"ID":"14","ProcIdentifier":"470","Description":"Hip Replacement","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"28","ProcIdentifier":"42820","Description":"Tonsillectomy and adenoidectomy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Head"},{"ID":"33","ProcIdentifier":"66984","Description":"Cataract surgery with IOL implant","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Head"},{"ID":"39","ProcIdentifier":"70551","Description":"MRI, head or brain, without contrast ","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Head"},{"ID":"40","ProcIdentifier":"70553","Description":"MRI, head or brain, without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Head"},{"ID":"44","ProcIdentifier":"70450","Description":"CT scan, head or brain, without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Head"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Head"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Head"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Head"},{"ID":"9","ProcIdentifier":"460","Description":"Spinal Fusion (Posterior)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Neck"},{"ID":"15","ProcIdentifier":"473","Description":"Spinal Fusion (Anterior)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Neck"},{"ID":"35","ProcIdentifier":"72148","Description":"MRI spinal; lumbar; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Neck"},{"ID":"36","ProcIdentifier":"72141","Description":"MRI Neck or Spine without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Neck"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Neck"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Neck"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Neck"},{"ID":"27","ProcIdentifier":"29827","Description":"Arthroscopy, shoulder, surgical; with rotator cuff repair","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Arm"},{"ID":"37","ProcIdentifier":"73221","Description":"MRI upper extremity; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Arm"},{"ID":"38","ProcIdentifier":"73222","Description":"MRI upper extremity; with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Arm"},{"ID":"41","ProcIdentifier":"73030","Description":"Radiologic examination shoulder; 2 views  (X-Ray, shoulder, two views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Arm"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Arm"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Arm"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Arm"},{"ID":"9","ProcIdentifier":"460","Description":"Spinal Fusion (Posterior)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Back"},{"ID":"15","ProcIdentifier":"473","Description":"Spinal Fusion (Anterior)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Back"},{"ID":"35","ProcIdentifier":"72148","Description":"MRI spinal; lumbar; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Back"},{"ID":"36","ProcIdentifier":"72141","Description":"MRI Neck or Spine without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Back"},{"ID":"47","ProcIdentifier":"72131","Description":"CT lumbar spine; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Back"},{"ID":"48","ProcIdentifier":"64483","Description":"Injection, anesthetic or steroid, transforaminal epidural, lumbar","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Back"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Back"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Back"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Back"},{"ID":"5","ProcIdentifier":"247","Description":"Cardiac Angioplasty - w/ Drug Eluting Stent","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Chest"},{"ID":"51","ProcIdentifier":"71020","Description":"X-Ray, chest, two views","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Chest"},{"ID":"52","ProcIdentifier":"71010","Description":"X-Ray, chest, one view","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Chest"},{"ID":"55","ProcIdentifier":"71250","Description":"CT Thorax without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Chest"},{"ID":"56","ProcIdentifier":"71260","Description":"CT Thorax with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Chest"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Chest"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Chest"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Chest"},{"ID":"17","ProcIdentifier":"621","Description":"Laparoscopic Gastric Bypass","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"29","ProcIdentifier":"43239","Description":"Esophagogastroduodenoscopy with biopsy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"30","ProcIdentifier":"45378","Description":"Diagnostic colonoscopy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"31","ProcIdentifier":"45385","Description":"Colonoscopy with lesion removal","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"32","ProcIdentifier":"45380","Description":"Colonoscopy and biopsy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"45","ProcIdentifier":"74177","Description":"CT abdomen and pelvis; with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"46","ProcIdentifier":"74176","Description":"CT abdomen and pelvis; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"49","ProcIdentifier":"76700","Description":"Ultrasound, abdomen, complete","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"50","ProcIdentifier":"76805","Description":"Ultrasound, OB, 14 weeks or more, transabdominal","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"54","ProcIdentifier":"74160","Description":"CT scan, abdomen, with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Abdomen"},{"ID":"21","ProcIdentifier":"743","Description":"Hysterectomy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"22","ProcIdentifier":"766","Description":"Cesarean Section","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"24","ProcIdentifier":"795","Description":"Normal Newborn (Baby)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"25","ProcIdentifier":"775","Description":"Normal Vaginal Delivery (Mother)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"30","ProcIdentifier":"45378","Description":"Diagnostic colonoscopy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"31","ProcIdentifier":"45385","Description":"Colonoscopy with lesion removal","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"32","ProcIdentifier":"45380","Description":"Colonoscopy and biopsy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"45","ProcIdentifier":"74177","Description":"CT abdomen and pelvis; with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"46","ProcIdentifier":"74176","Description":"CT abdomen and pelvis; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Pelvis"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Buttock"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Buttock"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Buttock"},{"ID":"42","ProcIdentifier":"73610","Description":"Radiologic examination ankle; 3 views (X-Ray, ankle, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Leg"},{"ID":"43","ProcIdentifier":"73562","Description":"Radiologic examination knee; 3 views (X-Ray, knee, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Leg"},{"ID":"57","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without Contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Leg"},{"ID":"58","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Leg"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Leg"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Leg"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Leg"},{"ID":"27","ProcIdentifier":"29827","Description":"Arthroscopy, shoulder, surgical; with rotator cuff repair","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Hand"},{"ID":"27","ProcIdentifier":"29827","Description":"Arthroscopy, shoulder, surgical; with rotator cuff repair","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shoulders"},{"ID":"27","ProcIdentifier":"29827","Description":"Arthroscopy, shoulder, surgical; with rotator cuff repair","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Wrist"},{"ID":"37","ProcIdentifier":"73221","Description":"MRI upper extremity; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Hand"},{"ID":"37","ProcIdentifier":"73221","Description":"MRI upper extremity; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shoulders"},{"ID":"37","ProcIdentifier":"73221","Description":"MRI upper extremity; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Wrist"},{"ID":"38","ProcIdentifier":"73222","Description":"MRI upper extremity; with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Hand"},{"ID":"38","ProcIdentifier":"73222","Description":"MRI upper extremity; with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shoulders"},{"ID":"38","ProcIdentifier":"73222","Description":"MRI upper extremity; with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Wrist"},{"ID":"41","ProcIdentifier":"73030","Description":"Radiologic examination shoulder; 2 views  (X-Ray, shoulder, two views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Hand"},{"ID":"41","ProcIdentifier":"73030","Description":"Radiologic examination shoulder; 2 views  (X-Ray, shoulder, two views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shoulders"},{"ID":"41","ProcIdentifier":"73030","Description":"Radiologic examination shoulder; 2 views  (X-Ray, shoulder, two views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Wrist"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Hand"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shoulders"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Wrist"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Hand"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shoulders"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Wrist"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Hand"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shoulders"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Wrist"},{"ID":"13","ProcIdentifier":"470","Description":"Knee Replacement","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Knee"},{"ID":"13","ProcIdentifier":"470","Description":"Knee Replacement","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shin"},{"ID":"13","ProcIdentifier":"470","Description":"Knee Replacement","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ankle"},{"ID":"13","ProcIdentifier":"470","Description":"Knee Replacement","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Foot"},{"ID":"42","ProcIdentifier":"73610","Description":"Radiologic examination ankle; 3 views (X-Ray, ankle, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Knee"},{"ID":"42","ProcIdentifier":"73610","Description":"Radiologic examination ankle; 3 views (X-Ray, ankle, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shin"},{"ID":"42","ProcIdentifier":"73610","Description":"Radiologic examination ankle; 3 views (X-Ray, ankle, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ankle"},{"ID":"42","ProcIdentifier":"73610","Description":"Radiologic examination ankle; 3 views (X-Ray, ankle, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Foot"},{"ID":"43","ProcIdentifier":"73562","Description":"Radiologic examination knee; 3 views (X-Ray, knee, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Knee"},{"ID":"43","ProcIdentifier":"73562","Description":"Radiologic examination knee; 3 views (X-Ray, knee, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shin"},{"ID":"43","ProcIdentifier":"73562","Description":"Radiologic examination knee; 3 views (X-Ray, knee, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ankle"},{"ID":"43","ProcIdentifier":"73562","Description":"Radiologic examination knee; 3 views (X-Ray, knee, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Foot"},{"ID":"57","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without Contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Knee"},{"ID":"57","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without Contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shin"},{"ID":"57","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without Contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ankle"},{"ID":"57","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without Contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Foot"},{"ID":"58","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Knee"},{"ID":"58","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shin"},{"ID":"58","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ankle"},{"ID":"58","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Foot"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Knee"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shin"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ankle"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Foot"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Knee"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shin"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ankle"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Foot"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Knee"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Shin"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ankle"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Foot"},{"ID":"28","ProcIdentifier":"42820","Description":"Tonsillectomy and adenoidectomy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ear"},{"ID":"33","ProcIdentifier":"66984","Description":"Cataract surgery with IOL implant","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ear"},{"ID":"39","ProcIdentifier":"70551","Description":"MRI, head or brain, without contrast ","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ear"},{"ID":"40","ProcIdentifier":"70553","Description":"MRI, head or brain, without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ear"},{"ID":"44","ProcIdentifier":"70450","Description":"CT scan, head or brain, without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ear"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ear"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ear"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Ear"},{"ID":"14","ProcIdentifier":"470","Description":"Hip Replacement","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"21","ProcIdentifier":"743","Description":"Hysterectomy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"22","ProcIdentifier":"766","Description":"Cesarean Section","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"24","ProcIdentifier":"795","Description":"Normal Newborn (Baby)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"25","ProcIdentifier":"775","Description":"Normal Vaginal Delivery (Mother)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"30","ProcIdentifier":"45378","Description":"Diagnostic colonoscopy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"31","ProcIdentifier":"45385","Description":"Colonoscopy with lesion removal","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"32","ProcIdentifier":"45380","Description":"Colonoscopy and biopsy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"45","ProcIdentifier":"74177","Description":"CT abdomen and pelvis; with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"46","ProcIdentifier":"74176","Description":"CT abdomen and pelvis; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Groin"},{"ID":"28","ProcIdentifier":"42820","Description":"Tonsillectomy and adenoidectomy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Eye"},{"ID":"28","ProcIdentifier":"42820","Description":"Tonsillectomy and adenoidectomy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Mouth"},{"ID":"33","ProcIdentifier":"66984","Description":"Cataract surgery with IOL implant","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Eye"},{"ID":"33","ProcIdentifier":"66984","Description":"Cataract surgery with IOL implant","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Mouth"},{"ID":"39","ProcIdentifier":"70551","Description":"MRI, head or brain, without contrast ","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Eye"},{"ID":"39","ProcIdentifier":"70551","Description":"MRI, head or brain, without contrast ","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Mouth"},{"ID":"40","ProcIdentifier":"70553","Description":"MRI, head or brain, without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Eye"},{"ID":"40","ProcIdentifier":"70553","Description":"MRI, head or brain, without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Mouth"},{"ID":"44","ProcIdentifier":"70450","Description":"CT scan, head or brain, without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Eye"},{"ID":"44","ProcIdentifier":"70450","Description":"CT scan, head or brain, without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Mouth"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Eye"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Mouth"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Eye"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Mouth"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Eye"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Mouth"},{"ID":"13","ProcIdentifier":"470","Description":"Knee Replacement","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Heel"},{"ID":"42","ProcIdentifier":"73610","Description":"Radiologic examination ankle; 3 views (X-Ray, ankle, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Heel"},{"ID":"43","ProcIdentifier":"73562","Description":"Radiologic examination knee; 3 views (X-Ray, knee, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Heel"},{"ID":"57","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without Contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Heel"},{"ID":"58","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Heel"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Heel"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Heel"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Heel"},{"ID":"27","ProcIdentifier":"29827","Description":"Arthroscopy, shoulder, surgical; with rotator cuff repair","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Fingers"},{"ID":"37","ProcIdentifier":"73221","Description":"MRI upper extremity; without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Fingers"},{"ID":"38","ProcIdentifier":"73222","Description":"MRI upper extremity; with contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Fingers"},{"ID":"41","ProcIdentifier":"73030","Description":"Radiologic examination shoulder; 2 views  (X-Ray, shoulder, two views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Fingers"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Fingers"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Fingers"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Fingers"},{"ID":"28","ProcIdentifier":"42820","Description":"Tonsillectomy and adenoidectomy","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Nose"},{"ID":"33","ProcIdentifier":"66984","Description":"Cataract surgery with IOL implant","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Nose"},{"ID":"39","ProcIdentifier":"70551","Description":"MRI, head or brain, without contrast ","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Nose"},{"ID":"40","ProcIdentifier":"70553","Description":"MRI, head or brain, without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Nose"},{"ID":"44","ProcIdentifier":"70450","Description":"CT scan, head or brain, without contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Nose"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Nose"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Nose"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Nose"},{"ID":"13","ProcIdentifier":"470","Description":"Knee Replacement","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Toes"},{"ID":"42","ProcIdentifier":"73610","Description":"Radiologic examination ankle; 3 views (X-Ray, ankle, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Toes"},{"ID":"43","ProcIdentifier":"73562","Description":"Radiologic examination knee; 3 views (X-Ray, knee, three views)","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Toes"},{"ID":"57","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without Contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Toes"},{"ID":"58","ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without contrast, followed by contrast","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Toes"},{"ID":"59","ProcIdentifier":"97001","Description":"Physical therapy, evaluation","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Toes"},{"ID":"60","ProcIdentifier":"97116","Description":"Physical therapy, gait training","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Toes"},{"ID":"61","ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise","Gender":"BOTH","Front_Back":"BOTH","BodyPartName":"Toes"}]');
			$scope.showFrontal = true;
			$scope.groupCategories = [];

			// FUNCIONES BODY

			$ionicModal.fromTemplateUrl('my-modal-body.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});
			$scope.openModal = function () {
				$scope.modal.show();
			};
			$scope.closeModal = function () {
				$scope.modal.hide();
			};

			$timeout(function () {
				//$scope.openModal();
			}, 100)

			$scope.changeBody = function () {
				$scope.showFrontal = $scope.showFrontal == true ? false : true;
			}


			$scope.texto = "";


			console.log("pap controller");
			// Asking to get current location
			locationService.checkAndGetLocation();
			var WITHIN = $translate.instant('WITHIN');
			var MILES = $translate.instant('MILES');
			$scope.distanceList = ["5", "10", "15", "25", "50"];
			$scope.distanceListAux = [
				{ id: 1, distance: "5", description: WITHIN + ' ' + "5" + ' ' + MILES },
				{ id: 2, distance: "10", description: WITHIN + ' ' + "10" + ' ' + MILES },
				{ id: 3, distance: "15", description: WITHIN + ' ' + "15" + ' ' + MILES },
				{ id: 4, distance: "25", description: WITHIN + ' ' + "25" + ' ' + MILES },
				{ id: 5, distance: "50", description: WITHIN + ' ' + "50" + ' ' + MILES },
			]
			$scope.loc_choice = "currentlocation";
			$scope.procedureList = [];
			var procedures = findAProviderService.proceduresByLang;
			var proceduresBody = findAProviderService.proceduresByLangBody;
			var pruceduresInfoByDes = findAProviderService.proceduresByDescription;
			delete localStorageFactory.data['inputAddress'];

			$scope.$watch(function () {
				//console.log("watch procedure list");
				//console.log("procedure list", localStorageFactory.data.procedureList);
				return localStorageFactory.data.procedureList;
			}, function (NewValue, OldValue) {
				//console.log("Procedure list updated");
				$scope.procedureList = localStorageFactory.data.procedureList || [];
			}, true);

			//Get Procedure List
			if (localStorageFactory.data.procedureList != null && localStorageFactory.data.procedureList.length > 0) {
				$scope.procedureList = localStorageFactory.data.procedureList || [];
			} else {
				$ionicLoading.show({
					template: '<p>Loading Procedure list...</p><ion-spinner></ion-spinner>'
				});
				var postData = {};
				postData["language"] = localStorageFactory.data.AppLanguageParam;
				procedures.get(postData).$promise.then(function (response) {
					$ionicLoading.hide();
					console.log("procedure list:", response);
					if (response.status.toLowerCase() == "ok" && response.message != null) {
						if (Object.prototype.toString.call(response.message) != '[object Array]') {
							response.message = [];
						}
						localStorageFactory.data.procedureList = response.message;
						$scope.procedureList = localStorageFactory.data.procedureList;
					}
				}, function (error) {
					$ionicLoading.hide();
				});
			}

			var alertPopResult = function (title, template, css, $scope) {

				var alertPopup = $ionicPopup.alert({
					title: title,
					template: template,
					cssClass: css,
					scope: $scope,
					buttons: [
						{
							text: $translate.instant('SELECT'),
							onTap: function (e) {
								alertPopup.close();
								alertPop.close();
								$scope.closeModal();
							}
						},

						{
							text: $translate.instant('CANCEL'),
							onTap: function (e) {
								alertPopup.close();
							}
						}
					]

				});
				return alertPopup;
			}
			var alertPop;
			$scope.nameProc = "Select . . ";
			setTimeout(function () {

				//$scope.procedureList = [{"ID":27,"ProcIdentifier":"29827","Description":"Arthroscopy, shoulder, surgical; with rotator cuff repair"},{"ID":5,"ProcIdentifier":"247","Description":"Cardiac Angioplasty - w/ Drug Eluting Stent"},{"ID":33,"ProcIdentifier":"66984","Description":"Cataract surgery with IOL implant"},{"ID":22,"ProcIdentifier":"766","Description":"Cesarean Section"},{"ID":32,"ProcIdentifier":"45380","Description":"Colonoscopy and biopsy"},{"ID":31,"ProcIdentifier":"45385","Description":"Colonoscopy with lesion removal"},{"ID":4,"ProcIdentifier":"236","Description":"Coronary Bypass (CABG) w/o Cardiac Catheterization"},{"ID":45,"ProcIdentifier":"74177","Description":"CT abdomen and pelvis; with contrast"},{"ID":46,"ProcIdentifier":"74176","Description":"CT abdomen and pelvis; without contrast"},{"ID":47,"ProcIdentifier":"72131","Description":"CT lumbar spine; without contrast"},{"ID":54,"ProcIdentifier":"74160","Description":"CT scan, abdomen, with contrast"},{"ID":44,"ProcIdentifier":"70450","Description":"CT scan, head or brain, without contrast"},{"ID":56,"ProcIdentifier":"71260","Description":"CT Thorax with contrast"},{"ID":55,"ProcIdentifier":"71250","Description":"CT Thorax without contrast"},{"ID":30,"ProcIdentifier":"45378","Description":"Diagnostic colonoscopy"},{"ID":29,"ProcIdentifier":"43239","Description":"Esophagogastroduodenoscopy with biopsy"},{"ID":14,"ProcIdentifier":"470","Description":"Hip Replacement"},{"ID":21,"ProcIdentifier":"743","Description":"Hysterectomy"},{"ID":48,"ProcIdentifier":"64483","Description":"Injection, anesthetic or steroid, transforaminal epidural, lumbar"},{"ID":13,"ProcIdentifier":"470","Description":"Knee Replacement"},{"ID":17,"ProcIdentifier":"621","Description":"Laparoscopic Gastric Bypass"},{"ID":36,"ProcIdentifier":"72141","Description":"MRI Neck or Spine without contrast"},{"ID":35,"ProcIdentifier":"72148","Description":"MRI spinal; lumbar; without contrast"},{"ID":38,"ProcIdentifier":"73222","Description":"MRI upper extremity; with contrast"},{"ID":37,"ProcIdentifier":"73221","Description":"MRI upper extremity; without contrast"},{"ID":57,"ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without Contrast"},{"ID":58,"ProcIdentifier":"73721","Description":"MRI, Any Lower Extremity without contrast, followed by contrast"},{"ID":39,"ProcIdentifier":"70551","Description":"MRI, head or brain, without contrast "},{"ID":40,"ProcIdentifier":"70553","Description":"MRI, head or brain, without contrast, followed by contrast"},{"ID":24,"ProcIdentifier":"795","Description":"Normal Newborn (Baby)"},{"ID":25,"ProcIdentifier":"775","Description":"Normal Vaginal Delivery (Mother)"},{"ID":59,"ProcIdentifier":"97001","Description":"Physical therapy, evaluation"},{"ID":60,"ProcIdentifier":"97116","Description":"Physical therapy, gait training"},{"ID":61,"ProcIdentifier":"97110","Description":"Physical therapy, therapeutic exercise"},{"ID":42,"ProcIdentifier":"73610","Description":"Radiologic examination ankle; 3 views (X-Ray, ankle, three views)"},{"ID":43,"ProcIdentifier":"73562","Description":"Radiologic examination knee; 3 views (X-Ray, knee, three views)"},{"ID":41,"ProcIdentifier":"73030","Description":"Radiologic examination shoulder; 2 views  (X-Ray, shoulder, two views)"},{"ID":15,"ProcIdentifier":"473","Description":"Spinal Fusion (Anterior)"},{"ID":9,"ProcIdentifier":"460","Description":"Spinal Fusion (Posterior)"},{"ID":28,"ProcIdentifier":"42820","Description":"Tonsillectomy and adenoidectomy"},{"ID":49,"ProcIdentifier":"76700","Description":"Ultrasound, abdomen, complete"},{"ID":50,"ProcIdentifier":"76805","Description":"Ultrasound, OB, 14 weeks or more, transabdominal"},{"ID":52,"ProcIdentifier":"71010","Description":"X-Ray, chest, one view"},{"ID":51,"ProcIdentifier":"71020","Description":"X-Ray, chest, two views"}]
			}, 2000);

			$scope.modalSelect = function () {
				var cabecera, template;
				var cabecera = $translate.instant('PROCEDURE');
				var txtSearch = $translate.instant('SEARCH');
				$scope.showok = true;
				if ($scope.procedure != undefined) {
					$scope.procedureList.forEach(function (item, index) {
						if ($scope.procedure.ProcIdentifier == item.ProcIdentifier) {
							item['colorSelect'] = "colorSelect";
							item['checked'] = true;
						} else {
							item['colorSelect'] = "";
							item['checked'] = false;
						}
					})
					console.log('listo para cambiar color');
				}
				template = '<div class="modalStyle"><div class="searchInput">' +
					'<label class="item item-input"><i class="icon ion-search placeholder-icon"></i>' +
					'<input type="text" placeholder="' + txtSearch + '" ng-model="search"> </label></div>' +
					'<div class="card-panel grey lighten-5 z-depth-1 cardP " ng-repeat="item in procedureList | filter : search">' +
					'<div class="row valign-wrapper contentPlantilla {{item.colorSelect}}" ng-click="selectId(item);">' +
					'<div class="col col-90"><span class="black-text">{{item.Description}}</span></div>' +
					'<div class="col"><input type="radio" name="gender" ng-checked="item.checked"></div></div></div></div>';

				alertPop = alertPopResult(cabecera, template, 'modalStyleSelect', $scope);
			}
			$scope.modalSelectBody = function () {
				var cabecera, template;
				var cabecera = $translate.instant('PROCEDURE');
				var txtSearch = $translate.instant('SEARCH');
				$scope.showok = true;
				if ($scope.procedure != undefined) {
					$scope.listBodyAux.forEach(function (item, index) {
						if ($scope.procedure.ProcIdentifier == item.ProcIdentifier) {
							item['colorSelect'] = "colorSelect";
							item['checked'] = true;
						} else {
							item['colorSelect'] = "";
							item['checked'] = false;
						}
					})
					console.log('listo para cambiar color');
				}
				template = '<div class="modalStyle"><div class="searchInput">' +
					'<label class="item item-input"><i class="icon ion-search placeholder-icon"></i>' +
					'<input type="text" placeholder="' + txtSearch + '" ng-model="search"> </label></div>' +
					'<div class="card-panel grey lighten-5 z-depth-1 cardP " ng-repeat="item in listBodyAux | filter : search">' +
					'<div class="row valign-wrapper contentPlantilla {{item.colorSelect}}" ng-click="selectIdBody(item);">' +
					'<div class="col col-90"><span class="black-text">{{item.Description}}</span></div>' +
					'<div class="col"><input type="radio" name="gender" ng-checked="item.checked"></div></div></div></div>';

				alertPop = alertPopResult(cabecera, template, 'modalStyleSelect2', $scope);
			}

			$scope.modalMillas = function () {
				var cabecera, template;
				var txtSearch = $translate.instant('SEARCH');
				$scope.distanceListAux.forEach(function (item, index) {
					if ($scope.aroundDistance == item.distance) {
						item['colorSelect'] = "colorSelect";
						item['checked'] = true;
					} else {
						item['colorSelect'] = "";
						item['checked'] = false;
					}
				})
				template = '<div class="modalStyle"><div class="searchInput" style="display:none">' +
					'<label class="item item-input"><i class="icon ion-search placeholder-icon"></i>' +
					'<input type="text" placeholder="' + txtSearch + '" ng-model="search"> </label></div></br>' +
					'<div class="card-panel grey lighten-5 z-depth-1 cardP " ng-repeat="item in distanceListAux | filter :search">' +
					'<div class="row valign-wrapper contentPlantilla {{item.colorSelect}}" ng-click="selectIdMillas(item);">' +
					'<div class="col col-90"><span class="black-text">{{item.description}}</span></div>' +
					'<div class="col"><input type="radio" name="gender"  ng-checked="item.checked"></div></div></div></div>';

				alertPop = alertPopResult(cabecera, template, 'modalStyleSelectMillas', $scope);
			}
			$scope.selectIdMillas = function (item) {
				$scope.aroundDistance = item.distance;
				alertPop.close();
			}

			$scope.selectId = function (item) {
				$scope.procedure = item;
				$scope.nameProc = item.Description;
				alertPop.close();
			}
			$scope.selectIdBody = function (item) {
				$scope.procedure = item;
				$scope.nameProc = item.Description;
				$scope.listBodyAux.forEach(function (item, index) {
					if ($scope.procedure.ProcIdentifier == item.ProcIdentifier) {
						item['colorSelect'] = "colorSelect";
						item['checked'] = true;
					} else {
						item['colorSelect'] = "";
						item['checked'] = false;
					}
				})

			}
			// Service
			var authorizedProviders = findAProviderService.authorizedProviders;
			console.log("omg", authorizedProviders);

			var postData = {};
			postData["AppID"] = localStorageFactory.data.AppID;
			postData["MemberId"] = localStorageFactory.data.MemberId;
			postData["GroupId"] = localStorageFactory.data.GroupId;
			postData["CategoryId"] = 1;
			postData["ProcedureIndicator"] = ($scope.procedure && $scope.procedure.ProcIdentifier) ? $scope.procedure.ProcIdentifier : "";
			postData["BuildVersion"] = localStorage["Version"];
			postData["Device_Type"] = localStorage["DeviceType"];
			postData["DeviceId"] = localStorageFactory.getDeviceID();

			$scope.searchProcedure = function () {
				//test
				// callSearchAPI();
				// return;

				var location = {};
				var loc_choice = $scope.loc_choice;
				postData["distance"] = $scope.aroundDistance;
				postData["ProcedureIndicator"] = $scope.procedure.ProcIdentifier;
				localStorage.setItem('ProcIdentifier', $scope.procedure.ProcIdentifier)
				localStorageFactory.data.selectedProcedure = $scope.procedure.Description ? $scope.procedure.Description : "";
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
						location = null;
						break;

					case "maplocation":
						if (localStorageFactory.data.selectedlocation) {
							location["lat"] = localStorageFactory.data.selectedlocation.lat;
							location["long"] = localStorageFactory.data.selectedlocation.long;
						}
						break;
				}

				$ionicLoading.show({
					template: '<p>' + $translate.instant('SEARCHING_PROCEDURES') + '</p><ion-spinner></ion-spinner>'
				});
				if (location == null) {
					// Geocode the address and call the api
					$scope.inputaddress = $scope.inputaddress || "";
					localStorageFactory.geocodeAddress($scope.inputaddress, function (pos) {
						// Get Lat long from corresponding object
						console.log("Geocoded location");
						console.log(pos);
						if (typeof pos["lat"] == "undefined") {
							$ionicLoading.hide(); // Hide loading overlay
							AlertUserAddressIncorrect();
							return;
						}
						postData["Latitude"] = pos["lat"];
						postData["Longitude"] = pos['lng'];

						callSearchAPI();
					});
				} else {
					// Get Lat long from corresponding object
					postData["Latitude"] = location["lat"];
					postData["Longitude"] = location["long"];
					callSearchAPI();
				}
			};


			function callSearchAPI() {

				//test
				// postData["AppID"]='8B2A6BCD-7E8A-4D2B-AAB0-88EFAE074FF3'
				// postData["MemberId"]='kevinsalazar'
				// postData["GroupId"]=22
				// postData["CategoryId"]=1
				// postData["ProcedureIndicator"]= 236
				// postData["BuildVersion"]='3.5.0'
				// postData["Device_Type"]='android'
				// postData["DeviceId"]='8fb51648e636d0e4'
				// postData["distance"]=50
				// postData["Latitude"]=36.778261
				// postData["Longitude"]=-119.41793240000001
			//
				console.log("callsearchapi")
				console.log("postdata", postData)
				localStorageFactory.data.searchDetailObj = { srcLat: postData["Latitude"], srcLong: postData["Longitude"] };

				authorizedProviders.get(postData).$promise.then(function (response) {
					$ionicLoading.hide();
					if (response.status.toLowerCase() == "ok" && response.message != null) {
						if (Object.prototype.toString.call(response.message) === '[object Array]' || Object.prototype.toString.call(response.message) === '[object Object]') {
							console.log("check answer", response.message)

							response.message.forEach(function (l_obj, indexObj) {
								// l_obj.PercChanceOfVBPAcceptance = 100
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
								}
							})
							localStorageFactory.data.priceAProcedureList = response.message;
							// localStorage.setItem('testProcedure', JSON.stringify(response.message))
						} else {
							localStorageFactory.data.priceAProcedureList = [];
						}
						$state.go("tabsController.PAPsearchResult");
					} else {
						var alertPopup = $ionicPopup.alert({
							title: $translate.instant('ERROR'),
							template: response.message
						});
						alertPopup.then(function (res) { });
					}

				}, function (error) {
					$ionicLoading.hide(); // Hide loading overlay
					console.log("Error while searching authorized providers - Price A Procedure");
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
			}


			$scope.openMap = function () {
				localStorageFactory.data.inputAddress = $scope.inputaddress;
				$state.go("tabsController.priceProcedureLocSelection");
			}

			function AlertUserToInputLocation() {
				var alertPopup = $ionicPopup.alert({
					title: $translate.instant('ERROR'),
					template: $translate.instant('ENTER_YOUR_LOCATION')
				});
				alertPopup.then(function (res) {

				});
			};

			function AlertUserAddressIncorrect() {
				var alertPopup = $ionicPopup.alert({
					title: $translate.instant('ERROR'),
					template: $translate.instant('ENTERED_INCORRECT_ADDRESS')
				});
				alertPopup.then(function (res) {

				});
			};

			$scope.searchByBody = function () {
				/*$ionicLoading.show({
					template: '<p>Loading Procedure list...</p><ion-spinner></ion-spinner>'
				});*/
				var postData = {};
				postData["language"] = localStorageFactory.data.AppLanguageParam;
				postData["AppID"] = localStorageFactory.data.AppID;
				postData["User_id"] = localStorage.getItem('User_Id');
				//alert(JSON.stringify(postData))
				proceduresBody.get(postData).$promise.then(function (response) {
					$ionicLoading.hide();
					//alert(JSON.stringify(response));				
					$scope.listBody = response.message
					//$scope.texto = JSON.stringify(response.message);
					return;
					if (response.status.toLowerCase() == "success" && response.message != null) {
						if (Object.prototype.toString.call(response.message) != '[object Array]') {
							response.message = [];
						}
					}
				}, function (error) {
					$ionicLoading.hide();
				});
			}

			$timeout(function () {
				$scope.searchByBody();
			}, 500)

			$scope.getPartBody = function (bodyPart) {
				$scope.texto = bodyPart;
				$scope.listBodyAux = [];
				$scope.listBody.forEach(function (item, index) {

					// SI ES MAS DE 1 PARTE DEL CUERPO
					var countPicker = bodyPart.split('|');
					if (countPicker.length == 1) {
						var bodyPartEach = item.BodyPartName.toUpperCase();
						var bodyPicker = bodyPart.toUpperCase();

						if (bodyPartEach == bodyPicker) {
							$scope.listBodyAux.push(item);
						}
					} else {
						for (var i = 0; i < countPicker.length; i++) {
							var bodyPartEach = item.BodyPartName.toUpperCase();
							var bodyPicker = countPicker[i].toUpperCase();
							if (bodyPartEach == bodyPicker) {
								$scope.listBodyAux.push(item);
							}
						}
					}

				})
				$timeout(function () {
					$scope.modalSelectBody();
				}, 250)


			}

			$scope.searchInfoByDescription = function (textDes) {
				$scope.listInfoByDes = [];
				$ionicLoading.show({
					template: '<p>Loading Procedure Information...</p><ion-spinner></ion-spinner>'
				});
				var postData = {};
				postData["ProcedureDescription"] = textDes;
				postData["AppID"] = localStorageFactory.data.AppID; // "8B2A6BCD-7E8A-4D2B-AAB0-88EFAE074FF3"
				postData["MemberId"] = localStorageFactory.data.MemberId;//"esicard"
				postData["GroupId"] = localStorageFactory.data.GroupId// "22";
				postData["Language"] = localStorageFactory.data.AppLanguageParam;//END - ES

				//alert(JSON.stringify(postData))
				pruceduresInfoByDes.get(postData).$promise.then(function (response) {
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

			$ionicModal.fromTemplateUrl('more-info-new.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.info_modal_new = modal;
			})
			$scope.showInfoNew = function () {
				$scope.info_modal_new.show()
			}
			$scope.closeInfoNew = function () {
				$scope.info_modal_new.hide()
			}
			$scope.showPopSend = function () {
				$scope.data = {};
				var PopSendText = $ionicPopup.show({
					template: '<input type="text" id="textValue" ng-model="data.text">',
					title: 'Enter your procedure name:',
					cssClass: "searchNew",
					//subTitle: 'Please use normal things',
					scope: $scope,
					buttons: [
						{ text: 'Cancel' },
						{
							text: '<b>Go</b>',
							type: 'button-positive',
							enabled: true,
							onTap: function (e) {
								if (!$scope.data.text) {
									//don't allow the user to close unless he enters wifi password
									e.preventDefault();
								} else {
									return $scope.data.text;
								}
							}
						}
					]
				});
				setTimeout(() => {
					let text = document.getElementById('textValue');
					setTimeout(() => {
						text.focus();
					}, 100);
				});
				PopSendText.then(function (res) {
					if (res) {
						console.log('Tapped!', res);
						$scope.searchInfoByDescription(res);
					}
				});
			}
		}


	])
