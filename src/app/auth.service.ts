import { Injectable } from '@angular/core';
import {CallApiService} from "./call-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService:CallApiService) { }
  private _loginURL:string='mobileLogin'
  loginUser(data:{}) {
    return this.apiService.postData(this._loginURL, data)
  }

}
