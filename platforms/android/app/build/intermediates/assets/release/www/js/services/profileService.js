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

    .service("profileService", ["$resource", "apiUrl", "utilFactory", "$http",
        function ($resource, apiUrl, utilFactory, $http) {
            var baseUrl = apiUrl.baseUrl;

            var getEndUserDetailUrl = baseUrl + "/GetEndUser";
            var changeEmailUrl = baseUrl + "/GetEndUser";
            var changePasswordUrl = baseUrl + "/Changepassword";
            var termOfUseUrl = baseUrl + "/GetAgreement";
            var getProfileUrl = baseUrl + "/GetDemoGraphicInfo2";
            var updateProfileUrl = baseUrl + "/UpdateMemberInfo";
            var getFamilyWizeFlagUrl = baseUrl + "/ReturnEmployerGroupFamilyWizeExempt";


            /**
             * @name endUserDetail
             *
             * @description 
             *         get End user profile info
             *         
             * @type {[type]}
             */
            this.endUserDetail = $resource(getEndUserDetailUrl, {}, {
                get: {
                    method: "GET"
                }
            });

            /** 
             * @name Change Password service
             * @description 
             * 		Used to change the password of the user
             *
             * @param {object} [requestData] Post Data for the change password API
                    @param {string} [AppID] 
                    @param {string} [MemberId] 
                    @param {string} [DeviceId] 
                      @param {string} [OldPassword] 
                      @param {string} [Password] 
             * 
             */

            this.changePassword = $resource(changePasswordUrl, {}, {
                change: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: utilFactory.encodePostBody
                }
            });

            this.familiaWize = function (formData) {
                return $http({
                    method: 'POST',
                    url: getFamilyWizeFlagUrl,
                    data: formData,
                    transformRequest: utilFactory.encodePostBody,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
            };

            /** 
             * @name Get Terms of Use
             * @description 
             * 		Used to get the terms of service
             *
             * @param {object} [requestData] Post Data for the change password API
                    @param {string} [AppID] 
                    @param {string} [MemberId] 
                    @param {string} [GroupId] 
             * 
             */
            this.termOfUse = $resource(termOfUseUrl, {}, {
                getTermOfUse: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: utilFactory.encodePostBody
                }
            });

            /** 
             * @name profile
             * @description 
             *      Used to get the users profile
             *
             * @param {object} [requestData] Post Data for the change password API
                    @param {string} [AppID] 
                    @param {string} [MemberId] 
                    @param {string} [GroupId] 
             * 
             */
            this.profile = $resource(getProfileUrl, {}, {
                getUserProfile: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: utilFactory.encodePostBody
                }
            });

            // @params
            // 
            // AppID
            // MemberId
            // GroupId
            // Email
            // Address1
            // Address2
            // City
            // State
            // Zip
            // HomePhone
            // CellPhone

            this.memberInfo = $resource(updateProfileUrl, {}, {
                update: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: utilFactory.encodePostBody
                }
            });
        }
    ]);
