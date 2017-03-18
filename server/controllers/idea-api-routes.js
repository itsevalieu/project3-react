var express = require("express");
var Idea = require("../models/Idea");

var router = express.Router();

//Test: Get all ideas and show in api
router.get("/get", function(req, res) {
	Idea.find({})
	.populate("author techStack projects"
//eg:	match: { age: { $gte: 21 }},
//eg:	select: "username"
//eg:	options: { limit: 5 }
	)
	.exec()
	.then(function(idea) {
		console.log("Find all ideas.");
		res.json(idea);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Post new idea to api
router.post("/post", function(req, res) {
	//console.log("posting");
	//console.log(req.body);
	Idea.create({
		name: req.body.name,
		description: req.body.description,
		rating: req.body.rating,
		githubExample: req.body.githubExample,
		timeFrame: req.body.timeFrame,
		author: req.body.author,
		techStack: req.body.tech,
		projects: req.body.project
	})
	.then(function(idea) {
		console.log("Created new idea.");
		res.json(idea);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Update idea and show in api
router.put("/put/:id", function(req, res) {
	Idea.findOneAndUpdate({
		_id: req.params.id
	},
	{ 	$set: { 
			name: req.body.name,
			description: req.body.description,
			rating: req.body.rating,
			githubExample: req.body.githubExample,
			timeFrame: req.body.timeFrame,
			author: req.body.author
		},
		$push: { 
			techStack: req.body.techStack,
			projects: req.body.projects
		}
	}, {upsert: true})
	.exec()
	.then(function(idea) {
		console.log("Updated idea.");
		res.json(idea);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Patch and update idea and show in api
router.patch("/patch/:id", function(req, res) {
	//console.log(req.body);
	Idea.update({
		_id: req.params.id
	},
	{	$set: { 
			name: req.body.name,
			description: req.body.description,
			rating: req.body.rating,
			githubExample: req.body.githubExample,
			timeFrame: req.body.timeFrame,
			author: req.body.author
		},
		$push: { 
			techStack: req.body.techStack,
			projects: req.body.projects
		}
	}, {new: true, upsert: true})
	.exec()
	.then(function(idea) {
		console.log("Updated/patched idea.");
		res.json(idea);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Delete idea and show in api
router.delete("/delete/:id", function(req, res) {
	Idea.findOneAndRemove({
		_id: req.params.id
	})
	.exec()
	.then(function(idea) {
		console.log("Deleted idea.");
		res.json(idea);
	}).catch(function(err) {
		res.send(err);
	});
});


module.exports = router;
