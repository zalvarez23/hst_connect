'use strict';
angular.module('app.filters', [])

.filter('orderObjectBy', function(){
	return function(array, attribute) {

		var sort_by = function(field, reverse, primer){
			var key = primer ? 
			function(x) {return primer(x[field])} : 
			function(x) {return x[field]};

			reverse = !reverse ? 1 : -1;
			return function (a, b) {
				return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
			} 
		};

		if(attribute == "QualityRating") {
			array.sort(sort_by(attribute, false, parseFloat));
			array = array.reverse();
		} else if (attribute == "FirstName") {
			array.sort(sort_by(attribute, false, function(a){return a.toUpperCase()}));
		} else if (attribute == "Medical_GroupName") {
			array.sort(sort_by(attribute, false, function(a){return a.toUpperCase()}));
		} else {
			array.sort(sort_by(attribute, false, parseFloat));
		}

		return array;
	}
})

.filter('percentage', function ($filter) {
	return function (input) {
    	return $filter('number')(input * 100) + '%';
  	};
})

.filter('unreadMsgCount', function ($filter) {
	return function (arrayOfMsg) {

		var unreadMsgCount = 0;
		angular.forEach(arrayOfMsg, function(value, key) {
			console.log(key + ': ' + value);

			if(!value.IsRead) {
				unreadMsgCount++;
			}
		});
		return unreadMsgCount;
	};
})

.filter("htmlSafe", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    };
}])

