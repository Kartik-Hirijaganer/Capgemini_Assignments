"use strict";
// ques3
var Order = {
    id: 1234,
    title: "Title",
    price: 500,
    printOrder: function () {
        return Order;
    },
    getPrice: function () {
        return Order.price;
    }
};
//var res = Order.getPrice();
var clone = Object.assign({}, Order);
console.log(clone);
