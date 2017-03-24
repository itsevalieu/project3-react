var express = require("express");
var Project = require("../models/Project");

var router = express.Router();

//Test: Get all projects and show in api
router.get("/get", function(req, res) {
	Project.find({})
	.populate("leader team techStack parentIdea")
	.exec()
	.then(function(project) {
		console.log("Find all projects.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Post new project to api
router.post("/post", function(req, res) {
	Project.create({
		name: req.body.name,
		completed: req.body.completed,
		currentProject: req.body.currentProject,
		githubSource: req.body.githubSource,
		leader: req.body.leader,
		team: req.body.team,
		techStack: req.body.techStack,
		parentIdea: req.body.parentIdea
	})
	.then(function(project) {
		console.log("Created new project.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Update project and show in api
router.put("/put/:id", function(req, res) {
	console.log("Call put.");
	Project.findOneAndUpdate({
		_id: req.params.id
	},
	{ 	$set: { 
			name: req.body.name,
			completed: req.body.completed,
			currentProject: req.body.currentProject,
			githubSource: req.body.githubSource,
			leader: req.body.leader,
			parentIdea: req.body.parentIdea
		},
		$push: {
			team: req.body.team,
			techStack: req.body.techStack,
		}
	}, {new: true, upsert: true})
	.exec()
	.then(function(project) {
		console.log("Updated project.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Patch and update project and show in api
router.patch("/patch/:id", function(req, res) {
	console.log("Call patch.");
	Project.update({
		_id: req.params.id
	},
	{ 	$set: { 
			name: req.body.name,
			completed: req.body.completed,
			currentProject: req.body.currentProject,
			githubSource: req.body.githubSource,
			leader: req.body.leader,
			parentIdea: req.body.parentIdea
		},
		$push: {
			team: req.body.team,
			techStack: req.body.techStack,
		}
	}, {new: true, upsert: true})
	.exec()
	.then(function(project) {
		console.log("Updated/patched project.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});

//Patch for leader
router.patch("/patch/leader/:id", function(req, res) {
	console.log("Call patch.");
	Project.update({
		_id: req.params.id
	},
	{ 	
		$set: { 
			leader: req.body.leader
		}
	}, {new: true, upsert: true})
	.exec()
	.then(function(project) {
		console.log("Patched project by changing leader.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});
//Patch for team
router.patch("/patch/team/:id", function(req, res) {
	console.log("Call patch.");
	Project.update({
		_id: req.params.id
	},
	{ 	
		$push: {
			team: req.body.team
		}
	}, {new: true, upsert: true})
	.exec()
	.then(function(project) {
		console.log("Patched project by adding new team member.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});

//Patch for techStack
router.patch("/patch/techStack/:id", function(req, res) {
	console.log("Call patch.");
	Project.update({
		_id: req.params.id
	},
	{ 	
		$push: {
			techStack: req.body.techStack
		}
	}, {new: true, upsert: true})
	.exec()
	.then(function(project) {
		console.log("Patched project by adding new techStack.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Delete project and show in api
router.delete("/delete/:id", function(req, res) {
	Project.findOneAndRemove({
		_id: req.params.id
	})
	.exec()
	.then(function(project) {
		console.log("Deleted project.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});


module.exports = router;
