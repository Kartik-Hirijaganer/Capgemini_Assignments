const express = require('express');
const app = express();


let str = '{ "name":"John", "age":30, "city":"New York"}';
app.get('/books', function(req, res){
  let obj = JSON.parse(str);
  res.send(obj);
});

app.listen(3000);