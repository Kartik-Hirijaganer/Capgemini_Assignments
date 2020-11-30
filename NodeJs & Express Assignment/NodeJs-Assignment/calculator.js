let sumation = (a,b)=>{
  return `The sum of ${a} and ${b} is:${a+b}`;
}

let multiplication = (a,b)=>{
  return `The multiplication of ${a} and ${b} is:${a*b}`;
}

module.exports = {
  sum:sumation,
  multiply:multiplication
}