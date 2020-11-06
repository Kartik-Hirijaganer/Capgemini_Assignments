function calc(){

  var choice= parseInt(prompt("1. Add \n2. Subtract \n3. Multiply \n4. Divide \n5. Exponent \n6. Mean \n7. Quit"));
  //console.log(typeof(choice));

  switch(choice){
    case 1:
      var num1=prompt("Enter number 1:");
      var num2=prompt("Enter number 2:");
      if(!isNaN(num1) && !isNaN(num2)){
      document.getElementById("c").innerHTML+="Addition is: "+parseInt(Number(num1)+Number(num2));
      var pause=setTimeout(calc,3000);
      break;
      }
      else{
        alert("Not a number");
        break;
      }
     
    case 2:
      var num1=prompt("Enter number 1:");
      var num2=prompt("Enter number 2:");
      if(!isNaN(num1) && !isNaN(num2)){
      document.getElementById("c").innerHTML+="Subtraction is: "+parseInt(Number(num1)-Number(num2));
      var pause=setTimeout(calc,3000);
      break;
      }
      else{
        alert("Not a number");
        break;
      }
      
    case 3:
      var num1=prompt("Enter number 1:");
      var num2=prompt("Enter number 2:");
      if(!isNaN(num1) && !isNaN(num2)){
      document.getElementById("c").innerHTML+="Multiplication is: "+parseInt(Number(num1)*Number(num2));
      var pause=setTimeout(calc,3000);
      break;
      }
      else{
        alert("Not a number");
        break;
      }

    case 5:
      var num1=prompt("Enter base:");
      var num2=prompt("Enter exponent:");
      if(!isNaN(num1) && !isNaN(num2)){
      document.getElementById("c").innerHTML+="Exponent is: "+(Math.pow(Number(num1),Number(num2)));
      var pause=setTimeout(calc,3000);
      break;
      }
      else{
        alert("Not a number");
        break;
      }

      case 6:
        var num=prompt("Enter series of numbers:");
      var res = num.substring(num.length - 3, num.length);
      var n = num.indexOf("*");
      // console.log(n);
      var sum=0;
      if(res==="*"){
        for (var i = 0; i < n; i++) {
          var result=num.split("",n);


        }
        for(var i=0;i<result.length;i++){
               sum+=Number(result[i]);
           }
        // console.log(result);
        document.getElementById("c").innerHTML+="Exponent is: "+parseInt(sum/n);
        var pause=setTimeout(calc,3000);
        break;
      }
      else{
        alert("Series not ended");
        break;
      }

    case 7:
      document.getElementById("c").innerHTML+="Thank you";
      break;
    
    default:
      alert("Enter number between 1 to 7");
  }
}