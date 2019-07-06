import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authServices: AuthenticationService, private _router: Router) { }

  canActivate(): boolean {
    if (this._authServices.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
