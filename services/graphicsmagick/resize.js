var fs = require('fs');
var gm = require('gm');


exports.resizeImage = function(req, res, next) {
	console.log("resizing image")
	gm('./img.png')
		.resize(240, 240)
		.noProfile()
		.write('./img_backup.jpg', function (err) {
		  if (!err) console.log('done');
		});
}