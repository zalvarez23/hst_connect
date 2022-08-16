'use strict';

angular.module('app.controllers')

  .controller('messageDetailCtrl', [
    '$rootScope',
    '$scope',
    '$location',
    '$ionicPopup',
    '$translate',
    '$filter',
    '$ionicLoading',
    'messagesService',
    'localStorageFactory',
    '$ionicHistory',
    'utilFactory',
    '$sce',
    '$ionicModal',
    '$state',
    '$cordovaCamera',
    '$cordovaFileTransfer',
    'apiUrl',    
    function ($rootScope,
      $scope,
      $location,
      $ionicPopup,
      $translate,
      $filter,
      $ionicLoading,
      messagesService,
      localStorageFactory,
      $ionicHistory,
      utilFactory,
      $sce,
      $ionicModal,
      $state,
      $cordovaCamera,
      $cordovaFileTransfer,
      apiUrl) {


      // $scope.messageListDetail = [{"attachmentlist":
      // [{"Id":1,"MessageId":1171,"Type":"UserMessage",
      // "Data":"","FileName":"Test.pdf","MemberId":"VictorPineda","GroupId":"22"},{"Id":1,"MessageId":1171,"Type":"UserMessage",
      // "Data":"","FileName":"Test.pdf","MemberId":"VictorPineda","GroupId":"22"},{"Id":1,"MessageId":1171,"Type":"UserMessage",
      // "Data":"","FileName":"Test.pdf","MemberId":"VictorPineda","GroupId":"22"}],"messagelist":{"ID":1171,"MemberId":"VictorPineda","GroupId":"22","MessageText":"TestTestTestTestTestTestTestTestTestTestTestTest","Created":"2018-07-26T14:03:36.62","IsRead":false,"ReadDate":"","IsDeleted":false,"DeletedDate":"","ConversationId":1039,"CreatedBy":"Victor"}}];
      
      $scope.goToBack = function () {
        $ionicHistory.goBack();
      }
      // ----------------------------------
      // INIT
      // ----------------------------------
      var messageStatus = messagesService.MessageStatus;
      var messageListDetail = messagesService.UserMessages;
      $scope.message = {};
      var ConversationId = localStorage.getItem('ConversationId');
      

      var postDataM = {};
      postDataM["AppID"] = localStorageFactory.data.AppID;
      postDataM["MemberId"] = localStorageFactory.data.MemberId;
      postDataM["GroupId"] = localStorageFactory.data.GroupId;
      postDataM["BuildVersion"] = localStorage["Version"];
      postDataM["Device_Type"] = localStorage["DeviceType"];
      postDataM["DeviceId"] = localStorageFactory.getDeviceID();
      postDataM["ConversationId"] = ConversationId;
      postDataM["User_id"] = localStorage.getItem('User_Id');
      // ----------------------------------
      // EVENT METHODS
      // ----------------------------------
      $scope.deleteMessage = deleteMessage;
      $scope.init = init;

      function alertMessage(){
         $ionicLoading.show({
           template : '<p>' + $translate.instant("LOADING_MESSAGES") + '</p><ion-spinner></ion-spinner>'
         });  
      }

      function getUserMessages(){
        messageListDetail
          .getUserMessages(postDataM)
          .$promise
          .then(
            getUserMessagesResponse,
            getUserMessagesError
          );        
      }
  
      function getUserMessagesResponse(response){

        $ionicLoading.hide(); // Hide loading overlay

        if ( response.status.toLowerCase() == "ok" ) {          
          $scope.messageListDetail = response.message || null;          
        }
        else {          
          var alertPopup = $ionicPopup.alert({
            title    : $translate.instant('ERROR'),
            template : "Invalid data"
          });
          alertPopup.then(function(res) {
            console.log('Invalid data');
          });
        }
      };

      function getUserMessagesError(error) {
        
        $ionicLoading.hide(); // Hide loading overlay

        console.log("Error : ");
        console.log(error);

        // Show network Error
        var alertPopup = $ionicPopup.alert({
          title    : $translate.instant('ERROR'),
          template : $translate.instant('NO_CONN_ERR')
        });
        alertPopup.then(function(res) {
          console.log('No internet connection Error');
        });
      }

   $ionicModal.fromTemplateUrl('my-modal-message.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };      
      $scope.showModalMessage = function(){
        $scope.openModal();
        GetDraftAttachments();
      }
      $scope.params = {
        textMessage : '',
      }
      $scope.profile = localStorageFactory.data.profile;      
      $scope.addUserMessage = function(){
        $ionicLoading.show({
          template : '<p>' + $translate.instant("LOADING_SEND_MESSAGE") + '</p><ion-spinner></ion-spinner>'
        });
        var createBy = $scope.profile.FirstName + " " + $scope.profile.LastName;
        var addMessagesServices = messagesService.NewMessage;
        var postDataNM = {};
        postDataNM["AppID"] = localStorageFactory.data.AppID;
        postDataNM["MemberId"] = localStorageFactory.data.MemberId;
        postDataNM["GroupId"] = localStorageFactory.data.GroupId;
        postDataNM["MessageText"] = $scope.params.textMessage;                
        postDataNM["ConversationId"] = ConversationId;
        postDataNM["CreatedBy"] = createBy;
        postDataNM["Type"] = "UserMessage";
        postDataNM["DeviceId"] = localStorageFactory.getDeviceID();
        postDataNM["User_id"] = localStorage.getItem('User_Id');
       // Calling the API
       console.log(postDataNM);
        addMessagesServices
          .AddUserMessage(postDataNM)
          .$promise
          .then(
            addUserMessageResponse,
            addUserMessageError
          );
      }
      function addUserMessageResponse(response){
      
        
        if ( response.status.toLowerCase() == "ok" ) {
          console.log(response);
          var alertPopup = $ionicPopup.alert({
            title    : "Success",
            template : response.message
          });
          alertPopup.then(function(res) {
             $scope.closeModal();
          });
          getUserMessages();
          console.log( 'Messages successfully fetch from data source via API' );
          //localStorageFactory.data.userMessages = response.message || null;
          //$scope.messageList = localStorageFactory.data.userMessages || [];
          console.log( '$scope.messageList now:', $scope.messageList );
          console.log( '-----' );
        }
        else {
          $ionicLoading.hide(); // Hide loading overlay
          console.log(response);
          var alertPopup = $ionicPopup.alert({
            title    : $translate.instant('ERROR'),
            template : "Invalid data"
          });
          alertPopup.then(function(res) {
            console.log('Invalid data');
          });
        }
        $scope.params.textMessage = "";
      }

      function addUserMessageError(error){
        
        $scope.params.textMessage = "";
        $ionicLoading.hide(); // Hide loading overlay

        console.log("Error : ");
        console.log(error);

        // Show network Error
        var alertPopup = $ionicPopup.alert({
          title    : $translate.instant('ERROR'),
          template : $translate.instant('NO_CONN_ERR')
        });
        alertPopup.then(function(res) {
          console.log('No internet connection Error');
        });
      }
      // ----------------------------------
      // HELPER FUNCTIONS
      // ----------------------------------

      /**
       *
       */
      function deleteMessage() {
        console.log('------- DELETING MESSAGE');
        console.log('localStorageFactory.data.selectedMsgID:', localStorageFactory.data.selectedMsgID);
        // Mark message as Deleted
        updateMessageStatus(localStorageFactory.data.selectedMsgID, 2);
        console.log('Check local storage message collection to see it is deleted:', localStorageFactory.data.userMessages);
        // Format messages by sorting by Read/Unread, then by date
        utilFactory.formatMessages($scope, localStorageFactory.data.userMessages);
        console.log('$scope.messageList now:', $scope.messageList);
        console.log('-----');
      }

      /**
       *
       */
      function init() {
        alertMessage();
        getUserMessages();
        console.log('------- Running Init Function');
        updateMessageStatus(localStorageFactory.data.selectedMsgID, 1); // Mark Message as Read
        console.log('localStorageFactory.data.selectedMsgID:', localStorageFactory.data.selectedMsgID);
        console.log('Check if this message is now Read:', localStorageFactory.data.userMessages);
        console.log('-----');
        // Format messages by sorting by Read/Unread, then by date
        utilFactory.formatMessages($scope, localStorageFactory.data.userMessages);
      }
      var itemMessageDetail;
      $scope.showModalMessageDelete = function(item){
        itemMessageDetail = item;
        var alertPopup = $ionicPopup.confirm({
          title: $translate.instant('CONFIRM'),
          template: $translate.instant('CONFIRM_MESSAGE_DELETE'),
        });

        alertPopup.then(function(res){
          if (res) {
           $ionicLoading.show({
             template : '<p>' + $translate.instant("LOADING_MESSAGE_DELETE") + '</p><ion-spinner></ion-spinner>'
           });              
            var postDataDelete = {};
            postDataDelete["AppId"] = localStorageFactory.data.AppID;
            postDataDelete["MemberId"] = localStorageFactory.data.MemberId;
            postDataDelete["GroupId"] = localStorageFactory.data.GroupId;
            postDataDelete["ID"] = item.ID;
            postDataDelete["ConversationId"] = 0;
            postDataDelete["DeviceId"] = localStorageFactory.getDeviceID();
            postDataDelete["User_id"] = localStorage.getItem('User_Id');
            var deleteUserMessage = messagesService.DeleteSingleMessage;
            
            deleteUserMessage
              .DeleteUserMessage(postDataDelete)
              .$promise
              .then(
                deleteUserMessageResponse,
                deleteUserMessageError
              );           
          }
        })
      }
      function deleteUserMessageResponse(response){  
      $ionicLoading.hide(); // Hide loading overlay            
        if ( response.status.toLowerCase() == "ok" ) {          
          var alertPopup = $ionicPopup.alert({
            title    : "Success",
            template : response.message
          });
          //alert(JSON.stringify(itemMessageDetail))
          //var indexDelete = $scope.messageListDetail.indexOf(itemMessageDetail);
          var indexDelete = 0;
          $scope.messageListDetail.forEach(function(itemA,indexA){            
            if (itemA.messagelist.ID == itemMessageDetail.ID) {              
              indexDelete = indexA;
            }
          })
          $scope.messageListDetail.splice(indexDelete,1);
          
          alertPopup.then(function(res) {
             $scope.closeModal();
          });          
          console.log( 'Messages successfully fetch from data source via API' );
          //localStorageFactory.data.userMessages = response.message || null;
          //$scope.messageList = localStorageFactory.data.userMessages || [];
          console.log( '$scope.messageList now:', $scope.messageList );
          console.log( '-----' );
        }
        else {
          $ionicLoading.hide(); // Hide loading overlay
          console.log(response);
          var alertPopup = $ionicPopup.alert({
            title    : $translate.instant('ERROR'),
            template : "Invalid data"
          });
          alertPopup.then(function(res) {
            console.log('Invalid data');
          });
        }        
      }

    //  ATTACH FILE
      $ionicModal.fromTemplateUrl('my-modal-attachment.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modalAttach = modal;
      });
      $scope.openModalattachment = function() {
        $scope.uriImg = "img/photo.png";
        $scope.modalAttach.show();
      };
      $scope.closeModalattachment = function() {
        $scope.modalAttach.hide();
      };      
      function GetDraftAttachments(){
        var getDraftAttachments = messagesService.DraftAttachments;        
        var postDataDraf = {};
        postDataDraf["MemberId"] = localStorageFactory.data.MemberId;
        postDataDraf["GroupId"] = localStorageFactory.data.GroupId;        
        postDataDraf["Type"] = "UserMessage";
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
      $scope.deleteFile = function(Id){
        var alertPopup = $ionicPopup.confirm({
          title: $translate.instant('CONFIRM'),
          template: $translate.instant('CONFIRM_MESSAGE_DELETE_FILE'),
        });
        alertPopup.then(function(res){
          if (res) {
            deleteDraftAttachment(Id);
          }
        })        
      }
      var idFileAux;
      var deleteDraftAttachment = function(Id){
        idFileAux = Id;
        $ionicLoading.show({
          template : '<p>' + $translate.instant("LOADING_DELETE_FILE") + '</p><ion-spinner></ion-spinner>'
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
      function DeleteAttachmentsResponse(response){        
        if (response.status.toLowerCase() == "ok" ) {
          $ionicLoading.hide();
          $scope.listDraftAttachments.forEach(function(item,index){
            if (item.Id == idFileAux) {
              $scope.listDraftAttachments.splice(index,1);
            }
          });

          var alertPopup = $ionicPopup.alert({
            title    : "Success",
            template : response.message
          });
          alertPopup.then(function(res) {             
          });
        }
        else {
          $ionicLoading.hide();           
          var alertPopup = $ionicPopup.alert({
            title    : $translate.instant('ERROR'),
            template : "Invalid data"
          });
          alertPopup.then(function(res) {
            console.log('Invalid data');
          });
        }        
      }
      function DeleteAttachmentsError(error) {        
        $ionicLoading.hide();
        // Show network Error
        var alertPopup = $ionicPopup.alert({
          title    : $translate.instant('ERROR'),
          template : $translate.instant('NO_CONN_ERR')
        });
        alertPopup.then(function(res) {
          console.log('No internet connection Error');
        });
      }

      //$scope.listDraftAttachments = [{"Id":2,"MessageId":0,"Type":"UserMessage","FileName":"test2.pdf","MemberId":"VictorPineda","GroupId":"22"},
      //{"Id":1,"MessageId":0,"Type":"UserMessage","FileName":"test2.pdf","MemberId":"VictorPineda","GroupId":"22"}];
      $scope.listDraftAttachments = [];
      function GetDraftAttachmentsResponse(response) {
        $ionicLoading.hide(); // Hide loading overlay        
        if ( response.status.toLowerCase() == "ok" ) {

          $scope.listDraftAttachments = response.message || null;
          
        }
        else {          
          var alertPopup = $ionicPopup.alert({
            title    : $translate.instant('ERROR'),
            template : "Invalid data"
          });
          alertPopup.then(function(res) {
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
          title    : $translate.instant('ERROR'),
          template : $translate.instant('NO_CONN_ERR')
        });
        alertPopup.then(function(res) {
          console.log('No internet connection Error');
        });
      }
      var getCodUniq = function(){
        // CAPTURANDO FECHA ACTUAL
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();
        var hour = hoy.getHours();
        var minuts = hoy.getMinutes();
        var second = hoy.getSeconds();
        if(dd<10) {
            dd='0'+dd
        } 

        if(mm<10) {
            mm='0'+mm
        } 
        hoy = yyyy+''+mm+''+dd + '' + hour + '' + minuts + '' + second;
        // GENERANDO CODIGO ALEATORIO
        var codigoAle =  Math.floor(Math.random() * 1000000);
        // CODIGO DEL USUARIO LOGEADO

        return codigoAle + '_' + hoy;
      }
      $scope.uriImg = "img/photo.png";
      $scope.takePhoto = function(value){
        if (value == 1) {
          // TAKE PHOTO
          var options= {
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
        }else{
          // SELECT PHOTO
          var options= {
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
        $cordovaCamera.getPicture(options).then(function(imageData) {                    
          
          $scope.uriImg = "data:image/jpeg;base64," + imageData;

        }, function(err){
          console.log(JSON.stringify(err))
          // error
        });
      }



      $scope.uploadPhoto = function(){
          if ($scope.uriImg == "img/photo.png") {
            var alertPopup = $ionicPopup.alert({
              title    : $translate.instant('ERROR'),
              template : "Select a Photo !"
            });
            alertPopup.then(function(res) {
              console.log('No internet connection Error');
            });            
            return;
          }
          $ionicLoading.show({
            template : '<p>Uploading Photo</p><ion-spinner></ion-spinner>'
          });
          var server = apiUrl.baseUrl + '/UploadUserMessageAttachment?MemberId=' + localStorageFactory.data.MemberId +'&GroupId=' + localStorageFactory.data.GroupId + "&DeviceId=" + localStorageFactory.getDeviceID() + '&UserId=' + localStorage.getItem('User_Id');;
          var optionsU = {
            fileKey: "file",
            fileName: getCodUniq() + '.jpg',
            chunkedMode: false,
            mimeType: "image/jpg"
          };
          $cordovaFileTransfer.upload(server, $scope.uriImg, optionsU).then(function(response) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                title    : "Success",
                template : "File Uploaded Successfully!!!",
              });
              alertPopup.then(function(res) {
                 $scope.uriImg = "img/photo.png";
                 $scope.closeModalattachment();
                 GetDraftAttachments();
              });
          }, function(err) {
            $ionicLoading.hide(); // Hide loading overlay
            // Show network Error
            var alertPopup = $ionicPopup.alert({
              title    : $translate.instant('ERROR'),
              template : $translate.instant('NO_CONN_ERR')
            });
            alertPopup.then(function(res) {
              console.log('No internet connection Error');
            });
          })          
      }
    // END ATTACH FILE
      function deleteUserMessageError(error){        
        $ionicLoading.hide(); // Hide loading overlay

        console.log("Error : ");
        console.log(error);

        // Show network Error
        var alertPopup = $ionicPopup.alert({
          title    : $translate.instant('ERROR'),
          template : $translate.instant('NO_CONN_ERR')
        });
        alertPopup.then(function(res) {
          console.log('No internet connection Error');
        });
      }


        $scope.showModalMessageDeleteAll = function(){
          
        var alertPopup = $ionicPopup.confirm({
          title: $translate.instant('CONFIRM'),
          template: $translate.instant('CONFIRM_MESSAGE_DELETE_ALL'),
        });

        alertPopup.then(function(res){
          if (res) {
           $ionicLoading.show({
             template : '<p>' + $translate.instant("LOADING_MESSAGE_DELETE") + '</p><ion-spinner></ion-spinner>'
           });              
            var postDataDelete = {};
            postDataDelete["AppId"] = localStorageFactory.data.AppID;
            postDataDelete["MemberId"] = localStorageFactory.data.MemberId;
            postDataDelete["GroupId"] = localStorageFactory.data.GroupId;
            postDataDelete["ID"] = 0;
            postDataDelete["ConversationId"] = ConversationId;
            postDataDelete["DeviceId"] = localStorageFactory.getDeviceID();
            postDataDelete["User_id"] = localStorage.getItem('User_Id');
            var deleteUserMessage = messagesService.DeleteSingleMessage;
            
            deleteUserMessage
              .DeleteUserMessage(postDataDelete)
              .$promise
              .then(
                deleteUserMessageResponseAll,
                deleteUserMessageErrorAll
              );           
          }
        })
      }
      function deleteUserMessageResponseAll(response){  
      $ionicLoading.hide(); // Hide loading overlay            
        if ( response.status.toLowerCase() == "ok" ) {          
          var alertPopup = $ionicPopup.alert({
            title    : "Success",
            template : response.message
          });
          
          alertPopup.then(function(res) {
            $state.go('tabsController.messages');
             //$ionicHistory.goBack();
          });          
          console.log( 'Messages successfully fetch from data source via API' );
          //localStorageFactory.data.userMessages = response.message || null;
          //$scope.messageList = localStorageFactory.data.userMessages || [];
          console.log( '$scope.messageList now:', $scope.messageList );
          console.log( '-----' );
        }
        else {
          $ionicLoading.hide(); // Hide loading overlay
          console.log(response);
          var alertPopup = $ionicPopup.alert({
            title    : $translate.instant('ERROR'),
            template : "Invalid data"
          });
          alertPopup.then(function(res) {
            console.log('Invalid data');
          });
        }        
      }

      function deleteUserMessageErrorAll(error){        
        $ionicLoading.hide(); // Hide loading overlay

        console.log("Error : ");
        console.log(error);

        // Show network Error
        var alertPopup = $ionicPopup.alert({
          title    : $translate.instant('ERROR'),
          template : $translate.instant('NO_CONN_ERR')
        });
        alertPopup.then(function(res) {
          console.log('No internet connection Error');
        });
      }
      /**
       *
       * @param msgID
       * @param actionCode
       */
      function updateMessageStatus(msgID, actionCode) {
        // check if there is query in url
        // and fire search in case its value is not empty
        console.log('Current Message ID (msgID):', msgID);

        var messageList = localStorageFactory.data.userMessages || [];
        $scope.message = {};

        for (var i in messageList) {
          var obj = messageList[i];
          if (obj.ID == msgID) {
            if (actionCode == 1)
              obj.IsRead = true;
            else if (actionCode == 2)
              messageList.splice(i, 1);
            $scope.message = obj;
            break;
          }
        }

        var autolinker = new Autolinker({
          newWindow: true, replaceFn: function (match) {
            console.log("href = ", match.getAnchorHref());
            console.log("text = ", match.getAnchorText());

            switch (match.getType()) {
              case 'url':
                console.log("url: ", match.getUrl());

                return '<a href="javascript:window.open(\'' + match.getAnchorHref() + '\', \'_blank\', \'location=yes\');">' + match.getAnchorText() + '</a>';  // let Autolinker perform its normal anchor tag replacement

              case 'email':
                var email = match.getEmail();
                console.log("email: ", email);

                return true;

              case 'phone':
                console.log("Phone Number: ", match.getNumber());

                return true;

              case 'mention':
                console.log("Mention: ", match.getMention());
                console.log("Mention Service Name: ", match.getServiceName());

                return true;

              case 'hashtag':
                console.log("Hashtag: ", match.getHashtag());

                return true;
            }
          }
        });
        $scope.messageHTML = $sce.trustAsHtml(autolinker.link($scope.message.MessageText));
        // AppId, MemberId, GroupId, ID, ActionCode

        var postData = {};
        postData["AppId"] = localStorageFactory.data.AppID;
        postData["MemberId"] = localStorageFactory.data.MemberId;
        postData["GroupId"] = localStorageFactory.data.GroupId;
        postData["ID"] = msgID;
        postData["ActionCode"] = actionCode;
        postData["BuildVersion"] = localStorage["Version"];
        postData["Device_Type"] = localStorage["DeviceType"];
        postData["DeviceId"] = localStorageFactory.getDeviceID();
        postData["User_id"] = localStorage.getItem('User_Id');
        if (actionCode == 2) {
          $ionicLoading.show({
            template: '<p>Deleting message...</p><ion-spinner></ion-spinner>'
          });
        }

        messageStatus.updateMessageStatus(postData).$promise.then(function (response) {

          if (actionCode == 2)
            $ionicLoading.hide(); // Hide loading overlay

          if (response.status.toLowerCase() == "ok") {
            console.log("Success message status updated. " + response.message);

            if (actionCode == 2) {
              var alertPopup = $ionicPopup.alert({
                title: $translate.instant('SUCCESS'),
                template: "Message deleted successfully"
              });
              alertPopup.then(function (res) {
                $ionicHistory.goBack();
              });
            }
          }
          else {
            console.log("Error while updating message status : " + response.message);

            if (actionCode == 2) {
              var alertPopup = $ionicPopup.alert({
                title: $translate.instant('ERROR'),
                template: response.message
              });
              alertPopup.then(function (res) {
              });
            }
          }

        }, function (error) {
          if (actionCode == 2) {
            $ionicLoading.hide(); // Hide loading overlay

            var alertPopup = $ionicPopup.alert({
              title: $translate.instant('ERROR'),
              template: $translate.instant('NO_CONN_ERR')
            });
            alertPopup.then(function (res) {
            });
          }

          console.log("Error while updating message status : ");
          console.log(error);


        });
      }

    }


  ])
