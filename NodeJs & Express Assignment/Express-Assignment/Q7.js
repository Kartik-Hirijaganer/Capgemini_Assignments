const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
//array
let arr = ["apple", "orange", "mango", "grape"];
let id = 0;

//get with id
app.get('/items/item', function(req, res){
  id = req.query.id;
  res.send(arr[id]);
});

//get all elements
app.get('/items', function(req, res){
  //res.render(arr[1]);
  res.send(arr);
});

//post method
app.post('/items', function(req, res){
  let data = req.body.item;
  arr.push(data);
  console.log(arr);
  res.send("added "+req.body.item);
});

//patch
app.patch('/items/patch', function(req,res){
  id = req.query.id;
  let name = req.query.name;
  arr[id] = name;
  res.send(arr);
});


//delete element
app.delete('/items/delete', function(req, res){
  id = req.query.id; 
  arr.splice(id, id+1);
  res.send(arr);
});


app.listen(3000);