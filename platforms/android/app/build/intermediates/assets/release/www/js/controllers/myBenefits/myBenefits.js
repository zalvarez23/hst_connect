'use strict';

angular
  .module('app.controllers')
  .controller('myBenefistCtrl', [
    '$rootScope',
    '$scope',
    '$location',
    '$ionicPopup',
    '$translate',
    '$filter',
    '$ionicLoading',
    'messagesService',
    'localStorageFactory',
    'utilFactory',
    '$ionicModal',
    '$cordovaCamera',
    '$cordovaFileTransfer',
    'apiUrl',
    '$ionicTabsDelegate',
    function ($rootScope,
      $scope,
      $location,
      $ionicPopup,
      $translate,
      $filter,
      $ionicLoading,
      messagesService,
      localStorageFactory,
      utilFactory,
      $ionicModal,
      $cordovaCamera,
      $cordovaFileTransfer,
      apiUrl,
      $ionicTabsDelegate) {


      console.warn('------- message.js');
      $ionicTabsDelegate.showBar(true);

      $scope.newProject = localStorage.getItem('newProject');

      // ----------------------------------
      // INIT
      // ----------------------------------

      //$scope.messageList = localStorageFactory.data.userMessages || [];

      // $scope.$watch(function() {
      //    return localStorageFactory.data.userMessages;
      // }, function(NewValue, OldValue){
      //    console.log("Messages updated")
      //    $scope.messageList = localStorageFactory.data.userMessages || [];
      // }, true);

      $ionicModal.fromTemplateUrl('my-modal-message.html', {
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
      $scope.showModalMessage = function () {
        $scope.openModal();
        GetDraftAttachments();
      }
      $ionicModal.fromTemplateUrl('my-modal-attachment.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modalAttach = modal;
      });
      $scope.openModalattachment = function () {
        $scope.uriImg = "img/photo.png";
        $scope.modalAttach.show();
      };
      $scope.closeModalattachment = function () {
        $scope.modalAttach.hide();
      };
      $scope.params = {
        textMessage: '',
      }
      $scope.profile = localStorageFactory.data.profile;
      $scope.addUserMessage = function () {
        $ionicLoading.show({
          template: '<p>' + $translate.instant("LOADING_SEND_MESSAGE") + '</p><ion-spinner></ion-spinner>'
        });
        var createBy = $scope.profile.FirstName + " " + $scope.profile.LastName;
        var addMessagesServices = messagesService.NewBalanceBill;
        var postDataNM = {};
        postDataNM["AppID"] = localStorageFactory.data.AppID;
        postDataNM["MemberId"] = localStorageFactory.data.MemberId;
        postDataNM["GroupId"] = localStorageFactory.data.GroupId;
        postDataNM["MessageText"] = $scope.params.textMessage;
        postDataNM["ConversationId"] = 0;
        postDataNM["CreatedBy"] = createBy;
        postDataNM["Type"] = "BalanceBill";
        postDataNM["DeviceId"] = localStorageFactory.getDeviceID();
        postDataNM["User_id"] = localStorage.getItem('User_Id');
        // Calling the API
        console.log(postDataNM);
        addMessagesServices
          .SendBalanceBillViaEmail(postDataNM)
          .$promise
          .then(
            addUserMessageResponse,
            addUserMessageError
          );
      }
      function addUserMessageResponse(response) {


        if (response.status.toLowerCase() == "ok") {
          $ionicLoading.hide(); // Hide loading overlay
          console.log(response);
          var alertPopup = $ionicPopup.alert({
            title: "Success",
            template: response.message
          });
          alertPopup.then(function (res) {
            $scope.closeModal();
          });
          console.log('Messages successfully fetch from data source via API');
          //localStorageFactory.data.userMessages = response.message || null;
          //$scope.messageList = localStorageFactory.data.userMessages || [];
          console.log('$scope.messageList now:', $scope.messageList);
          console.log('-----');
        }
        else {
          $ionicLoading.hide(); // Hide loading overlay
          console.log(response);
          var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: "Invalid data"
          });
          alertPopup.then(function (res) {
            console.log('Invalid data');
          });
        }
        $scope.params.textMessage = "";
      }

      function addUserMessageError(error) {
        $scope.params.textMessage = "";
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
      }


      function GetDraftAttachments() {
        var getDraftAttachments = messagesService.DraftAttachments;
        var postDataDraf = {};
        postDataDraf["MemberId"] = localStorageFactory.data.MemberId;
        postDataDraf["GroupId"] = localStorageFactory.data.GroupId;
        postDataDraf["Type"] = "BalanceBill";
        postDataDraf["DeviceId"] = localStorageFactory.getDeviceID();
        postDataDraf["User_id"] = localStorage.getItem('User_Id');
        // Calling the API
        getDraftAttachments
          .GetDraftAttachments(postDataDraf)
          .$promise
          .then(
            GetDraftAttachmentsResponse,
            GetDraftAttachmentsError
          );

      }
      $scope.deleteFile = function (Id) {
        var alertPopup = $ionicPopup.confirm({
          title: $translate.instant('CONFIRM'),
          template: $translate.instant('CONFIRM_MESSAGE_DELETE_FILE'),
        });
        alertPopup.then(function (res) {
          if (res) {
            deleteDraftAttachment(Id);
          }
        })
      }
      var idFileAux;
      var deleteDraftAttachment = function (Id) {
        idFileAux = Id;
        $ionicLoading.show({
          template: '<p>' + $translate.instant("LOADING_DELETE_FILE") + '</p><ion-spinner></ion-spinner>'
        });
        var deleteAttachment = messagesService.DeleteAttachment;
        var postDataDelete = {};
        postDataDelete["ID"] = Id;
        postDataDelete["DeviceId"] = localStorageFactory.getDeviceID();
        postDataDelete["User_id"] = localStorage.getItem('User_Id');
        // Calling the API
        deleteAttachment
          .DeleteAttachment(postDataDelete)
          .$promise
          .then(
            DeleteAttachmentsResponse,
            DeleteAttachmentsError
          );
      }
      function DeleteAttachmentsResponse(response) {
        if (response.status.toLowerCase() == "ok") {
          $ionicLoading.hide();
          $scope.listDraftAttachments.forEach(function (item, index) {
            if (item.Id == idFileAux) {
              $scope.listDraftAttachments.splice(index, 1);
            }
          });

          var alertPopup = $ionicPopup.alert({
            title: "Success",
            template: response.message
          });
          alertPopup.then(function (res) {
          });
        }
        else {
          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: "Invalid data"
          });
          alertPopup.then(function (res) {
            console.log('Invalid data');
          });
        }
      }
      function DeleteAttachmentsError(error) {
        alert(JSON.stringify(error))
        $ionicLoading.hide();
        // Show network Error
        var alertPopup = $ionicPopup.alert({
          title: $translate.instant('ERROR'),
          template: $translate.instant('NO_CONN_ERR')
        });
        alertPopup.then(function (res) {
          console.log('No internet connection Error');
        });
      }

      //$scope.listDraftAttachments = [{"Id":2,"MessageId":0,"Type":"UserMessage","FileName":"test2.pdf","MemberId":"VictorPineda","GroupId":"22"},
      //{"Id":1,"MessageId":0,"Type":"UserMessage","FileName":"test2.pdf","MemberId":"VictorPineda","GroupId":"22"}];
      $scope.listDraftAttachments = [];
      function GetDraftAttachmentsResponse(response) {
        $ionicLoading.hide(); // Hide loading overlay        
        if (response.status.toLowerCase() == "ok") {

          $scope.listDraftAttachments = response.message || null;

        }
        else {
          var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: "Invalid data"
          });
          alertPopup.then(function (res) {
            console.log('Invalid data');
          });
        }

      }
      function GetDraftAttachmentsError(error) {
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
      }
      var getCodUniq = function () {
        // CAPTURANDO FECHA ACTUAL
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth() + 1;
        var yyyy = hoy.getFullYear();
        var hour = hoy.getHours();
        var minuts = hoy.getMinutes();
        var second = hoy.getSeconds();
        if (dd < 10) {
          dd = '0' + dd
        }

        if (mm < 10) {
          mm = '0' + mm
        }
        hoy = yyyy + '' + mm + '' + dd + '' + hour + '' + minuts + '' + second;
        // GENERANDO CODIGO ALEATORIO
        var codigoAle = Math.floor(Math.random() * 1000000);
        // CODIGO DEL USUARIO LOGEADO

        return codigoAle + '_' + hoy;
      }
      $scope.uriImg = "img/photo.png";
      $scope.takePhoto = function (value) {
        if (value == 1) {
          // TAKE PHOTO
          var options = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 450,
            targetHeight: 524,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
          }
        } else {
          // SELECT PHOTO
          var options = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 450,
            targetHeight: 524,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
          }
        };
        $cordovaCamera.getPicture(options).then(function (imageData) {

          $scope.uriImg = "data:image/jpeg;base64," + imageData;

        }, function (err) {
          console.log(JSON.stringify(err))
          // error
        });
      }



      $scope.uploadPhoto = function () {
        if ($scope.uriImg == "img/photo.png") {
          var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: "Select a Photo !"
          });
          alertPopup.then(function (res) {
            console.log('No internet connection Error');
          });
          return;
        }
        $ionicLoading.show({
          template: '<p>Uploading Photo</p><ion-spinner></ion-spinner>'
        });
        var server = apiUrl.baseUrl + '/UploadBalanceBill?MemberId=' + localStorageFactory.data.MemberId + '&GroupId=' + localStorageFactory.data.GroupId + "&DeviceId=" + localStorageFactory.getDeviceID() + '&UserId=' + localStorage.getItem('User_Id');
        var optionsU = {
          fileKey: "file",
          fileName: getCodUniq() + '.jpg',
          chunkedMode: false,
          mimeType: "image/jpg"
        };
        $cordovaFileTransfer.upload(server, $scope.uriImg, optionsU).then(function (response) {
          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: "Success",
            template: "File Uploaded Successfully!!!",
          });
          alertPopup.then(function (res) {
            $scope.uriImg = "img/photo.png";
            $scope.closeModalattachment();
            GetDraftAttachments();
          });
        }, function (err) {
          $ionicLoading.hide(); // Hide loading overlay
          // Show network Error
          var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: $translate.instant('NO_CONN_ERR')
          });
          alertPopup.then(function (res) {
            console.log('No internet connection Error');
          });
        })
      }
    }
  ])
