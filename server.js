// Include Server Dependencies
// -------------------------------------------------
// var React = require('react');

var express = require("express");
var bodyParser = require("body-parser");
var expressValidator = require('express-validator');
var cookieParser = require("cookie-parser");
var flash = require("connect-flash");
var LocalStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
// var morgan = require("morgan");
var passport = require("passport");
var path = require("path");

var session = require("express-session");
var controllers = require ('./server/controllers');


// Create Instance of Express
// -------------------------------------------------
var app = express();
var PORT = process.env.PORT || 3000;

//connection to socket.io chat server
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Set Up Express App to Handle Data Parsing
// -------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());

// Static Directory
// -------------------------------------------------
app.use(express.static(path.join(__dirname, "src")));

// MongoDB Configuration
// -------------------------------------------------
mongoose.Promise = global.Promise;
var mongoURL = process.env.MONGODB_URI || "mongodb://localhost/codespiration";
mongoose.connect(mongoURL);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport Initialization
// -------------------------------------------------
// Francis' part

app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Middleware for Routes
// -------------------------------------------------
var users = require('./server/controllers/user.js');
var routes = require('./server/controllers/index.js');
var ideaRoutes = require("./server/controllers/idea-api-routes.js");
var projectRoutes = require("./server/controllers/project-api-routes.js");
var techRoutes = require("./server/controllers/tech-api-routes.js");
var userRoutes = require("./server/controllers/user-api-routes.js");

app.use('/', routes);
// app.use(function(req, res, next()) {
//   passport.authenticate(req, function(err, user) {
//     if (!user) {
//       res.json({message: 'No user found'});
//     } else {
//       next();
//     }
//   });
// });

app.use('/users', users);

//app.use("/user/:id/", dashboardRoutes);
app.use("/idea", ideaRoutes);
app.use("/project", projectRoutes);
app.use("/tech", techRoutes);
app.use("/user", userRoutes);

// app.use("/", controllers);
// app.use(express.static(path.join(__dirname, 'src')));
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

// app.get('/about', function (req, res) {
//     console.log('hello');
// });

// Listener
// -------------------------------------------------
io.on('connection', function(socket){
  console.log('A user has connected to chat');

  socket.on('disconnect', function(){
    console.log('A user has disconnected from chat');
  });
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

http.listen(4000, function(){
  console.log("chat system listening on PORT: 4000");
});
