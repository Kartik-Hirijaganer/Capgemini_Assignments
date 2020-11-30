const mongoose = require("mongoose");

mongoose.model("user", {
  firstName:String,
  lastName:String,
  dateOfBirth:Date,
  mobileNo:Number,
  gender:String,
  bookings:[{
    bookingId:mongoose.SchemaTypes.ObjectId
  }]
});