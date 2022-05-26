import { Component, OnInit, OnDestroy } from '@angular/core';

import {Router} from '@angular/router'
import {AuthService} from "../auth.service";

import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    }
  )
  get email()
  {return this.loginUserData.get('email')}
  get password()
  {
    return this.loginUserData.get('password')
  }
  data:any|{}={}
  error: string = ""
  isLoading: boolean = false
  loginService:any
  constructor(public authService: AuthService,private _router: Router) {
  }

  ngOnInit(): void {
    if(this.authService.isAuthenticated)
    {
      this._router.navigate(['']).then(r => console.log('redirected'))
    }
  }
  loginUser() {
    console.log(this.loginUserData.value)
    // return false;
      // console.log('login function works: ' + this.loginUserData.email);
      this.isLoading = true
      this.loginService=this.authService.loginUser(
        this.loginUserData.value
      ).subscribe(
        response => {
          console.log(response)
          console.log('loginData: '+ this.loginUserData)
          this.data= response
          console.log(this.data["success"])
          this.authService.token=this.data["token"]
          this.authService.user=this.data["user"]
          this.authService.isAuthenticated=true
          this._router.navigate(['']).then(r => console.log('redirected'))
        },
        error => {
          console.log('error: ' + error.error.message)
          this.data = error
          this.isLoading = false
          // this.data=error.error
          this.error=error.error.message
        },
        ()=>
        {
          // console.log()
          this.isLoading=false
        }
      )
    }

  ngOnDestroy()
  {
    this.loginService.unsubscribe
  }
}


// loginUser() {
//   console.log('login function works: ' + this.loginUserData.email);
//   this.isLoading = true
//   this.authService.loginUser(
//     this.loginUserData
//   ).subscribe(
//     response => {
//       console.log(response)
//       console.log('loginData: '+ this.loginUserData)
//       this.data= response
//       console.log(this.data["success"])
//       this.authService.token=this.data["token"]
//       this.authService.user=this.data["user"]
//       this.authService.isAuthenticated=true
//       this._router.navigate(['']).then(r => console.log('redirected'))
//     },
//     error => {
//       console.log('error: ' + error.error.message)
//       this.data = error
//       this.isLoading = false
//       // this.data=error.error
//       this.error=error.error.message
//     },
//     ()=>
//     {
//       // console.log()
//       this.isLoading=false
//     }
//   )
// }
