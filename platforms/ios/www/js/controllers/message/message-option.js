'use strict';

angular
  .module('app.controllers')
  .controller('messagesCtrl-option', [
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
    '$timeout',
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
      $timeout,
      $ionicTabsDelegate) {

      $ionicTabsDelegate.showBar(false);

      console.warn('------- message.js');
      $scope.typeMessage = 1;
      // 1 = BILL , 2 = MESSAGE.
      $scope.showLoaderMessage = false;
      $scope.showMessage1 = true;
      $scope.showMessage2 = false;
      $scope.showAttach1 = true;
      $scope.showAttach2 = false;
      $scope.showContentMessage = true;
      $scope.showFinalMessage = false;
      $timeout(function () {
        // $scope.showMessage(2);
        // setTimeout(() => {
        // $scope.selectType();

        // }, 5000);
        // $scope.openModalattachment();          
        //$scope.showModalMessage();
      })

      // FUNCIONES DE MENSAJES

      $scope.showMessage = function (value) {
        $scope.typeMessage = value;
        $scope.showMessage1 = false;
        $scope.showLoaderMessage = true;
        $timeout(function () {
          $scope.showMessage2 = true;
          $scope.showLoaderMessage = false;
        }, 500)
      }

      $scope.cancelMessage = function () {
        $scope.showMessage1 = true;
        $scope.showMessage2 = false;
      }
      $scope.selectType = function () {
        $scope.showAttach1 = false;
        $scope.showLoaderAttach = true;
        $timeout(function () {
          $scope.showAttach2 = true;
          $scope.showLoaderAttach = false;
        }, 500)

      }
      $scope.cancelAttach = function () {
        $scope.showAttach1 = true;
        $scope.showAttach2 = false;
        //
      }
      $scope.completeAttach = function () {
        $scope.closeModalattachment();
        $timeout(function () {
          $scope.showModalMessage();
        }, 100)
      }

      $scope.gotoMain = function () {
        $scope.closeModal();
        $scope.closeModalattachment();
        $scope.showContentMessage = true;
        $scope.showFinalMessage = false;
        $scope.showLoaderMessage = false;
        $scope.showMessage1 = true;
        $scope.showMessage2 = false;
        $scope.showAttach1 = true;
        $scope.showAttach2 = false;
      };

      $scope.goToVideo = function () {
        window.open("https://vimeo.com/241980441", '_system', 'location=yes');
      }
      // ----------------------------------
      // INIT
      // ----------------------------------

      //$scope.messageList = localStorageFactory.data.userMessages || [];

      // $scope.$watch(function() {
      // 	return localStorageFactory.data.userMessages;
      // }, function(NewValue, OldValue){
      // 	console.log("Messages updated")
      // 	$scope.messageList = localStorageFactory.data.userMessages || [];
      // }, true);

      /*$ionicLoading.show({
        template : '<p>' + $translate.instant("LOADING_MESSAGES") + '</p><ion-spinner></ion-spinner>'
      });*/

      var messages = messagesService.UserMessages;

      var postData = {};
      postData["AppID"] = localStorageFactory.data.AppID;
      postData["MemberId"] = localStorageFactory.data.MemberId;
      postData["GroupId"] = localStorageFactory.data.GroupId;
      postData["BuildVersion"] = localStorage["Version"];
      postData["Device_Type"] = localStorage["DeviceType"];
      postData["DeviceId"] = localStorageFactory.getDeviceID();
      postData["ConversationId"] = 0;
      postData["User_id"] = localStorage.getItem('User_Id');
      // Init message list
      $rootScope.$on('$stateChangeStart', stateChangeStart);
      function stateChangeStart(event, toState, toParams, fromState, fromParams) {
        console.log('------- Current State:', toState.name);
        if (toState.name === 'tabsController.messages-options') {
          $scope.showMessage1 = true;
          $scope.showMessage2 = false;
          //init();
        }
      }

      $scope.init = init;

      $scope.updateMessageReadStatus = updateMessageReadStatus;



      // ----------------------------------
      // HELPER FUNCTIONS
      // ----------------------------------

      /*$scope.messageList = [
        {"ID":1130,"MemberId":"VictorPineda","GroupId":"22","MessageText":"Sample Message 1: hello!!!","Created":"2018-06-14T10:21:45.353","IsRead":false,"ReadDate":"","IsDeleted":false,"DeletedDate":"","ConversationId":1004,"CreatedBy":"Victor Pineda"}

      ]*/
      // PRUEBA DE AGREGAR
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

      $scope.openNext = function () {
        if ($scope.typeMessage == 1) {
          $scope.openModalattachment();
        } else {
          $scope.completeAttach();
        }
      }
      $scope.openModalattachment = function () {
        $scope.uriImg = "img/photo.png";
        $scope.modalAttach.show();
        $scope.closeModal();
        $scope.cancelAttach();
      };
      $scope.closeModalattachment = function () {
        $scope.modalAttach.hide();
      };
      $scope.params = {
        textMessage: '',
      }
      $scope.profile = localStorageFactory.data.profile;
      $scope.addUserMessage = function () {
        console.log($scope.typeMessage)
        if ($scope.typeMessage == 1) {
          if ($scope.listDraftAttachments.length == 0) {
            var alertPopup = $ionicPopup.alert({
              title: $translate.instant('ERROR'),
              template: $translate.instant('MESSAGE_ERROR_SEND')
            });
            alertPopup.then(function (res) {
              console.log('Invalid data');
            });
            return;
          }
        }

        $ionicLoading.show({
          template: '<p>' + $translate.instant("LOADING_SEND_MESSAGE") + '</p><ion-spinner></ion-spinner>'
        });
        var createBy = $scope.profile.FirstName + " " + $scope.profile.LastName;
        var addMessagesServices = messagesService.NewMessage;
        var addMessagesServicesBills = messagesService.NewBalanceBill;
        var postDataNM = {};
        postDataNM["AppID"] = localStorageFactory.data.AppID;
        postDataNM["MemberId"] = localStorageFactory.data.MemberId;
        postDataNM["GroupId"] = localStorageFactory.data.GroupId;
        postDataNM["MessageText"] = $scope.params.textMessage;
        postDataNM["ConversationId"] = 0;
        postDataNM["CreatedBy"] = createBy;

        postDataNM["DeviceId"] = localStorageFactory.getDeviceID();
        postDataNM["User_id"] = localStorage.getItem('User_Id');
        // Calling the API 
        if ($scope.typeMessage == 1) {
          postDataNM["Type"] = "BalanceBill";
          console.log(postDataNM);
          addMessagesServicesBills
            .SendBalanceBillViaEmail(postDataNM)
            .$promise
            .then(
              addUserMessageResponse,
              addUserMessageError
            );
        } else {
          postDataNM["Type"] = "UserMessage";
          console.log(postDataNM);
          addMessagesServices
            .AddUserMessage(postDataNM)
            .$promise
            .then(
              addUserMessageResponse,
              addUserMessageError
            );
        }

      }
      function addUserMessageResponse(response) {


        if (response.status.toLowerCase() == "ok") {
          console.log(response);
          /*var alertPopup = $ionicPopup.alert({
            title    : "Success",
            template : response.message
          });
          alertPopup.then(function(res) {
             $scope.closeModal();
          });*/
          $scope.showContentMessage = false;
          $scope.showFinalMessage = true;
          getUserMessageAux();
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
      // FIN PRUEBA AGREGAR
      function getUserMessages() {
        console.warn('------- getUserMessages()');
        console.log('$scope.messageList currently:', $scope.messageList);

        /*if ( localStorageFactory.data.userMessages != null ) {
          $ionicLoading.hide(); // Hide loading overlay
          $scope.messageList = localStorageFactory.data.userMessages;
          // Format messages by sorting by Read/Unread, then by date
          utilFactory.formatMessages($scope, localStorageFactory.data.userMessages);
          console.log('Messages already on $scope, don\'t fetch from data source');
          console.log('$scope.messageList formatted:', $scope.messageList);
          console.log('-----');
          return;
        }*/

        // Calling the API
        messages
          .getUserMessages(postData)
          .$promise
          .then(
            getUserMessagesResponse,
            getUserMessagesError
          );
      }

      function getUserMessageAux() {

        messages
          .getUserMessages(postData)
          .$promise
          .then(
            getUserMessagesResponse,
            getUserMessagesError
          );
      }
      /**
       *
       * @param error
       */
      function getUserMessagesError(error) {
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

      /**
       *
       * @param response
       */
      function getUserMessagesResponse(response) {

        $ionicLoading.hide(); // Hide loading overlay

        if (response.status.toLowerCase() == "ok") {
          console.log('Messages successfully fetch from data source via API');
          localStorageFactory.data.userMessages = response.message || null;
          $scope.messageList = localStorageFactory.data.userMessages || [];
          console.log('$scope.messageList now:', $scope.messageList);
          console.log('-----');
        }
        else {
          console.log(response);
          var alertPopup = $ionicPopup.alert({
            title: $translate.instant('ERROR'),
            template: "Invalid data"
          });
          alertPopup.then(function (res) {
            console.log('Invalid data');
          });
        }
        // Format messages by sorting by Read/Unread, then by date
        utilFactory.formatMessages($scope, localStorageFactory.data.userMessages);
      }

      /**
       *
       */
      function init() {
        getUserMessages();
      }

      /**
       *
       * @param msg_id
       */
      function updateMessageReadStatus(msg_id, msg_id_conversation) {
        // update message status
        console.log(msg_id);
        localStorageFactory.data.selectedMsgID = msg_id;
        localStorage.setItem('ConversationId', msg_id_conversation)
        var IsRead = true;
      }

      function GetDraftAttachments() {
        var getDraftAttachments = messagesService.DraftAttachments;
        var postDataDraf = {};
        postDataDraf["MemberId"] = localStorageFactory.data.MemberId;
        postDataDraf["GroupId"] = localStorageFactory.data.GroupId;
        postDataDraf["DeviceId"] = localStorageFactory.getDeviceID();
        if ($scope.typeMessage == 1) {
          postDataDraf["Type"] = "BalanceBill";
        } else {
          postDataDraf["Type"] = "UserMessage";
        }

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
          $scope.selectType();
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
        if ($scope.typeMessage == 1) {
          var server = apiUrl.baseUrl + '/UploadBalanceBill?MemberId=' + localStorageFactory.data.MemberId + '&GroupId=' + localStorageFactory.data.GroupId + "&DeviceId=" + localStorageFactory.getDeviceID() + '&UserId=' + localStorage.getItem('User_Id');
        } else {
          var server = apiUrl.baseUrl + '/UploadUserMessageAttachment?MemberId=' + localStorageFactory.data.MemberId + '&GroupId=' + localStorageFactory.data.GroupId + '&DeviceId=' + localStorageFactory.getDeviceID() + '&UserId=' + localStorage.getItem('User_Id');
        }

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
            //$scope.closeModalattachment();
            $scope.cancelAttach();
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
