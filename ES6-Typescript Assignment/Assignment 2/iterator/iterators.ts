function armstrong() {
  let i = 1;
  return {
  next: function() {
     for (i ; i <= 1000; i++) {
            let numberOfDigits = i.toString().length;
            let sum = 0, temp=i;
            
            while (temp > 0) {
        
                let remainder = temp % 10;
                sum += remainder ** numberOfDigits;
                temp = parseInt(temp / 10); 
            }
            if (sum == i) {
             console.log(i);
             i++;
             break;
          } 
        }
     
  }
}
}
let getNextArmstrongs = armstrong();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
getNextArmstrongs.next();
// for(let i=0; i<200; i++){
//   getNextArmstrongs.next();
  
// }