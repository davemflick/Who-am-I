'use strict';

var express = require('express');
var app = express();

//Set connections to pug(html) and css files
app.use(express.static(__dirname +'/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


app.get('/', function (req, res) {
  res.render('body');

})

app.get('/fcc/whoIam/', function (req, res) {
	//Get IP address
 	function getIP(req){
    	return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	}
	let ip = getIP(req);
	//Get language (english)
	let lang = req.headers["accept-language"];
	//Get software
	let software = req.headers["user-agent"];
	// Put it all together for output
	req.params['IP address'] = ip;
	req.params.Language = lang;
	req.params.Software = software;
	res.send(req.params);

})


app.listen(process.env.PORT || 3000, ()=> {
	console.log("The frontend server is running on port 3000 or Heroku");
});