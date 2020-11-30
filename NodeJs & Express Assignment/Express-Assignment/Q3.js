var express = require("express");
var app = express();

app.get('/home', function(req, res){
  res.send("Hello World");
});

// var port = process.argv.slice(2);
let port = 3000;

app.listen(port);
console.log("port no:"+port);