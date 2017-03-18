var express = require("express");
var User = require("../models/User");

var router = express.Router();

//Test: Get all users and show in api
router.get("/get", function(req, res) {
	User.find({})
	.populate("knownTech learnTech submittedIdeas projects")
	.exec()
	.then(function(user) {
		console.log("Find all users.");
		res.json(user);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Post new user to api
router.post("/post", function(req, res) {
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		github: req.body.github
	})
	.then(function(user) {
		console.log("Created new user.");
		res.json(user);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Update user and show in api
router.put("/put/:id", function(req, res) {
	User.findOneAndUpdate({
		_id: req.params.id
	},
	{ 	$set: { 
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
			github: req.body.github
		},
		$push: { 
			knownTech: req.body.knownTech,
			learnTech: req.body.learnTech,
			submittedIdeas: req.body.submittedIdeas,
			projects: req.body.projects
		}
	}, {new: true, upsert: true})
	.exec()
	.then(function(user) {
		console.log("Updated user.");
		res.json(user);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Patch and update project and show in api
router.patch("/patch/:id", function(req, res) {
	User.update({
		_id: req.params.id
	},
	{ 	$set: { 
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
			github: req.body.github
		},
		$push: { 
			knownTech: req.body.knownTech,
			learnTech: req.body.learnTech,
			submittedIdeas: req.body.submittedIdeas,
			projects: req.body.projects
		}
	}, {new: true, upsert: true})
	.exec()
	.then(function(user) {
		console.log("Updated/patched user.");
		res.json(user);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Delete user and show in api
router.delete("/delete/:id", function(req, res) {
	User.findOneAndRemove({
		_id: req.params.id
	})
	.exec()
	.then(function(user) {
		console.log("Deleted user.");
		res.json(user);
	}).catch(function(err) {
		res.send(err);
	});
});


module.exports = router;
