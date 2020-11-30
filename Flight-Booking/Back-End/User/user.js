const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const axios = require('axios');

app.use(bodyParser.json());

const mongoose = require('mongoose');
//const { response } = require('express');

require('./userDataModel');//acquiring our schema file
const user = mongoose.model("user");//assigning schema model to user constant

//connecting mongoDB atlas dbName: user_project, password:1234
mongoose.connect('mongodb+srv://Kartik:1234@cluster0.nvlfp.mongodb.net/user_project?retryWrites=true&w=majority', ()=>{
  console.log('Database connected');
});


                              //GET ALL METHOD
/*
  Will get all booked flights from booking microservice.
  angular will send id of that user
*/
app.get('/user/allBookings/:id', (req, res) => {
  let booking= [];
  user.find(req.params.id).then((data) => {
    booking = data.bookings;
  }).catch((err) => {
    if(err){
      throw err;
    }
  });
  console.log(booking);
  res.send(booking);
});

// {"_id":{"$oid":"5fc3487a7878d130345232e5"},"firstName":"Yash","lastName":"Kholi","dateOfBirth":"2017-03-17","mobileNo":{"$numberLong":"9135680254"},"gender":"male","bookings":[]}


//user emailid and password will be send to authentication microservice
var emailId = '';
var password = '';

                          //POST method when a new user will signUp.
app.post('/user/add', (req, res)=>{
  emailId = req.body.emailId;
  password = req.body.password;
  //console.log(`email:${emailId}, password:${password}`);
  /*
    Form form we will send date as date-type we will convert it to string and store in db.
    date format: year/ month/ date
    ISODate doesnot work in typescript
    Date output 2017-03-17T00:00:00.000Z
  */
  var newDate = new Date(req.body.dateOfBirth);
  var date = newDate.toDateString();
 
  var obj = {bookingId : req.body.bookingId};
  var newUser = {
    firstName:req.body.firstName.toLowerCase(),
    lastName:req.body.lastName.toLowerCase(),
    dateOfBirth:date,
    mobileNo:req.body.mobileNo,
    gender:req.body.gender.toLowerCase()
  }
  
  var user1 = new user(newUser);
  user1.bookings.push(obj);
  user1.save().then(() =>{
    console.log('new user added');
  }).catch((err)=>{
    if(err){
      throw err;
    }
  });
  res.send(`New user added with emailId: ${emailId} and password: ${password}`);
});

//DELETE
app.delete('user/delete', (req, res) => {
  res.send('delete request');
})



app.listen(5000, (err) => {
  if(err){
    console.log(err);
  }
  console.log("Listening to port 5000");
});