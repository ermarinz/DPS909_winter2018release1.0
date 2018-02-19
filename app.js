var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PNF = require('google-libphonenumber').PhoneNumberFormat;
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const path = require('path');
const port = 3000;

function cleanString(str){
	return str.replace(/%20/g, " ");
	
}
module.exports = cleanString;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/phonenumbers/parse/text/*', function(req,res){
	//formate the get request into something usable byut removing %20 and brackets/parenthesis
	var str = cleanString(req.url);
	
	try{
		//find the phone number
		str = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.exec(str);
		
		//parse the phonenumber
		var phoneNumber = phoneUtil.parse(str[0], 'US');
		var formatPhoneNumber = phoneUtil.format(phoneNumber, PNF.NATIONAL)
		//display phonenumber on screen
	
		var jsonPhoneNumber = {
			"phoneNumber": formatPhoneNumber,
		}
		
		res.status(200).json(jsonPhoneNumber);
		
		
		
		console.log(formatPhoneNumber);
	}
	catch(err){
		console.log("failed to find phone number");
		res.status(500).send("no phonenumber!");
	}	
	
});

app.post('/api/phonenumbers/parse/file', function(req,res){
	var str = req.body.phoneNumber;
	var phoneNumber = phoneUtil.parse(str, 'US');
	var formatPhoneNumber = phoneUtil.format(phoneNumber, PNF.INTERNATIONAL);
	
	var jsonPhoneNumber = {
			"phoneNumber": formatPhoneNumber,
		}
	
	res.status(200).json(jsonPhoneNumber);
	console.log(formatPhoneNumber);
});

app.get("/api/phonenumbers/demo", function(req, res) {
	// send the html view with our form to the client
	res.sendFile(path.join(__dirname, "/views/demo.html"));
});

app.post("/api/phonenumbers/demo/URL", bodyParser.text(), function(req, res) {
	var urlString = req.body.trim().substring(4);
	res.redirect("/api/phonenumbers/parse/text/" + urlString);
});

app.listen(port);

console.log('starting on port ' +port);