import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import {Router} from '@angular/router'
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: '',
    password: ''
  }
  data = {}
  error: string = ""
  isLoading: boolean = false

  constructor(public authService: AuthService,private _router: Router) {
  }

  ngOnInit(): void {
  }
  loginUser() {
    console.log('login function works: ' + this.loginUserData.email);
    this.isLoading = true
    this.authService.loginUser(
      this.loginUserData
    ).subscribe(
      response => {
        console.log(response)
        this.data= (<any>response)
        // console.log(this.data[''])
        // this.data
        // this.authService.token=response
        // this._router.navigate(['']).then(r => console.log('redirected'))
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

}
