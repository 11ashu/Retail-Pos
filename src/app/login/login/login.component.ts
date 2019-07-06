import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { ToastrManager } from 'ng6-toastr-notifications';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginUserData = {
  email: string;
  password: string;
  submitbtn: string = "Sign In";
  // };

  constructor(
    private _auth: AuthenticationService,
    private _router: Router,
    private formBuilder: FormBuilder,
    public toastr: ToastrManager) {

  }

  loginForm: FormGroup;
  submitted = false;



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    document.body.className = 'hold-transition login-page';
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  get f() { return this.loginForm.controls; }

  loginUser() {
    this.submitted = true;
    this.submitbtn = "Proces..."
    if (this.loginForm.invalid) {
      return;
    } else {
      this._auth.loginUser(this.loginForm.value).subscribe(
        res => {
          localStorage.setItem('token', res['token']);
          this._router.navigate(['Dashboard']);
          this.toastr.successToastr('Logged in Successfully', 'Success!');

        },
        err => {
          this.toastr.errorToastr('Something Went Wrong', 'Oops!');
          this.submitbtn = "Sign In"
          console.log(err);
        }
      );
    }

  }
  login() {

  }

}
