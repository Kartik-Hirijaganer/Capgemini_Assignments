const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const axios = require('axios');
const cors = require('cors');

//swagger libraries
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//middleware
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

//swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Admin Microservice",
      description: "Admin microservice constains http methods to add, edit and delete flight",
      contact: {
        name: "BookMyFlight"
      },
      servers: ["http://localhost:3100"]
    }
  },
  // ['.routes/*.js']
  apis: ["admin.js"]
};

//swagger middleware
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/admin/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

                            /* GET Methods */


//GET ALL FLIGHTS

/**
 * @swagger
 * /admin/flights:
 *  get:
 *    description: Use to get all flights
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Server error.
 */

app.get('/admin/flights', (req, res) => {
  axios.get("http://localhost:3000/flights").then((response) => {
    res.status(200).send(response.data);
    //console.log(response);
  }).catch(err => {
    if(err){
      //throw err;
      res.status(400).json(`Error: ${err}`);
    }
  });
});

                            /* POST Methods */
/*                        post method to add new flight by admin                 */
app.post('/admin/add/flight', (req, res) => {
  var newFlight = {
    airLine: req.body.airLine,
    flightName: req.body.flightName,
    source: req.body.source,
    destination: req.body.destination,
    fare: req.body.fare
  }

  axios.post("http://localhost:3000/flight/add", newFlight).then((response)=>{
   res.send(response.data);
   console.log("New flight added.");
  }).catch(err => {
    if(err){
      //throw err;
      res.status(400).json(`Error: ${err}`);
    }
  });
});

                            /* PUT Methods */
/*                       put method to edit flight by admin                */
app.put('/admin/edit/flight/:id', (req, res) => {
  var newFlight = {
    airLine: req.body.airLine,
    flightName: req.body.flightName,
    source: req.body.source,
    destination: req.body.destination,
    fare: req.body.fare
  }

  axios.put(
    `http://localhost:3000/flight/edit/${req.params.id}`, newFlight
    ).then((response) => {
      console.log(response.data);
      res.send(response.data);
    }).catch(err => {
      if(err){
        //throw err;
        res.status(400).json(`Error: ${err}`);
      }
    });
});
                            /* DELETE Methods */
/*                    delete method to delete flight by admin             */

/**
 * @swagger
 * /admin/delete/flight/{flightName}:
 *  delete:
 *    description: Use to delete flight by flight name
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Server error.
 *  parameters:
 *        - in: path
 *          name: flightName
 *          required: true
 *          schema:
 *            type: String
 *          description: Flight-Name
 */
app.delete('/admin/delete/flight/:flightName', (req, res) => {
  axios.delete(`http://localhost:3000/flight/delete/${req.params.flightName}`).then((response) => {
    //console.log(response.data);
    res.status(200).send(response.data);
  }).catch(err => {
    if(err){
     // throw err;
     res.status(400).json(`Error: ${err}`);
    }
  });
});






app.listen(3100, (err) => {
  if(err){
    console.log(err);
  }
  console.log("Listening to port 3100");
})

//current no use
// app.get('/admin/flight/:id', (req, res)=>{
//   axios.get("http://localhost:3000/flight/"+req.params.id).then((response) => {
//     res.send(response);
//   }).catch(err => {
//     if(err){
//       throw err;
//     }
//   })
// });

//current no use
//get flight by flightName
// app.get('/admin/flight/:flightName', (req, res)=>{
//   axios.get("http://localhost:3000/flight/"+req.params.flightName).then((response) => {
//     //console.log(response);
//     res.send(response);
//   }).catch(err => {
//     if(err){
//       throw err;
//     }
//   })
// });
