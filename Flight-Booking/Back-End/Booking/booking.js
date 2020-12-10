const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const axios = require('axios');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

const mongoose = require('mongoose');

require('./bookingDataModel');//acquiring our schema file
const booking = mongoose.model("booking");//assigning schema model to booking constant

//connecting mongoDB atlas dbName: booking_project, password:1234
mongoose.connect('mongodb+srv://Kartik:1234@cluster0.nvlfp.mongodb.net/booking_project?retryWrites=true&w=majority', ()=>{
  console.log('Database connected');
});

/*
  when user will checkIn this method will be called and ticket will be displayed.
*/
app.get("/bookingById/:bookingId", (req, res)=>{
  booking.findOne({bookingId: req.params.bookingId}).then((data)=>{
    res.send(data);
  })
});

//to print ticket details will be used by checkIn 
// app.get("/bookingById/:id",(req,res) => {

//   booking.findById(req.params.id).then((booking)=> {
//     console.log(booking);
//       if(booking){
//           axios.get('http://localhost:3200/user/'+ booking.userId).then((userData)=> {
//           var bookingObj = {firstName : userData.data.firstName, flightName:''};
//           console.log(booking.flightId);
//           axios.get('http://localhost:3000/flight/' + booking.flightId).then((flightData)=> {
//             bookingObj.flightName = flightData.data.flightName;
//             res.json(bookingObj);
//       });
//     });
//   }
//   else {
//           res.send("Invalid Booking");
//       }
//   });
// });

/* 
  When user will click view all bookings this get request will be called
  It will search in booking db all bookings having that userId(objectId).
*/
app.get('/booking/allbookings/:userId', (req, res) => {
  //console.log('inside get'+req.params.userId);
  var objectId = mongoose.Types.ObjectId(req.params.userId);
  var myArr = [];
  booking.find({userId:objectId}).then((response)=>{

    for(let i of response){
      let bookingObj = {
        flight: i.flight,
        bookingId: i.bookingId,
        userDetails: i.userDetails
      }
      myArr.push(bookingObj);
    }
    //console.log(myArr);
    res.status(200).send(myArr);
  }).catch((err) => {
    if(err){
      throw err;
    }
  });
});

/*POST method will add booking detail when user books flight
  In angular when user will click book now then in bookNow function
  we need to pass flightName and userId(objectId)-from url in form of json body
  Then only this function will work.
*/
var bookingId = 110;
app.post("/booking/add/:flightName/:userId", (req, res)=>{
  let flightName = req.params.flightName;
  // console.log('inside booking post');
  var newBooking = {
    userId: mongoose.Types.ObjectId(req.params.userId),
    flight:{
      flightName: flightName,
      airLine: req.body.flight.airLine,
      source: req.body.flight.source,
      destination: req.body.flight.destination,
      fare: req.body.flight.fare,
    },
    userDetails:{
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      email: req.body.user.email
    },
    bookingId: bookingId
  }

  // axios.get("http://localhost:3000/flight/"+flightName).then((flight)=>{
  //   const f = flight.data;
  //   newBooking = {
  //     userId: req.params.userId,
  //     flight:{
  //       flightName: flightName,
  //       airLine: f.airLine,
  //       source: f.source,
  //       destination: f.destination,
  //       fare: f.fare,
  //     },
  //     bookingId: bookingId
  //   }
    
    // var booking1 = new booking(newBooking);
    // booking1.save().then(() =>{
    // res.send("BookingId is :"+bookingId);
    // bookingId++;
    //console.log(bookingId);
      // });
    // });

    var booking1 = new booking(newBooking);
    booking1.save().then(() =>{
    //res.send(bookingId);
    // var id = {
    //   Id: bookingId
    // }
    res.status(200).json({bookingId: bookingId});
    bookingId++;
    console.log('booking success');
    });
});


app.delete("/booking/cancel/:bookingId", (req, res)=>{
  booking.deleteOne({bookingId: req.params.bookingId}).then((response)=>{
    res.send(response);
    console.log("booking cancelled");
  })
});




app.listen(3300, (err) => {
  if(err){
    console.log(err);
  }
  console.log("Listening to port 3300");
});