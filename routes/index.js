var express = require('express');
var router = express.Router();
var controller = require('../controller');

//routes
var users = require('./users');
var uploads = require('./uploads');

module.exports = function(app, passport) {

	app.use('/', router);

	/* seperate into static controller? */
	router.get('/', controller.index);

	router.get('/signup', controller.signup);
	router.post('/signup', passport.authenticate('local-signup', {
	        successRedirect : '/home', // redirect to the secure profile section
	        failureRedirect : '/signup', // redirect back to the signup page if there is an error
	        failureFlash : true // allow flash messages
	}));

	router.get('/login', controller.login);
	router.post('/login', passport.authenticate('local-login', {
	        successRedirect : '/home', // redirect to the secure profile section
	        failureRedirect : '/login', // redirect back to the signup page if there is an error
	        failureFlash : true // allow flash messages
	}));

	router.use('/users', users);

	router.use('/uploads', uploads);

	app.all('*', function(req, res) {
		res.sendStatus(404);
	});

}

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}