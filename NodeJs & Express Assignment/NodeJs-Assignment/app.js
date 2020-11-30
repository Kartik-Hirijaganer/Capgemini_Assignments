var calculator = require("./calculator");

//phase 1
//console.log(calculator.sum(5,5));
// console.log(calculator.multiply(5,5));

//phase 2
var operator = require("./operators/sumation.js");
var operator = require("./operators/subtraction.js");
var operator = require("./operators/multiplication.js");
var operator = require("./operators/division.js");


console.log(operator.sum(5,5));
console.log(operator.sub(5,5));
console.log(operator.multiply(5,5));
console.log(operator.divide(5,5));





const moment = require('moment');

//phase 3
// var currentData = moment().format("dddd MMM Do YYYY, hh:mm:ss a");
// console.log("Today is: "+currentData+" "+calculator.sum(5,5)+" "+calculator.multiply(5,5));
