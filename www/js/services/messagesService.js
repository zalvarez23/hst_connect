'use strict';
/**
 * @name profileService
 *
 * @description 
 * 		AngularJS service to perform API calls in profile page.
 * 		It provides services to getEndUserDetails, Change User Email and Change User password
 * 		
 */

angular.module('app.services')

.service("messagesService", [ "$resource", "apiUrl", "utilFactory",
	function ($resource, apiUrl, utilFactory) {
		var baseUrl = apiUrl.baseUrl;

		var getMessagesUrl 			= baseUrl + "/GetUserMessages";
		var updateMessageStatusUrl 	= baseUrl + "/UpdateUserMessageStatus";
		var addUserMessageUrl = baseUrl + "/AddUserMessage";
		var SendBalanceBillViaEmailUrl = baseUrl + "/SendBalanceBillViaEmail";
		var deleteSingleMessageUrl = baseUrl + "/DeleteUserMessages";
		var getDraftAttachmentsUrl = baseUrl + "/GetDraftAttachments";
		var deleteAttachmentUrl = baseUrl + "/DeleteAttachment";
		/**
		 * @name  UserMessages
		 * @description 
		 * 		Get user messages from the server
		 * 		
		 * @param {JSON object}
		 *        @param {String} AppId
		 *        @param {String} MemberId
		 *        @param {String} GroupId 
		 *        
		 */
		 //getMessagesUrl
		this.UserMessages = $resource(getMessagesUrl, {}, {
			getUserMessages : {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});

		/**
		 * @name  messageStatus
		 * @description 
		 * 		Update user message status
		 * 		
		 * @param {JSON object}
		 *        @param {String} AppId
		 *        @param {String} MemberId
		 *        @param {String} GroupId
		 *        @param {String} ID - Message ID
		 *        @param {number} ActionCode Message Read status
		 *        
		 */
		this.MessageStatus = $resource(updateMessageStatusUrl, {}, {
			updateMessageStatus : {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});


		/**
		 * @name  addUserMessage
		 * @description 
		 * 		Add new message
		 * 		
		 * @param {JSON object}
		 *        @param {String} AppId
		 *        @param {String} MemberId
		 *        @param {String} GroupId
		 *		  @param {String} MessageText
		 *		  @param {String} ConversationId
		 *        @param {String} CreateBy		 
		 *        
		 */
		this.NewMessage = $resource(addUserMessageUrl, {}, {
			AddUserMessage : {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});

		this.NewBalanceBill = $resource(SendBalanceBillViaEmailUrl, {}, {
			SendBalanceBillViaEmail : {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});


		


		this.DeleteSingleMessage = $resource(deleteSingleMessageUrl, {}, {			
			DeleteUserMessage : {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});	

		this.DraftAttachments = $resource(getDraftAttachmentsUrl, {}, {			
			GetDraftAttachments : {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});	

		this.DeleteAttachment = $resource(deleteAttachmentUrl, {}, {			
			DeleteAttachment : {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }
		});			

	}
]);