import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
@Injectable()
export class AuthenticationService {
  // private _registerUrl = "http://localhost:4000/api/register";
  private _loginUrl = 'http://13.233.113.14/accounts/login';

  constructor(private http: HttpClient, private _router: Router, private toastr: ToastrManager) { }
  // registerUser(user) {
  //   return this.http.post<any>(this._registerUrl, user)
  // }

  loginUser(user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Auth': 'Ashu',
      'Access-Control-Allow-Origin': '*'
    });
    let options = { headers: headers };
    return this.http.post(this._loginUrl, user, options);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    this.toastr.successToastr('Logged out Successfully', 'Success!');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
