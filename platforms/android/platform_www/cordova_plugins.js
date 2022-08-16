cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "appd-plugin-eum-mobile.ADEUMMobilePlugin",
    "file": "plugins/appd-plugin-eum-mobile/www/ADEUMMobilePlugin.js",
    "pluginId": "appd-plugin-eum-mobile",
    "clobbers": [
      "ADEUMMobilePlugin"
    ]
  },
  {
    "id": "cordova-plugin-actionsheet.ActionSheet",
    "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
    "pluginId": "cordova-plugin-actionsheet",
    "clobbers": [
      "window.plugins.actionsheet"
    ]
  },
  {
    "id": "cordova-plugin-app-preferences.apppreferences",
    "file": "plugins/cordova-plugin-app-preferences/www/apppreferences.js",
    "pluginId": "cordova-plugin-app-preferences",
    "clobbers": [
      "plugins.appPreferences"
    ]
  },
  {
    "id": "cordova-plugin-app-version.AppVersionPlugin",
    "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
    "pluginId": "cordova-plugin-app-version",
    "clobbers": [
      "cordova.getAppVersion"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-background-mode.BackgroundMode",
    "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
    "pluginId": "cordova-plugin-background-mode",
    "clobbers": [
      "cordova.plugins.backgroundMode",
      "plugin.backgroundMode"
    ]
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-datepicker.DatePicker",
    "file": "plugins/cordova-plugin-datepicker/www/android/DatePicker.js",
    "pluginId": "cordova-plugin-datepicker",
    "clobbers": [
      "datePicker"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.androidFileSystem",
    "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransferError",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransferError"
    ]
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransfer",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransfer"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Promise",
    "file": "plugins/cordova-plugin-googlemaps/www/Promise.js",
    "pluginId": "cordova-plugin-googlemaps"
  },
  {
    "id": "cordova-plugin-googlemaps.BaseClass",
    "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.BaseArrayClass",
    "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LatLng",
    "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LatLngBounds",
    "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.VisibleRegion",
    "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Location",
    "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.CameraPosition",
    "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Polyline",
    "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Polygon",
    "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Marker",
    "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
    "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Circle",
    "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.TileOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.GroundOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Common",
    "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.encoding",
    "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.spherical",
    "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.poly",
    "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Geocoder",
    "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LocationService",
    "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Map",
    "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.event",
    "file": "plugins/cordova-plugin-googlemaps/www/event.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.MapTypeId",
    "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.KmlOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.KmlLoader",
    "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Environment",
    "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.MarkerCluster",
    "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Cluster",
    "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.geomodel",
    "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.commandQueueExecutor",
    "file": "plugins/cordova-plugin-googlemaps/www/commandQueueExecutor.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.pluginInit",
    "file": "plugins/cordova-plugin-googlemaps/www/pluginInit.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.StreetViewPanorama",
    "file": "plugins/cordova-plugin-googlemaps/www/StreetViewPanorama.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Overlay",
    "file": "plugins/cordova-plugin-googlemaps/www/Overlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Thread",
    "file": "plugins/cordova-plugin-googlemaps/www/Thread.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.InlineWorker",
    "file": "plugins/cordova-plugin-googlemaps/www/InlineWorker.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.googlemaps-cdv-plugin",
    "file": "plugins/cordova-plugin-googlemaps/www/plugin-loader-for-android_ios.js",
    "pluginId": "cordova-plugin-googlemaps",
    "clobbers": [
      "plugin.google.maps"
    ]
  },
  {
    "id": "cordova-plugin-googlemaps.js_CordovaGoogleMaps",
    "file": "plugins/cordova-plugin-googlemaps/www/js_CordovaGoogleMaps-for-android_ios.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-themeablebrowser.themeablebrowser",
    "file": "plugins/cordova-plugin-themeablebrowser/www/themeablebrowser.js",
    "pluginId": "cordova-plugin-themeablebrowser",
    "clobbers": [
      "cordova.ThemeableBrowser"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Location",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.location.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.location"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.bluetooth.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.bluetooth"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.wifi.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.wifi"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.camera.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.camera"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.notifications.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.notifications"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.microphone.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.microphone"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.contacts.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.contacts"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.calendar.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.calendar"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_NFC",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.nfc.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.nfc"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_External_Storage",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.external_storage.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.external_storage"
    ]
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
    "clobbers": [
      "launchnavigator"
    ]
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
    "clobbers": [
      "localforage"
    ]
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LaunchNavigator",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/android/launchnavigator.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
    "merges": [
      "launchnavigator"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "appd-plugin-eum-mobile": "1.0.0",
  "com.googlemaps.ios": "3.8.0",
  "cordova-plugin-actionsheet": "2.3.3",
  "cordova-plugin-app-preferences": "0.99.4",
  "cordova-plugin-app-version": "0.1.9",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-background-mode": "0.7.3",
  "cordova-plugin-camera": "4.1.0",
  "cordova-plugin-console": "1.1.0",
  "cordova-plugin-datepicker": "0.9.3",
  "cordova-plugin-dialogs": "2.0.2",
  "cordova-plugin-file": "6.0.2",
  "cordova-plugin-file-transfer": "1.7.1",
  "cordova-plugin-geolocation": "4.0.2",
  "cordova-plugin-googlemaps": "2.7.1",
  "cordova-plugin-inappbrowser": "3.2.0",
  "cordova-plugin-ionic-webview": "4.2.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-themeablebrowser": "0.2.17",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova.plugins.diagnostic": "5.0.2",
  "ionic-plugin-keyboard": "2.2.1",
  "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.4",
  "cordova-android-support-gradle-release": "3.0.1"
};
// BOTTOM OF METADATA
});