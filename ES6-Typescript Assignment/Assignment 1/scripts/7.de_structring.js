"use strict";
//ques7
//a
var thirdElement = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    console.log(values[2]);
};
thirdElement(1, 2, 3, 4, 5);
//b
var organization = {
    cName: "xyz",
    address: [{ state: "TX" }, { city: "atlas" }, { pincode: 1234 }]
};
var cName = organization.cName, address = organization.address;
console.log(address[2]);
