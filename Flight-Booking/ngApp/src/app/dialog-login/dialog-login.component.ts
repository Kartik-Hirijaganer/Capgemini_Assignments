import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login(){
    //login
    this._router.navigate(['/login']);
  }

  signUp(){
    //signUIp
    this._router.navigate(['/register']);
  }

}
