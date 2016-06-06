// mage
function mage(num, settings, callback) {
var defaults = {
	"location":function() {
		document.body.getElementById('images');
	},
	"tag":"image",
	"start":1,
	"path":"./images/image",
	"imagetag":"innerimage",
	"format":".png"
};
var types = ["location", "tag", "start", "path", "imagetag", "format"];
for (var i = 0; i < types.length; i++) {
	if (typeof settings[(types[i])] == undefined) {
		settings[(types[i])] = defaults[(types[i])];
	}
}
for (var i = 0; i < num; i++) {
	(settings.location).insertAdjacentHTML("afterBegin","<div id=\"" + settings.tag + "\"><img id=\"" + settings.imagetag + "\" src=\"" + settings.path + (i + settings.start) + settings.format + "\"></div>\n");
}
callback(settings.location);
}
document.addEventListener("load", mage(7,{"location":function(){document.getElementsByClassName("contentmain")[0];},"tag": "photo", "start":1, })); 