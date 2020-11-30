var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.use('/',express.static('public'));

app.get('/', function(req, res){
  res.render('index');
})

app.listen(3000);
console.log("server port:3000");