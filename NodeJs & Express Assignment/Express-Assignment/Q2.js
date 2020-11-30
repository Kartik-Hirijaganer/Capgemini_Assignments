var express = require("express");
var app = express();

app.get('/year/:age', function (req, res) {
  let age = req.params.age;
  let year = 2020 - parseInt(age);

  res.send("You were born in "+year);
})
app.listen(3000);
console.log("server port:3000");