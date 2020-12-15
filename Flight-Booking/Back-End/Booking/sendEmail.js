require('dotenv').config();

const nodemailer = require('nodemailer');
//const booking = require('./booking');
//step 1
// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS
//   }
// });

//step 2
// let mailOptions = {
//   from: 'kartiktest351@gmail.com',
//   // to: 'kartiktest351@gmail.com',
//   to: booking.userEmail,
//   subject: 'Booking successfull',
//   text: "Booking done don't forget to check-In and collect your boarding pass"
// };

//step 3
// const sendMail = (err)=> {
//   let msg = '';
//   console.log(booking.userEmail);
//   transporter.sendMail(mailOptions, (err, data) => {
//     if(err){
//       console.log({Error: err});
//       this.msg = 'error';
//     }
//     else{
//       //console.log('email sent')
//       this.msg = 'email sent';
//     }
//   });
//   return msg;
// };

const mailSend = (email) => {
  let msg = '';
  //step 1
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  });

  //step 2
  let mailOptions = {
    from: 'kartiktest351@gmail.com',
    // to: 'kartiktest351@gmail.com',
    to: email,
    subject: 'Booking successfull',
    text: "Booking done don't forget to check-In and collect your boarding pass"
  };

  //step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if(err){
      console.log({Error: err});
      this.msg = 'error';
    }
    else{
      //console.log('email sent')
      this.msg = 'email sent';
    }
  });
  return msg;
}

module.exports = { mailSend };