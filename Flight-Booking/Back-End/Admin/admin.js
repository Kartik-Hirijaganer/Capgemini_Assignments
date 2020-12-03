const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const axios = require('axios');

app.use(bodyParser.json());

                            /* GET Methods */

//get flight by flightName
app.get('/admin/flight/:flightName', (req, res)=>{
  axios.get("http://localhost:3000/flight/"+req.params.flightName).then((response) => {
    console.log(response.data[0]);
    //create object of required parameters
    var flightObject = { Name: response.data[0].flightName, air: response.data[0].airLine };
    res.json(flightObject);
  }).catch(err => {
    if(err){
      throw err;
    }
  })
});

//get request all flight data
/* 
  Note: In response we get all flight data in form of data array, data[{}, {}]
  In console we can iterate through the data array but if we do that same for 
  res.json() it only prints first object and in console we get error.
*/

app.get('/admin/flights', (req, res) => {
  axios.get("http://localhost:3000/flights").then((response) => {

    //var myArr = response.data;
    for(let flight of response.data){
      let flightObject = {FlightName: flight.flightName, AirLine: flight.airLine};
      //res.json(flightObject);
      console.log(flightObject);
    }
    res.send(response.data);
  }).catch(err => {
    if(err){
      throw err;
    }
  });

});

                            /* POST Methods */

//post method to add flight by admin 
app.post('/admin/add/flight', (req, res) => {
  var newFlight = {
    airLine: req.body.airLine,
    flightName: req.body.flightName,
    source: req.body.source,
    destination: req.body.destination,
    fare: req.body.fare,
    seatCount:req.body.seatCount
  }

  axios.post("http://localhost:3000/flight/add", newFlight).then((response)=>{
    console.log(response.data);
    res.send("New flight added.")
  }).catch(err => {
    if(err){
      throw err;
    }
  });
 
});

                            /* PUT Methods */
//put method to edit flight by admin
app.put('/admin/edit/flight/:flightNameOld', (req, res) => {
  var newFlight = {
    airLine: req.body.airLine,
    flightName: req.body.flightName,
    source: req.body.source,
    destination: req.body.destination,
    fare: req.body.fare,
    seatCount:req.body.seatCount
  }

  axios.put(
    `http://localhost:3000/flight/edit/${req.params.flightNameOld}`, newFlight
    ).then((response) => {
      console.log(response.data);
      res.send(response.data);
    }).catch(err => {
      if(err){
        throw err;
      }
    });
});

                            /* DELETE Methods */
//delete method to delete flight by admin
app.delete('/admin/delete/flight/:flightName', (req, res) => {
  axios.delete(`http://localhost:3000/flight/delete/${req.params.flightName}`).then((response) => {
    console.log(response.data);
    res.send(response.data);
  }).catch(err => {
    if(err){
      throw err;
    }
  });
});



app.listen(3100, (err) => {
  if(err){
    console.log(err);
  }
  console.log("Listening to port 3100");
})