// var express = require("express");
// var User = require("../models/User");
// var Idea = require("../models/Idea");
// var Project = require("../models/Project");
// var Tech = require("../models/Tech");

// var router = express.Router();

// //Test: Get all data and show in api
// router.get('/api', function(req, res) {
	
// 	var data = [];
	
// 	User.find({})
// 	.exec()
// 	.then(function(user) {
// 		console.log("Find all users.");
// 		console.log(user);
// 		//res.json(user);
// 		data.push(user);
// 	}).catch(function(err) {
// 		res.send(err);
// 	});
	
// 	Idea.find({})
// 	.exec()
// 	.then(function(idea) {
// 		console.log("Find all ideas.");
// 		console.log(idea);
// 		//res.json(idea);
// 		data.push(idea);
// 	}).catch(function(err) {
// 		res.send(err);
// 	});

// 	Project.find({})
// 	.exec()
// 	.then(function(project) {
// 		console.log("Find all projects.");
// 		console.log(project);
// 		//res.json(project);
// 		data.push(project);
// 	}).catch(function(err) {
// 		res.send(err);
// 	});

// 	Tech.find({})
// 	.exec()
// 	.then(function(tech) {
// 		console.log("Find all techs.");
// 		console.log(tech);
// 		//res.json(tech);
// 		data.push(tech);
// 		res.json(data);
// 	}).catch(function(err) {
// 		res.send(err);
// 	});
// 	console.log("Finish queries:");
// 	console.log(data);
// });

// module.exports = router;
