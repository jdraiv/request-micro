var express = require('express');

var app = express();

var ip = require('ip');

var useragent = require('useragent');
useragent(true);


//Setting views
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");




//Basic Router

app.get('/',function(req,res){
  res.render('home');
});


app.get('/data',function(req,res){

  var ipInfo = ip.address();
  var userLanguage =  req.headers["accept-language"].substring(0,5);;

  //Get Operating system using useragent
  var agent = useragent.parse(req.headers['user-agent']);
  agent.os.toString();

  var operatingSystem = agent.os.family;


  var result = {"IpAddress": ipInfo,"Language": userLanguage,"Operating System": operatingSystem};
  res.send(result);

});


var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server running');
});
