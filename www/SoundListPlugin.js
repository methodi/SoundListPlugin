
var SoundListPlugin = function(){}

SoundListPlugin.prototype.link = function(options) {
    successCallback = function() {};
	errorCallback = function() {};
    cordova.exec(successCallback, errorCallback, "SoundListPlugin", "link", [options]);
};

if(!window.plugins) {
    window.plugins = {};
}
if(!window.plugins.soundListPlugin) {
    window.plugins.soundListPlugin = new SoundListPlugin();
}

if(typeof module != 'undefined' && module.exports) {
	module.exports = SoundListPlugin;
}
