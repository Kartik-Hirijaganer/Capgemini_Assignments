const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const auth = require('./auth');
const cookieParser = require('cookie-parser');

//middleware
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');

const user = require('./userDataModel');//acquiring our schema file
//const user = mongoose.model("user");//assigning schema model to user constant

//connecting mongoDB atlas dbName: user_project, password:1234
mongoose.connect('mongodb+srv://Kartik:1234@cluster0.nvlfp.mongodb.net/user_project?retryWrites=true&w=majority', ()=>{
  console.log('Database connected');
});
                              //GET  METHOD

//will get user by userid
//not used
// app.get('/user/:id', (req, res) => {
//   user.findById(req.params.id).then((data)=>{
//     res.send(data);
//   }).catch(err => {
//     if(err){
//       throw err;
//     }
//   })
// });

//login method
app.get('/user/login', async (req, res) => {
  const {emailId, password} = req.body;

  try{
    const myuser = await user.login(emailId, password);
    const token = auth.createToken(myuser._id);
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});
    res.status(200).json({userId: myuser._id});
    console.log('success');
  }
  catch (err) {
    console.log(err);
    //res.status(200).json(err);
    const error = auth.handleErrors(err);
    res.status(400).json({error});
    console.log(error);
  }
});



//POST method when a new user will signUp
const maxAge = auth.maxAge;
app.post('/user/add', async (req, res)=>{
  /*
    Form form we will send date as date-type we will convert it to string and store in db.
    date format: year/ month/ date
  */
  // var newDate = new Date(req.body.dateOfBirth);
  // var date = newDate.toDateString();
 
  var newUserObj = {
    firstName:req.body.firstName.toLowerCase(),
    lastName:req.body.lastName.toLowerCase(),
    dateOfBirth:req.body.dateOfBirth,
    mobileNo:req.body.mobileNo,
    gender:req.body.gender.toLowerCase(),
    emailId:req.body.emailId,
    password:req.body.password,
    userType:"user"
  }
  
  var user1 = new user(newUserObj);
  // const newUser = user1.save().then(() =>{
  //   console.log('new user added');
    
  // }).catch((err)=>{
  //   if(err){
  //     throw err;
  //   }
  // });
  try{
    const newUser = await user.create(user1);
    const token = auth.createToken(newUser._id);
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});
    res.sendStatus(200).json({userId: newUser._id});
    console.log("new user created with cookie");
  }catch (err) {
    //res.send(err);
    const error = auth.handleErrors(err);
    res.status(400).json({Error: error.emailId});
    console.log(error.emailId);
  } 
});

/*
  Will take email and password check in database if present will generate a token.
*/






app.listen(3200, (err) => {
  if(err){
    console.log(err);
  }
  console.log("Listening to port 3200");
});