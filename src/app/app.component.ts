import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from './Services/test.service';
import {   OAuthService } from 'angular-oauth2-oidc';
import {JwksValidationHandler} from 'angular-oauth2-oidc-jwks';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dw-ui';

  constructor(private router: Router, private testService: TestService, private oauthService: OAuthService)
  {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }


  login(){ this.oauthService.initImplicitFlow(); }
  logout(){ this.oauthService.logOut(); }
  getClaims() {
    let claims = this.oauthService.getIdentityClaims();
    if(!claims) return null;
    return claims;
 }

  public navegarLogin():void
  {
    this.router.navigate(['/login']);
  }

  public navegarContactos():void
  {
    this.router.navigate(['/contacts']);
  }

  public navegarAddContactos():void{
    this.router.navigate(['/add']);
  }

  public CallService(): void{

  }
}
