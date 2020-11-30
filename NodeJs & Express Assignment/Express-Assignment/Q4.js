var express = require("express");
var app = express();



app.get('/', function(req, res){
  res.send("Hello World");
});

app.get('/time', function(req, res){
  var date = new Date();
  res.send(date.toISOString());
});

app.listen(3000);
console.log("working");