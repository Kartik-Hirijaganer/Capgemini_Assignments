"use strict";
//ques4
var names = ["Tom", "Ivan", "Jerry"];
objectArray = function (arr) {
    var temp = {};
    for (var i = 0; i < arr.length; i++) {
        temp[i] = "name: '" + arr[i] + "', length: " + arr[i].length;
    }
    return temp;
};
var newArr = objectArray(names);
console.log(newArr);
