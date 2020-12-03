import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3200/user/signUp";
  private _loginUrl = "http://localhost:3200/user/login";

  constructor(private http: HttpClient) { }

  registerUser(user:any){
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user:any){
    return this.http.post<any>(this._loginUrl, user);
  }
}
