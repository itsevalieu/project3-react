var express = require("express");
var User = require("../models/User");
var Idea = require("../models/Idea");
var Project = require("../models/Project");
var Tech = require("../models/Tech");

var router = express.Router();

//Test: Get all data and show in api
router.get('/api', function(req, res) {
	var data = [];
	User.find({})
	.exec()
	.then(function(user) {
		console.log("Find all users.");
		console.log(user);
//		res.json(user);
		var one = {
			userData: user
		}
		data.push(one);
	}).catch(function(err) {
		res.send(err);
	});
	
	Idea.find({})
	.exec()
	.then(function(idea) {
		console.log("Find all ideas.");
		//res.json(idea);
				var two = {
			ideaData: idea
		}
		data.push(two);
	}).catch(function(err) {
		res.send(err);
	});

	Project.find({})
	.exec()
	.then(function(project) {
		console.log("Find all projects.");
		//res.json(project);
		data.push(project);
	}).catch(function(err) {
		res.send(err);
	});

	Tech.find({})
	.exec()
	.then(function(tech) {
		console.log("Find all techs.");
		//res.json(tech);
		data.push(tech);
	}).catch(function(err) {
		res.send(err);
	});

	console.log(data);
	res.json(data);
});

module.exports = router;
