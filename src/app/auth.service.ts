import { Injectable } from '@angular/core';
import {CallApiService} from "./call-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated:boolean;
  private _token:string|null;
  private _user:{}|null|string;
  constructor(private apiService:CallApiService) {
    this._token=localStorage.getItem('token');
    this._isAuthenticated=!!this._token
    this._user=localStorage.getItem('user')
  }
  get isAuthenticated()
  {
    return this._isAuthenticated
  }
  set isAuthenticated(status:boolean)
  {
    this._isAuthenticated=status;
  }
  get token()
  { return this._token}
  set token(token:string |null)
  {
    this._token=token;
  }
  get user()
  {
    return this._user;
  }
  set user(user:{}|null)
  {
    this._user=user;
  }
  private _loginURL:string='mobileLogin'
  loginUser(data:{}) {
    // return this.apiService.postData(this._loginURL, data)
    return this.apiService.postData(this._loginURL, data)
  }

}
