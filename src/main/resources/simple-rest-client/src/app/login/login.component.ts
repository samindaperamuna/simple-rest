import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  providers: [AppService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginData = { username: '', password: '' };

  constructor(private appService: AppService) { }

  login() {
    this.appService.obtainAccessToken(this.loginData);
  }
}
