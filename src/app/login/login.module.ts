import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*Custom Files*/
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
