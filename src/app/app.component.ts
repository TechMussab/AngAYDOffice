import { Component } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AYD';
  constructor(public auth:AuthService) {
  }




  logout()
  {
    console.log('in log out')
  }
}
