import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  // Bearer 
  constructor(private injector: Injector) { }
  intercept(req, next) {
    let authService = this.injector.get(AuthenticationService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
