var pug = require('pug');
var express = require('express');
var app = express();

app.set('view engine', 'pug')
//const compiledFunction = pug.compileFile('pugTemplate.pug');

app.get('/', function (req, res) {
  var date = new Date();
  res.render('pugTemplate', { message: "Date: "+date.toDateString() })
})

app.listen(3000);
console.log("port started");