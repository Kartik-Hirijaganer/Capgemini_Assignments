const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

const mongoose = require('mongoose');

require("./flightDataModel");  //acquiring our schema file
const flight = mongoose.model("flight"); //assigning schema model to flight constant

//connecting mongoDB atlas dbName: flight_project, password:1234
mongoose.connect('mongodb+srv://Kartik:1234@cluster0.nvlfp.mongodb.net/flight_project',{ useNewUrlParser: true, useUnifiedTopology: true });
console.log('Database connected');

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

/*              get request to return all flights               */
app.get('/flights', (req, res) => {
  flight.find().then((data) => {
    res.send(data);
  }).catch(err => {
    if(err){
      throw err;
    }
  });
});

/*              get request to return flights by source destination               */
app.get("/flights/:source/:destination", (req, res) => {
  let source = req.params.source.toLowerCase();
  let dest = req.params.destination.toLowerCase();

  flight.find({source:source, destination: dest}).then((data)=>{
    res.send(data);
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
    fare: req.body.fare
  }

  var flight1 = new flight(newFlight);
  flight1.save().then((data) =>{
    console.log('new flight created');
    res.send(data);
  }).catch((err)=>{
    if(err){
      throw err;
    }
  })
});

                            /* PUT Methods */
/*                    put method to edit/update flight                */
app.put('/flight/edit/:id', (req, res) => {

  var newFlight = {
    airLine: req.body.airLine,
    flightName: req.body.flightName,
    source: req.body.source,
    destination: req.body.destination,
    fare: req.body.fare
  }
  //var update = { "$set": { "name": name, "genre": genre, "author": author, "similar": similar}}
  flight.findByIdAndUpdate(req.params.id, 
    {"$set": newFlight}, {new: true}).then((response) => {
    console.log(`flight updated`);
    res.send(response.data);
  }).catch(err => {
    if(err){
      throw err;
    }
  })
});

                            /* DELETE Methods */
/*                         delete method to delete flight by flightName            */
app.delete('/flight/delete/:flightName', (req, res) => {
  flight.findOneAndRemove({flightName: req.params.flightName}).then((response) => {
    console.log(`${req.params.flightName} flight deleted`);
    res.send(response);
  }).catch(err => {
    if(err){
      throw err;
    }
  })
});
//current no use
// app.delete('/flight/delete/:id', (req, res) => {
//   flight.findByIdAndRemove(req.params.id).then((response) => {
//     //res.send(`${req.params.flightName} flight deleted`);
//     console.log("flight deleted");
//     console.log(response);
//     res.send(response);
//   }).catch(err => {
//     if(err){
//       throw err;
//     }
//   })
// });



app.listen(3000, (err) => {
  if(err){
    console.log(err);
  }
  console.log("Listening to port 3000");
})