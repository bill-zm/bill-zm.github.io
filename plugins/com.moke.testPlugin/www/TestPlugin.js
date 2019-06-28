cordova.define("com.moke.testPlugin.TestPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.pushBleControl = function (arg0, success, error) {
    exec(success, error, 'CustomPlugin', 'pushBleControl', [arg0]);
};
});
