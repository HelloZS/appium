if (process.env.DEV && !process.env.SAUCE_LABS) {
  exports.iosTestApp = "sample-code/apps/TestApp-iphonesimulator.app";
  exports.iosUICatalogApp = "sample-code/apps/UICatalog-iphonesimulator.app";
  exports.iosWebviewApp = "sample-code/apps/WebViewApp/build/release-iphonesimulator/WebViewApp.app";
  exports.iosUICatalogApp = "sample-code/apps/UICatalog/build/release-iphonesimulator/UICatalog.app";
  exports.androidApiDemos = "sample-code/apps/ApiDemos/bin/ApiDemos-debug.apk";
  exports.selendroidTestApp = "sample-code/apps/selendroid-test-app.apk";
} else {
  // TODO: Change thes URL's to updated locations
  exports.iosTestApp = "https://www.dropbox.com/s/8mwhcdzztmwkl27/TestApp-iphonesimulator.zip?dl=1";
  exports.iosUICatalogApp = "http://appium.github.io/appium/assets/TestApp7.1.app.zip";
  exports.iosWebviewApp = "http://appium.github.io/appium/assets/WebViewApp7.1.app.zip";
  exports.iosUICatalogApp = "http://appium.github.io/appium/assets/UICatalog7.1.app.zip";
  exports.androidApiDemos = "http://appium.github.io/appium/assets/ApiDemos-debug.apk";
  exports.selendroidTestApp = "http://appium.github.io/appium/assets/selendroid-test-app-0.10.0.apk";

  exports.iosWebviewAppLocal = "http://localhost:3000/WebViewApp7.1.app.zip";
  exports.androidApiDemosLocal = "http://localhost:3000/ApiDemos-debug.apk";
}
