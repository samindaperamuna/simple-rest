import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';

import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

export class Foo {
   constructor(public id: number, public name: string) { }
}

@Injectable({
   providedIn: 'root'
})
export class AppService {

   private loginUrl = 'http://localhost:8080/spring-security-oauth-server/oauth/authorize';
   private redirectUrl = 'http://localhost:4200/';
   private clientId = 'sampleClientId';
   private scope = 'read write foo bar';

   constructor(private router: Router, private httpClient: HttpClient, private oauthService: OAuthService) {
      this.oauthService.loginUrl = this.loginUrl;
      this.oauthService.redirectUri = this.redirectUrl;
      this.oauthService.clientId = this.clientId;
      this.oauthService.scope = this.scope;
      this.oauthService.setStorage(sessionStorage);
      this.oauthService.tryLogin({});
   }

   obtainAccessToken() {
      this.oauthService.initImplicitFlow();
   }

   getResource(resourceUrl: string): Observable<Foo> {
      const headers = new HttpHeaders()
         .set('Content-type', 'application/x-www-form-urlencoded; charset=utf-8')
         .set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

      return this.httpClient.get<Foo>(resourceUrl, { headers });
   }

   isLoggedIn() {
      if (this.oauthService.getAccessToken() === null) {
         return false;
      }

      return true;
   }

   logout() {
      this.oauthService.logOut();
      location.reload();
   }
}
