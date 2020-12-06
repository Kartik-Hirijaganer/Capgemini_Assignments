import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    firstName:'',
    lastName:'',
    dateOfBirth:'',
    mobileNo:'',
    gender:'',
    emailId:'',
    password:''
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    // console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          var tokenObj = {
            token: res.token,
            userID: res.userId,
            userType: res.userType
          }
          //store
          localStorage.setItem('token', JSON.stringify(tokenObj));
          this._router.navigate(['/mainHome']);
          // if(res.userType=="admin"){
          //   this._router.navigate(['/adminHome']);
          // }
          // else{
          //   this._router.navigate(['/mainHome'])
          // }
        },
        err => {
          console.log(err)
        }
      )
  }
}
