var express = require('express');
var uploads = require('../controller/uploads');
var router = express.Router();

//should be a post
router.get('/', uploads.index);


function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}

module.exports = router;