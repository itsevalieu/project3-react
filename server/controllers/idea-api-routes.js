var express = require("express");
var Idea = require("../models/Idea");

var router = express.Router();

//Test: Get all ideas and show in api
router.get("/get", function(req, res) {
	Idea.find({})
	.populate({
		path: "author techStack projects",
//eg:	match: { age: { $gte: 21 }},
//		select: "username"
//eg:	options: { limit: 5 }
	})
	.populate("techStack")
	.exec()
	.then(function(idea) {
		console.log("Find all ideas.");
		res.json(idea);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Post new idea to api
router.post('/post', function(req, res) {
	Idea.create({
		name: req.body.name,
		description: req.body.description,
		rating: req.body.rating,
		githubExample: req.body.githubExample,
		timeFrame: req.body.timeFrame,
		author: req.user._id, //need to check if correct
	})
	.then(function(idea) {
		console.log("Created new idea.");
		res.json(idea);
	}).catch(function(err) {
		res.send(err);
	});
});
//===============

// // New note creation via POST route
// app.post("/submit", function(req, res) {
//   // Use our Note model to make a new note from the req.body
//   var newNote = new Note(req.body);
//   // Save the new note to mongoose
//   newNote.save(function(error, doc) {
//     // Send any errors to the browser
//     if (error) {
//       res.send(error);
//     }
//     // Otherwise
//     else {
//       // Find our user and push the new note id into the User's notes array
//       User.findOneAndUpdate({}, { $push: { "notes": doc._id } }, { new: true }, function(err, newdoc) {
//         // Send any errors to the browser
//         if (err) {
//           res.send(err);
//         }
//         // Or send the newdoc to the browser
//         else {
//           res.send(newdoc);
//         }
//       });
//     }
//   });
// });

// // Route to see what user looks like WITH populating
// app.get("/populateduser", function(req, res) {
//   // Prepare a query to find all users..
//   User.find({})
//     // ..and on top of that, populate the notes (replace the objectIds in the notes array with bona-fide notes)
//     .populate("notes")
//     // Now, execute the query
//     .exec(function(error, doc) {
//       // Send any errors to the browser
//       if (error) {
//         res.send(error);
//       }
//       // Or send the doc to the browser
//       else {
//         res.send(doc);
//       }
//     });
// });

//==============


//Test: Update idea and show in api
router.put('/put/:id', function(req, res) {
	Idea.findOneAndUpdate({
		_id: req.params.id
	},
	{	$set: { 
			name: req.body.name,
			description: req.body.description,
			rating: req.body.rating,
			githubExample: req.body.githubExample,
			timeFrame: req.body.timeFrame
		},
		$push: { 
			"author": req.body.author,
			"techStack": req.body._id,
			"projects": req.body._id
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

//Test: Delete idea and show in api
router.delete('/delete/:id', function(req, res) {
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
