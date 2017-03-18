//register and login routes

var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy  = require('passport-twitter').Strategy;

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
    				/*
    				var newUser = new User();
    				newUser.facebook.id = profile.id;
    				newUser.facebook.token = accessToken;
    				newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
    				newUser.facebook.email = profile.emails[0].value;  
					*/
					
					var newUser = new User({
						firstName: profile.name.givenName,
						lastName: profile.name.familyName,
						username: profile.name.givenName + profile.name.familyName,
						password: "password",
						email: profile.emails[0].value,
						facebookId: profile.id,
						facebookToken: accessToken
					});

    				newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        console.log(newUser._id);
                        return done(null, newUser);
                    });	
    			}
    		});
    	});
	}
));

router.get('/auth/twitter', passport.authenticate('twitter'));

// handle the callback after twitter has authenticated the user
router.get('/auth/twitter/callback', passport.authenticate('twitter', {
            successRedirect : '/twittersuccess.html',
            failureRedirect : '/users/login'
}));

passport.use(new TwitterStrategy({

        consumerKey     : configAuth.twitterAuth.consumerKey,
        consumerSecret  : configAuth.twitterAuth.consumerSecret,
        callbackURL     : configAuth.twitterAuth.callbackURL

    },
    function(token, tokenSecret, profile, done) {

        // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Twitter
        process.nextTick(function() {
r
            User.findOne({ 'twitter.id' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user, create them
                    var newUser                 = new User();

                    /*
                    // set all of the user data that we need
                    newUser.twitter.id          = profile.id;
                    newUser.twitter.token       = token;
                    newUser.twitter.username    = profile.username;
                    newUser.twitter.displayName = profile.displayName;
                    */

                    var newUser = new User({
						          firstName: profile.displayName,
						          lastName: profile.displayName,
						          username: profile.username,
						          password: "password",
						          email: "email@email.com",
						          TwitterId: profile.id,
						          TwitterToken: token
					          });

                    // save our user into the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
		});
	}
));

module.exports = router;