//register and login routes

var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var User = require("../models/User");
var configAuth = require('../../config/auth');

// Get Register
router.get('/register', function(req, res){
//	res.render('register');
	console.log("GET to /users/register");
});

// Get Login
router.get('/login', function(req, res){
//	res.render('login');
	console.log("GET to /users/login");
});

// Get Register
router.post('/register', function(req, res){
//	res.render('register');
	console.log("POST to /users/register");

	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
	var email = req.body.email;

	// Validation
	req.checkBody('firstName', 'First name is required').notEmpty();
	req.checkBody('lastName', 'Last name is required').notEmpty();
	req.checkBody('username', 'User name is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();

	var errors = req.validationErrors();

	if(errors) 
		console.log("There was an error.");
	
	else {
		console.log("Success!");

		var newUser = new User({
			firstName: firstName,
			lastName: lastName,
			username: username,
			password: password,
			email: email
		});
	
		User.createUser(newUser, function(err, user) {
			if(err)
				throw err;
			console.log(user);
		});

		req.flash("success_msg", "You are now registered and can now login.");

		res.redirect("/users/login");		
	}
});

passport.use(new LocalStrategy(
	function(username, password, done) {
  		User.getUserByUsername(username, function(err, user){
   			if(err) throw err;
   			if(!user){
   				return done(null, false, {message: 'Unknown User'});
   			}

   		User.comparePassword(password, user.password, function(err, isMatch){
   			if(err) throw err;
   			if(isMatch){
   				return done(null, user);
   		} 
   			else {
   				return done(null, false, {message: 'Invalid password'});
   			}
   		});
   	});
}));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.getUserById(id, function(err, user) {
    	done(err, user);
  	});
});

router.post('/login',
	passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
  	function(req, res) {
  		console.log("POST to /users/login");
    	res.redirect('/');
});

router.get('/logout', function(req, res){
	console.log("GET to /users/logout");

	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect : '/facebooksuccess.html',
    failureRedirect : '/users/login'
}));

passport.use(new FacebookStrategy({
    	clientID: configAuth.facebookAuth.clientID,
    	clientSecret: configAuth.facebookAuth.clientSecret,
    	callbackURL: configAuth.facebookAuth.callbackURL,
    	'profileFields' : ["emails", "displayName", "name"]
	},
  	function(accessToken, refreshToken, profile, done) {
    	process.nextTick(function(){
    		User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
    			if(err)
    				return done(err);
    			if(user)
    				return done(null, user);
    			else {
    				var newUser = new User();
    				newUser.facebook.id = profile.id;
    				newUser.facebook.token = accessToken;
    				newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
    				newUser.facebook.email = profile.emails[0].value;  

    				newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
    			}
    		});
    	});
	}
));

module.exports = router;