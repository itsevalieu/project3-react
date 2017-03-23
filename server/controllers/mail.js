var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'nodemailertest12@gmail.com',
        pass: 'Asdf;lkj!'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});

router.get('/send',function(req,res){
  	console.log("GET to /email/send");
});

router.post('/send',function(req,res){

	var mailOptions={
    	to : req.body.to,
    	subject : req.body.subject,
    	text : req.body.text
  	}
  
  	console.log(mailOptions);
  
  	smtpTransport.sendMail(mailOptions, function(error, response){
  		if(error) {
        	console.log(error);
    		res.end("error");
   		}
   		else {
        	console.log("Message sent: " + response.message);
    		res.end("sent");
    	}
	});
});

module.exports = router;