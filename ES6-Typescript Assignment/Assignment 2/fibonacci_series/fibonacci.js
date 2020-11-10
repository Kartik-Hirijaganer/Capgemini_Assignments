"use strict";
var fibonacciNumbers = /** @class */ (function () {
    function fibonacciNumbers(previousNo, currentNo) {
        this._previousNo = previousNo;
        this._currentNo = currentNo;
    }
    fibonacciNumbers.prototype.fibonacci = function () {
        var sum;
        sum = this._previousNo + this._currentNo;
        this._previousNo = this._currentNo;
        this._currentNo = sum;
        //return sum
        return {
            next: function () {
                return sum;
            }
        };
    };
    return fibonacciNumbers;
}());
var mySeries = new fibonacciNumbers(0, 1);
console.log(mySeries.fibonacci().next());
console.log(mySeries.fibonacci().next());
console.log(mySeries.fibonacci().next());
console.log(mySeries.fibonacci().next());
