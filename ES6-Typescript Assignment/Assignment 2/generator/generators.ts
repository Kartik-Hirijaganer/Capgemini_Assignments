function *getArmstrongs() {
  for (let i=1; i<=Infinity; i++) {
    let sum=0, temp=i;
    let numOfDigits = temp.toString().length;
    while(temp>0){
      let remainder = temp%10;
      sum += Math.pow(remainder, numOfDigits);
      temp = parseInt(temp/10);
    }
    
     if(i>1000){
      throw new Error('i value greater than 1000')
    }
    else if(sum == i){
      yield i;
    }
  }
}

let iterable =  getArmstrongs();
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
