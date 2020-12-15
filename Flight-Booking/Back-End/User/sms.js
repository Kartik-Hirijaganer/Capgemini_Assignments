require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
//console.log(accountSid);
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

//+12059648073
const sample = 'hello';
const sendSms = () => {
  client.messages
  .create({
     body: `Congrats  !! you have successfully created an account on BookMyFlight`,
     from: '+12059648073',
     to: '+919619093821'
   })
  .then(message => console.log(message.sid))
  .catch((err) => console.log(err));;
}

module.exports = {sendSms, sample};