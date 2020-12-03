const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const mongoose = require('mongoose');

require("./flightDataModel");  //acquiring our schema file
const flight = mongoose.model("flight"); //assigning schema model to flight constant

//connecting mongoDB atlas dbName: flight_project, password:1234
mongoose.connect('mongodb+srv://Kartik:1234@cluster0.nvlfp.mongodb.net/flight_project?retryWrites=true&w=majority', ()=>{
  console.log('Database connected');
});

                            /* GET Methods */

//no current use
//will get by flight id
// app.get('/flight/:id', (req, res) => {
//   flight.findById(req.params.id).then((data)=>{
//     res.send(data);
//   }).catch(err => {
//     if(err){
//       throw err;
//     }
//   })
// });

//get request to search flights by flightName
app.get('/flight/:flightName', (req, res)=>{
  flight.findOne({flightName : req.params.flightName}).then((data)=>{
    res.send(data);
    // console.log(data);
  }).catch(err => {
    if(err){
      throw err;
    }
  })
});

//second get request to return all flights
app.get('/flights', (req, res) => {
  flight.find().then((data) => {
    res.json(data);
  }).catch(err => {
    if(err){
      throw err;
    }
  });
});

/* 
  will take source and destination paramater
  run find query
*/
app.get("/flights/:source/:destination", (req, res) => {
  let source = req.params.source.toLowerCase();
  let dest = req.params.destination.toLowerCase();

  flight.find({source:source, destination: dest}).then((data)=>{
    res.json(data);
  }).catch(err => {
    if(err){
      throw err;
    }
  })
});

                            /* POST Methods */
/* 
  will add new flight document in flight collection
  will be used by admin to add new flights
*/
app.post('/flight/add', (req, res)=>{
  var newFlight = {
    airLine: req.body.airLine,
    flightName: req.body.flightName,
    source: req.body.source,
    destination: req.body.destination,
    fare: req.body.fare,
    seatCount:req.body.seatCount
  }

  var flight1 = new flight(newFlight);
  flight1.save().then(() =>{
    console.log('new flight created');
  }).catch((err)=>{
    if(err){
      throw err;
    }
  })
  res.send("success flight added");

});

                            /* PUT Methods */
//put method to edit/update flight
app.put('/flight/edit/:flightNameOld', (req, res) => {
  let flightNameOld = req.params.flightNameOld; //to search flight based on flightName

  //new flight properties.
  let airLine = req.body.airLine;
  let flightName = req.body.flightName;
  let source = req.body.source;
  let destination = req.body.destination;
  let fare = req.body.fare;
  let seatCount = req.body.seatCount;

  //var update = { "$set": { "name": name, "genre": genre, "author": author, "similar": similar}}
  flight.findOneAndUpdate({flightName: flightNameOld}, 
    {"$set": {"airLine":airLine, "flightName":flightName, "source":source,                "destination":destination, "fare":fare, "seatCount":seatCount}
    }).then((response) => {
    res.send(`${flightName} flight updated`);
    console.log('flight updated');
  }).catch(err => {
    if(err){
      throw err;
    }
  })
});

                            /* DELETE Methods */
//delete method to delete flight by flightName
app.delete('/flight/delete/:flightName', (req, res) => {
  flight.deleteOne({flightName: req.params.flightName}).then((response) => {
    res.send(`${req.params.flightName} flight deleted`);
    console.log("flight deleted");
  }).catch(err => {
    if(err){
      throw err;
    }
  })
});

app.listen(3000, (err) => {
  if(err){
    console.log(err);
  }
  console.log("Listening to port 3000");
})