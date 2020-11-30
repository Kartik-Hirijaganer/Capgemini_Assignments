var moment = require("moment");
var strftime = require("strftime");

let date = new Date();
//console.log(date);
console.log(strftime("%H %p",date));