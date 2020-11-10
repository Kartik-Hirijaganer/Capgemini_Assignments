"use strict";
//ques5
//a
var add = function (a, b) {
    if (a === void 0) { a = 5; }
    if (b === void 0) { b = 5; }
    return a + b;
};
console.log(add());
//b
var userFriends = function (username) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    return "Name: " + username + ", list of his friends: " + friends;
};
var frds = ["alex", "mike", "george"];
console.log(userFriends("Max", frds));
//c
var names = ["mike", "alex", "gorge", "max", "vasili"];
var printCapitalNames = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    for (var _a = 0, x_1 = x; _a < x_1.length; _a++) {
        var na = x_1[_a];
        console.log(na.toUpperCase());
        ;
    }
};
printCapitalNames.apply(void 0, names);
