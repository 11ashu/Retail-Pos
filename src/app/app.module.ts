import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule} from './login/login.module';
import { DashboardModule} from './dashboard/dashboard.module';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    DashboardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthenticationService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
