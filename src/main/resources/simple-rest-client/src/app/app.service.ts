import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

export class Foo {
  constructor(public id: number, public name: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private const tokenCookie = 'access_token';

  constructor(private router: Router, private httpClient: HttpClient, private cookieService: CookieService) { }

  obtainAccessToken(loginData: any) {
    const params = new HttpParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('grant_type', 'password');
    params.append('client_id', 'fooClientIdPassword');

    const headers = new HttpHeaders()
      .set('Content-type', 'application/x-www-form-urlencoded; charset=utf-8')
      .set('Authorization', 'Basic ' + btoa('fooClientIdPassword: secret'));

    this.httpClient.post('http://localhost:8080/spring-security-oauth-server/oauth/token',
      { headers, params }).subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials')
      );
  }

  saveToken(token: any) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    this.cookieService.set(this.tokenCookie, token.access_token, expireDate);
    this.router.navigate(['/']);
  }

  getResource(resourceUrl: string): Observable<Foo> {
    const headers = new HttpHeaders()
      .set('Content-type', 'application/x-www-form-urlencoded; charset=utf-8')
      .set('Authorization', 'Bearer ' + this.cookieService.get(this.tokenCookie));

    return this.httpClient.get<Foo>(resourceUrl, { headers });
  }

  checkCredentials() {
    if (!this.cookieService.check(this.tokenCookie)) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.cookieService.delete('access_token');
    this.router.navigate(['/login']);
  }
}
