angular.module('app.factories',[]).factory('deviceType',function(){
	return {
  		deviceInformation: ionic.Platform.device(),
  		isWebView : ionic.Platform.isWebView(),
  		isIPad: ionic.Platform.isIPad(),
  		isIOS : ionic.Platform.isIOS(),
  		isAndroid : ionic.Platform.isAndroid(),
  		isWindowsPhone : ionic.Platform.isWindowsPhone(),
  		currentPlatform : ionic.Platform.platform(),
  		currentPlatformVersion : ionic.Platform.version()
  	}
});