// ques3
var Order = {
  id: 1234,
  title: "Title",
  price: 500,

  printOrder: ()=>{
    return Order;
  },
  getPrice: ()=>{
    return Order.price;
  }
}
//var res = Order.getPrice();
let clone = Object.assign({}, Order);
console.log(clone);