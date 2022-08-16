'use strict';
/**
 * @name tab-route
 * @description Routes inside the tab controller 
 *
 */

angular.module('app.routes')

	.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('tabsController.priceAProcedure', {
				url: '/price-procedure',
				views: {
					'tab1': {
						templateUrl: 'templates/priceAProcedure/priceAProcedure.html',
						resolve: {
							findAProviderPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'priceProcedurePage',
									files: [
										'js/services/findAProviderService.js',
										'js/controllers/priceAprocedure/priceA-procedure-controller.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.PAPsearchResult', {
				url: '/pap-search-result',
				views: {
					'tab1': {
						templateUrl: 'templates/priceAProcedure/searchResult.html',
						resolve: {
							findAProviderPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'searchresultPage',
									files: [
										'js/services/priceAProcedure/searchResultService.js',
										'js/controllers/priceAprocedure/search-result-controller.js'
									]
								})
							}
						}

					}
				},
				cache: false
			})

			.state('tabsController.PAPsearchDetails', {
				cache: false,
				url: '/pap-search-details',
				views: {
					'tab1': {
						templateUrl: 'templates/priceAProcedure/searchDetails.html',
						resolve: {
							findAProviderPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'searchdetailsPage',
									files: [
										'js/services/priceAProcedure/searchDetailsService.js',
										'js/controllers/priceAprocedure/search-details-controller.js',
										'js/filters/phoneformat-filter.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.priceProcedureLocSelection', {
				cache: false,
				url: '/pap-location-selection-controller',
				views: {
					'tab1': {
						templateUrl: 'templates/maps/locationselection.html'
					}
				}
			})

			.state('tabsController.papshowlocationController', {
				cache: false,
				url: '/pap-show-location',
				views: {
					'tab1': {
						templateUrl: 'templates/maps/showLocations.html',
						resolve: {
							priceAProcedurePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'priceAProcedurePage',
									files: [
										'js/controllers/maps/show-location-controller.js'
									]
								})
							}
						}
					}
				}
			})

			// Find a provider
			.state('tabsController.findAProvider', {
				url: '/find-provider',
				views: {
					'tab2': {
						templateUrl: 'templates/findAProvider.html',
						resolve: {
							findAProviderPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'findAProviderPage',
									files: [
										'js/services/findAProviderService.js',
										'js/factories/searchProviderPrefetchFactory.js',
										'js/controllers/findprovider/find-provider-controller.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.findDoctor', {
				url: '/find-doctor',
				views: {
					'tab2': {
						templateUrl: 'templates/findprovider/findDoctor.html',
						resolve: {
							findAProviderPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'findAProviderPage',
									files: [
										'js/services/findAProviderService.js',
										'js/controllers/findprovider/find-doctor-controller.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.findHospital', {
				url: '/find-hospital',
				views: {
					'tab2': {
						templateUrl: 'templates/findprovider/findHospital.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'findAProviderPage',
									files: [
										'js/services/findAProviderService.js',
										'js/controllers/findprovider/find-hospital-controller.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.providerSearchResults', {
				url: '/provider-search-results',
				views: {
					'tab2': {
						templateUrl: 'templates/findprovider/providerSearchResults.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'findAProviderPage',
									files: [
										'js/services/findAProviderService.js',
										'js/controllers/findprovider/provider-search-results.js'
									]
								})
							}
						}
					}
				},
				cache: false
			})

			.state('tabsController.providerDetails', {
				url: '/provider-details',
				cache: false,
				views: {
					'tab2': {
						templateUrl: 'templates/findprovider/providerDetail.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'findAProviderPage',
									files: [
										'js/services/findAProviderService.js',
										'js/controllers/findprovider/provider-detail.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.LocationSelectionController', {
				cache: false,
				url: '/location-selection-controller',
				views: {
					'tab2': {
						templateUrl: 'templates/maps/locationselection.html'
					}
				}
			})

			.state('tabsController.showlocationController', {
				cache: false,
				url: '/show-location',
				views: {
					'tab2': {
						templateUrl: 'templates/maps/showLocations.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'findAProviderPage',
									files: [
										'js/controllers/maps/show-location-controller.js'
									]
								})
							}
						}
					}
				}
			})


			.state('tabsController.myBenefits', {
				url: '/my-benefits',
				views: {
					'tab3': {
						templateUrl: 'templates/myBenefits/myBenefits.html',
						resolve: {
							messagesPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'myBenefitsPage',
									files: [
										'js/services/messagesService.js',
										'js/controllers/myBenefits/myBenefits.js'
									]
								})
							}
						}
					}
				}
			})
			.state('tabsController.callInsurance', {
				url: '/call-insurance',
				views: {
					'tab4': {
						templateUrl: 'templates/callInsurance.html',
						resolve: {
							procedureCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'callInsurance',
									files: [
										'js/services/callInsuranceService.js',
										'js/controllers/callInsurance/call-insurance-contoller.js'
									]
								})
							}
						}
					}
				}
			})


			// My Profile 
			.state('tabsController.myProfile', {
				url: '/my-profile',
				views: {
					'tab5': {
						templateUrl: 'templates/profile/myProfile.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'profilePage',
									files: [
										'js/services/profileService.js',
										'js/services/findAProviderService.js',
										'js/factories/searchProviderPrefetchFactory.js',
										'js/services/messagesService.js',
										'js/services/yourdoctorService.js',
										'js/controllers/profile/my-profile-controller.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.changeEmail', {
				url: '/change-email',
				views: {
					'tab5': {
						templateUrl: 'templates/profile/changeEmail.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'profilePage',
									files: [
										'js/services/profileService.js',
										'js/controllers/profile/change-email-controller.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.changePassword', {
				url: '/change-password',
				views: {
					'tab5': {
						templateUrl: 'templates/profile/changePassword.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'profilePage',
									files: [
										'js/services/profileService.js',
										'js/controllers/profile/change-password-controller.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.updateMemberId', {
				url: '/update-member-id',
				views: {
					'tab5': {
						templateUrl: 'templates/profile/updateMemberId.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'profilePage',
									files: [
										'js/services/profileService.js',
										'js/controllers/profile/update-memberid-controller.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.termsOfUse', {
				url: '/terms-of-use',
				views: {
					'tab5': {
						templateUrl: 'templates/profile/termsOfUse.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'profilePage',
									files: [
										'js/services/profileService.js',
										'js/controllers/profile/terms-of-use.js'
									]
								})
							}
						}
					}
				}
			})

			.state('tabsController.profileImage', {
				url: '/profile-image-selection',
				views: {
					'tab5': {
						templateUrl: 'templates/myBenefits/insuranceInfo/camera-gallery.html',
						resolve: {
							profilePageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'profile-photo',
									files: [
										'js/controllers/myBenefits/insuranceCard/camera-gallery.js'
									]
								})
							}
						}

					}
				},
				cache: false
			})

			// Messages
			.state('tabsController.messages', {
				url: '/messages',
				views: {
					'tab6': {
						templateUrl: 'templates/message/messages.html',
						resolve: {
							messagesPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'messagesPage',
									files: [
										'js/services/messagesService.js',
										'js/controllers/message/message.js'
									]
								})
							}
						}
					}
				}
			})
			// Messages
			.state('tabsController.prescription', {
				url: '/prescription',
				views: {
					'tab6': {
						templateUrl: 'templates/prescription/prescription.html',
						resolve: {
							messagesPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'prescriptionPage',
									files: [
										// 'js/services/messagesService.js',
										'js/controllers/prescription/prescription.js'
									]
								})
							}
						}
					}
				}
			})
			.state('tabsController.messages-options', {
				url: '/messages-options',
				views: {
					'tab6': {
						templateUrl: 'templates/message/messages_options.html',
						resolve: {
							messagesPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'messagesPage',
									files: [
										'js/services/messagesService.js',
										'js/controllers/message/message-option.js'
									]
								})
							}
						}
					}
				}
			})
			.state('tabsController.messageDetail', {
				url: '/message-detail',
				views: {
					'tab6': {
						templateUrl: 'templates/message/messageDetail.html',
						resolve: {
							messagesPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'messagesPage',
									files: [
										'js/services/messagesService.js',
										'js/controllers/message/message-detail.js'
									]
								})
							}
						}
					}
				},
				cache: false
			})
			// Your Doctor
			.state('tabsController.yourdoctor', {
				url: '/yourdoctor',
				views: {
					'tab7': {
						templateUrl: 'templates/yourdoctor/yourdoctor.html',
						resolve: {
							yourDoctorPageCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'yourdoctorPage',
									files: [
										'js/services/yourdoctorService.js',
										'js/controllers/yourdoctor/yourdoctor.js'
									]
								})
							}
						}

					}
				}
			})

			// plan Information
			.state('tabsController.planInformation', {
				url: '/planInformation',
				views: {
					'tab3': {
						templateUrl: 'templates/myBenefits/planInformation/planInformation.html',

						resolve: {
							planInformationCtrl: function ($ocLazyLoad) {
								console.log("testing 123123")
								return $ocLazyLoad.load({
									name: 'planInformation',
									files: [
										'js/services/myBenefits/planInformation/plan-information-service.js',
										'js/controllers/myBenefits/planInformation/plan-information.js',
										'js/filters/percent-filter.js'
									]
								})
							}
						}


					}
				}
			})
			// My Insurance Card
			.state('tabsController.insurance', {
				url: '/insurance',
				views: {
					'tab3': {
						templateUrl: 'templates/myBenefits/insuranceInfo/insurance-card.html',
						resolve: {
							insuranceCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'insurance',
									files: [
										'js/services/myBenefits/insuranceCard/insurance-card-service.js',
										'js/controllers/myBenefits/insuranceCard/insurance-card.js',
										'js/services/profileService.js'
									]
								})
							}
						}

					}
				}
			})
			.state('tabsController.insuranceCardPhotos', {
				url: '/insuranceCardPhotos',
				views: {
					'tab3': {
						templateUrl: 'templates/myBenefits/insuranceInfo/insurance-card-photos.html',
						resolve: {
							insuranceCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'insurance-photo',
									files: [
										'js/controllers/myBenefits/insuranceCard/insurance-card-photos.js'
									]
								})
							}
						}
					}
				},
				cache: false
			})
			.state('tabsController.camera', {
				url: '/camera',
				views: {
					'tab3': {
						templateUrl: 'templates/myBenefits/insuranceInfo/camera-gallery.html',
						resolve: {
							insuranceCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'insurance-photo',
									files: [
										'js/controllers/myBenefits/insuranceCard/camera-gallery.js'
									]
								})
							}
						}

					}
				},
				cache: false
			})
			// Rx
			.state('tabsController.rx', {
				url: '/rx',
				views: {
					'tab3': {
						templateUrl: 'templates/myBenefits/rx/rx.html',
						resolve: {
							insuranceCtrl: function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name: 'insurance',
									files: [
										'js/services/myBenefits/rx/rx-service.js',
										'js/controllers/myBenefits/rx/rx.js'
									]
								})
							}
						}

					}
				}
			})

			.state('tabsController', {
				url: '/tabs-menu',
				templateUrl: 'templates/tabsController.html',
				abstract: true

			})
	});
