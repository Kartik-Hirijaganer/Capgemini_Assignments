const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

//swagger libraries
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//middleware
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

const mongoose = require('mongoose');

require("./flightDataModel");  //acquiring our schema file
const flight = mongoose.model("flight"); //assigning schema model to flight constant

//connecting mongoDB atlas dbName: flight_project, password:1234
mongoose.connect('mongodb+srv://Kartik:1234@cluster0.nvlfp.mongodb.net/flight_project',{ useNewUrlParser: true, useUnifiedTopology: true });
console.log('Database connected');

//swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Flight Microservice",
      description: "Flight microservice constains http methods will be used by admin",
      contact: {
        name: "BookMyFlight"
      },
      servers: ["http://localhost:3000"]
    }
  },
  // ['.routes/*.js']
  apis: ["flight.js"]
};

//swagger middleware
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/flight/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


                            /* GET Methods */


//GET FLIGHT BY FLIGHT-NAME
/**
 * @swagger
 * /flight/{flightName}:
 *  get:
 *    description: Use to get all flights
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
app.get('/flight/:flightName', (req, res)=>{
  flight.findOne({flightName : req.params.flightName}).then((data)=>{
    res.status(200).send(data);
    // console.log(data);
  }).catch(err => {
    if(err){
      //throw err;
      res.status(400).json(`Error: ${err}`);
    }
  })
});

//RETURN ALL FLIGHTS 

/**
 * @swagger
 * /flights:
 *  get:
 *    description: Use to get all flights
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Server error.
 */
app.get('/flights', (req, res) => {
  flight.find().then((data) => {
    res.status(200).send(data);
  }).catch(err => {
    if(err){
      //throw err;
      res.status(400).json(`Error: ${err}`);
    }
  });
});

/*              RETURN FLIGHTS BY SOURCE & DESTINATION              */


/**
 * @swagger
 * /flights/{source}/{destination}:
 *  get:
 *    description: Use to get flights by source and destination
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Server error.
 *  parameters:
 *        - in: path
 *          name: source
 *          required: true
 *          schema:
 *            type: String
 *          description: Source
 * 
 *        - in: path
 *          name: destination
 *          required: true
 *          schema:
 *            type: String
 *          description: Destination
 */

app.get("/flights/:source/:destination", (req, res) => {
  let source = req.params.source.toLowerCase();
  let dest = req.params.destination.toLowerCase();

  flight.find({source:source, destination: dest}).then((data)=>{
    res.status(200).send(data);
  }).catch(err => {
    if(err){
      //throw err;
      res.status(400).json(`Error: ${err}`);
    }
  })
});

                            /* POST Methods */
//ADD NEW FLIGHT
/**
 * @swagger
 * /flight/add:
 *  post:
 *    summary: Creates a new flight.
 *    description: Used to create new flight
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: Object
 *            properties:
 *              airLine:
 *                type: String
 *              name:
 *                type: String
 *              source:
 *                type: String
 *              destination:
 *                type: String
 *            example:
 *              airlines: Air India
 *              name: AI4131
 *              source: PNQ
 *              destination: BOM
 *              fare: 4000
 *    responses:
 *         '200':
 *           description: A successful response
 *         '500':
 *           description: Server error
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
    res.status(200).send(data);
  }).catch((err)=>{
    if(err){
      //throw err;
      res.status(400).json(`Error: ${err}`);
    }
  })
});

                            /* PUT Methods */
//UPDATE FLIGHT     
/**
 * @swagger
 * /flight/edit/{id}:
 *  put:
 *    description: Use to get all flights
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Server error.
 *  parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: String
 *          description: Flight-Id
 */
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
    res.status(200).send(response.data);
  }).catch(err => {
    if(err){
      //throw err;
      res.status(400).json(`Error: ${err}`);
    }
  })
});

                            /* DELETE Methods */
//DELETE FLIGHT
/**
 * @swagger
 * /flight/delete/{flightName}:
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
app.delete('/flight/delete/:flightName', (req, res) => {
  flight.findOneAndRemove({flightName: req.params.flightName}).then((response) => {
    console.log(`${req.params.flightName} flight deleted`);
    res.status(200).send(response);
  }).catch(err => {
    if(err){
      //throw err;
      res.status(400).json(`Error: ${err}`);
    }
  })
});




app.listen(3000, (err) => {
  if(err){
    console.log(err);
  }
  console.log("Listening to port 3000");
})




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