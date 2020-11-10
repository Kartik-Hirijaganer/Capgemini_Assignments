"use strict";
function armstrong() {
    var i = 1;
    return {
        next: function () {
            for (i; i <= 1000; i++) {
                var numberOfDigits = i.toString().length;
                var sum = 0, temp = i;
                while (temp > 0) {
                    var remainder = temp % 10;
                    sum += Math.pow(remainder, numberOfDigits);
                    temp = parseInt(temp / 10);
                }
                if (sum == i) {
                    console.log(i);
                    i++;
                    break;
                }
            }
        }
    };
}
var getNextArmstrongs = armstrong();
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
