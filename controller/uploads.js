var models = require('../models');
var gm = require('../services/graphicsmagick/resize.js');

exports.index = function(req, res, next) {
	gm.resizeImage();
    res.render('uploads/uploadImage');
};