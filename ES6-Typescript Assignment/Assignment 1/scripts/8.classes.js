"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ques8
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Account.totalbalance = function () {
        var accounts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accounts[_i] = arguments[_i];
        }
        var sum = 0;
        //console.log(accounts.balance);
        for (var _a = 0, accounts_1 = accounts; _a < accounts_1.length; _a++) {
            var i = accounts_1[_a];
            sum += i.balance;
        }
        console.log(sum);
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var savingAccount1 = new SavingAccount(1, "Mike", 1000, 5.12);
var savingAccount2 = new SavingAccount(2, "Max", 1000, 5.12);
var savingAccount3 = new SavingAccount(3, "Alex", 1000, 5.12);
var currentAccount1 = new CurrentAccount(1, "George", 1000, 5.50);
var currentAccount2 = new CurrentAccount(2, "Soul", 1000, 5.50);
var currentAccount3 = new CurrentAccount(3, "Vasili", 1000, 50);
var result = Account.totalbalance(savingAccount1, savingAccount2, savingAccount3, currentAccount1, currentAccount2, currentAccount3);
