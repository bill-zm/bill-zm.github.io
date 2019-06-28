cordova.define('cordova/plugin_list', function(require, exports, module) {
               module.exports = [
                                 {
                                 "id": "com.moke.testPlugin.TestPlugin",
                                 "file": "plugins/com.moke.testPlugin/www/TestPlugin.js",
                                 "pluginId": "com.moke.testPlugin",
                                 "clobbers": [
                                              "TestPlugin"
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
                                 "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
                                 "pluginId": "cordova-plugin-camera",
                                 "clobbers": [
                                              "CameraPopoverHandle"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-dialogs.notification",
                                 "file": "plugins/cordova-plugin-dialogs/www/notification.js",
                                 "pluginId": "cordova-plugin-dialogs",
                                 "merges": [
                                            "navigator.notification"
                                            ]
                                 }
                                 ];
               module.exports.metadata = {
               "com.moke.testPlugin": "0.0.1",
               "cordova-plugin-camera": "4.0.3",
               "cordova-plugin-dialogs": "2.0.1",
               "cordova-plugin-whitelist": "1.3.3"
               };
               });
