// mage
function mage(num, settings, callback) {
var defaults = {
	"location":function() {
		document.body.getElementById('images');
	},
	"tag":"image",
	"start":1,
	"imagetag":"innerimage",
	"format":".png"
}
var types = ["location", "tag", "start", "imagetag", "format"];
for (var i = 0; i < types.length; i++) {
	if (typeof settings[(types[i])] == undefined) {
		settings[(types[i])] = defaults[(types[i])];
	}
}
for (var i = 0; i < num; i++) {
	(settings.location).insertAdjacentHTML("afterBegin","<div id=\"" + settings.tag + "\"><img id=\"" + settings.imagetag + "\" src=\"./photos/photo" + (i + settings.start) + settings.format + "\"></div>\n");
}
}