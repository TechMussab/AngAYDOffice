import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import {CallApiService} from "./call-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginURL:string='mobileLogin'
  private _isAuthenticated:boolean;
  private _token:string|null;

  private _user:{}|any;
  constructor(private apiService:CallApiService) {
    this._token=localStorage.getItem('token');
    this._isAuthenticated=!!this._token
    this._user=JSON.parse(localStorage.getItem('user')!!)
  }
  get isAuthenticated():boolean
  {
    // return this._isAuthenticated
    return !!this._token;
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
    localStorage.setItem('token',this._token!!.toString())
  }
  get user()
  {
    return this._user;
  }
  set user(user:{}|any)
  {
    this._user=user;
    localStorage.setItem('user',JSON.stringify(this._user!!))
  }
  
  loginUser(data:{}) {
    // return this.apiService.postData(this._loginURL, data)
    return this.apiService.postData(this._loginURL, data)
  }
  loginUserService(payLoad:{}|any)
  {
    return this.apiService.postData(this._loginURL, payLoad)
  }
  loginUserWithService(payLoad:{}|any):{}|any
  {
    let responseData:{}|any={};
    let responseError:string|any='';
    const resp=this.loginUserService(payLoad)
    resp.pipe(responseData,catchError(responseError))
    console.log('response from func using pipe: '+responseData)
    console.log('error from func using pipe: '+responseError)
    return {data:responseData,error:responseError}
  }

}


// const subscribedService=this.loginUserService(
//   payLoad
// ).subscribe(
//   response => {
//     responseData= response
//     console.log('success from authService '+responseData["success"])
//     this.token=responseData["token"]
//     this.user=responseData["user"]
//   },
//   err => {
//     console.log('error: ' + err.error.message)
//     // this.data=error.error
//     responseError=err.error.message.toString()
//   }
//   ,
//   ()=>
//   {
//     subscribedService.unsubscribe();
//   }
// )