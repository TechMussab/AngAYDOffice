import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CallApiService } from '../call-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = {};
  isLoading: Boolean = true;
  services = <any>{};
  constructor(public authService:AuthService,private apiService: CallApiService) { }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async ngOnInit(): Promise<any> {
    // await this.delay(100000);
    this.apiService.getData('topSoldToday').subscribe((res) => {
      console.log(res);
      this.data = res
      this.isLoading = false;
    })
  }

}
