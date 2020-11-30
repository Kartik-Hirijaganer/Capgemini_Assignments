const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//for json data
//app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('form');
});

//for form input data
// bodyParser.urlencoded({ extended: false }),


app.post('/form', bodyParser.urlencoded({ extended: false }), function(req, res){
  console.log(req.body.str);
  res.send(req.body.str.split("").reverse().join(""));
});

app.listen(3000);