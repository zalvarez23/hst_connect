angular.module('app.controllers', ['app.services','app.constants'])
.controller('searchDetailsCtrl', ['$scope', '$rootScope', '$ionicPopup', '$location', '$ionicHistory', '$translate', 'CONSTANTS','$ionicLoading','localStorageFactory','$state', 'appConst', '$filter', '$cordovaInAppBrowser', 'searchDetailsService', '$ionicModal',
          function($scope, $rootScope, $ionicPopup, $location, $ionicHistory, $translate,CONSTANTS,$ionicLoading,localStorageFactory,$state, appConst, $filter, $cordovaInAppBrowser, searchDetailsService,$ionicModal) {
    
    //console.log('searchDetails');
    //console.log($scope);
    //console.log($localStorageFactory);
    $scope.newProject = localStorage.getItem('newProject');
    console.log($state.current)
    var colorLow = 'green';
    var colorMid = 'yellow';
    var colorHigh = 'red';
  
    $scope.localStorageFactory = localStorageFactory;
    $scope.getRating = function (rating) {
      // Ref - https://github.com/rajeshwarpatlolla/ionic-ratings
      if(isNaN(rating)) {
        rating = 0;
      }

      var obj = {
        iconOn: 'ion-ios-star',    //Optional
        iconOff: 'ion-ios-star',   //Optional
        iconOnColor: 'rgb(233,203,60)',  //Optional
        iconOffColor:  'rgb(213, 213, 213)',    //Optional
        minRating:1,    //Optional
        readOnly: true,
        callback: function(rating) {    //Mandatory
          
        }
      };

      obj["rating"] = rating;

      return obj;
    }

    localStorageFactory.data.searchDetailObj.destLat = $rootScope.procedurDetail.Latitude;
    localStorageFactory.data.searchDetailObj.destLong = $rootScope.procedurDetail.Longitude;          


    $scope.openUrl = function(){
      var browserOptions = {
        location : "no",
        hardwareback : "no",
        closebuttoncaption : "Done"
      };
      
      var origString = localStorageFactory.data.searchDetailObj.srcLat + ',' + localStorageFactory.data.searchDetailObj.srcLong;
			launchnavigator.navigate([localStorageFactory.data.searchDetailObj.destLat , localStorageFactory.data.searchDetailObj.destLong], {start: origString});
      // var url = 'http://maps.google.com/maps?saddr='+localStorageFactory.data.searchDetailObj.srcLat+','+localStorageFactory.data.searchDetailObj.srcLong+'&daddr='+localStorageFactory.data.searchDetailObj.destLat+','+localStorageFactory.data.searchDetailObj.destLong+'&dirflg=d';
      // $cordovaInAppBrowser.open(url, '_blank', browserOptions)
      // .then(function(event) {
      //   console.log("Success browser opened")
      // })
      // .catch(function(event) {
      //   console.log("Error browser not opened")
      //   console.log(event);
      // });

      return false;
    }

    $scope.getAverageRang = function (min,max) {
      var costWeight = 0;
      $scope.avergecost = ((min+max)/2);
      // $scope.avergecost = ((min+max)/2)/max*100;
      var zone1 = min + ( (max-min) / 3 );
      var zone2 = min + ( (max-min) / 2 );
      var zone3 = max;

      // console.log( 'zone1:', zone1 );
      // console.log( 'zone2:', zone2 );
      // console.log( 'zone3:', zone3 );
      //
      // console.log( 'cost:', $scope.procedurDetail.MemberTotalCost );
      // console.log( 'perc:', ($scope.procedurDetail.MemberTotalCost/max*100)+"%" );
      //
      // console.log( '0:', $scope.procedurDetail.MemberTotalCost < zone1 );
      // console.log( '1:', $scope.procedurDetail.MemberTotalCost > zone1 && $scope.procedurDetail.MemberTotalCost < zone2 );

      var leftpercent = ((($scope.procedurDetail.MemberTotalCost-min)/(max-min))*100);
      if(leftpercent >= 97)
        leftpercent = 97;
      if ( $scope.procedurDetail.MemberTotalCost < zone1 ) {
        return { cost: colorLow, left: leftpercent+"%" };
      }
      else if ( $scope.procedurDetail.MemberTotalCost > zone1 && $scope.procedurDetail.MemberTotalCost < zone2 ) {
        return { cost: colorMid, left: leftpercent+"%" };
      }
      else {
        return { cost: colorHigh, left: leftpercent+"%" };
      }
    };

    var totalCost = $scope.procedurDetail.MemberTotalCost;

    if(totalCost === 0 || totalCost === "0" || totalCost === undefined || totalCost === ""){
      $scope.procedurDetail.CoPay = "";
      $scope.procedurDetail.Deductible = "";
      $scope.procedurDetail.CoInsurance = "";
    }

    $scope.getAverageCost = function (min,max,target) {
      var totalCostWeight = 0;
      var targetVal = target ? target : $scope.procedurDetail.MemberTotalCost;
      var zone1 = min + ( (max-min) / 3 );
      var zone2 = min + ( (max-min) / 2 );
      var zone3 = max;

      // console.log( 'zone1:', zone1 );
      // console.log( 'zone2:', zone2 );
      // console.log( 'zone3:', zone3 );
      //
      // console.log( 'cost:', targetVal );
      //
      // console.log( '0:', targetVal < zone1 );
      // console.log( '1:', targetVal > zone1 && targetVal < zone2 );

      if ( targetVal < zone1 ) {
        return colorLow;
      }
      else if ( targetVal > zone1 && targetVal < zone2 ) {
        return colorMid;
      }
      else {
        return colorHigh;
      }
    };

    // function to initiate modal for info
		$ionicModal.fromTemplateUrl('more-info.html',{
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal){
			$scope.info_modal = modal;
		})
		$scope.showInfo = function(){
			$scope.info_modal.show()
		}
		$scope.closeInfo = function(){
			$scope.info_modal.hide()
    }
    $scope.$on('$destroy', function () {
			$scope.info_modal.remove();
		});

}]);
