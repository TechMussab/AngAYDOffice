import { Injectable } from '@angular/core';
import {CallApiService} from "./call-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated:boolean;
  private _token:string|null;
  constructor(private apiService:CallApiService) { 
    this._token=localStorage.getItem('token');
    this._isAuthenticated=!!this._token
  }
  get isAuthenticated()
  {
    return this._isAuthenticated
  }
  set isAuthenticated(status:boolean)
  {
    this._isAuthenticated=status;
  }
  private _loginURL:string='mobileLogin'
  loginUser(data:{}) {
    return this.apiService.postData(this._loginURL, data)
  }

}
