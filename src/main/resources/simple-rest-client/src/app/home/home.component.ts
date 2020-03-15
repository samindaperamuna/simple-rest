import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  providers: [AppService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   private isLoggedIn = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.isLoggedIn = this.appService.isLoggedIn();
  }

  login() {
     this.appService.obtainAccessToken();
  }

  logout() {
    this.appService.logout();
  }
}
