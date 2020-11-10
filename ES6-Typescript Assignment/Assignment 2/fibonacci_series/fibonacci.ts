class fibonacciNumbers{
  private _previousNo: number;
  private _currentNo: number;
  
  constructor(previousNo: number, currentNo: number){
      this._previousNo = previousNo;
      this._currentNo = currentNo;
      
    }
  

  fibonacci (){
    let  sum:number;
    sum = this._previousNo + this._currentNo;

    this._previousNo = this._currentNo;
    this._currentNo = sum;
    //return sum
    return {
      next: function(){
            return sum;
          }
    }
  }
}

let mySeries = new fibonacciNumbers(0,1);

console.log(mySeries.fibonacci().next());
console.log(mySeries.fibonacci().next());
console.log(mySeries.fibonacci().next());
console.log(mySeries.fibonacci().next());