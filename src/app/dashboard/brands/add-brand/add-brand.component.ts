import { Component, OnInit } from '@angular/core';
declare var $;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {
  addBrandForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private _router: Router, private _auth: AuthenticationService) { }

  name: string;
  description: string;
  submitbtn: string = "Submit";

  ngOnInit() {
    this.addBrandForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get f() { return this.addBrandForm.controls; }

  addBrand() {
    this.submitted = true;
    this.submitbtn = "Proces..."
    if (this.addBrandForm.invalid) {
      return;
    } else {
      this._auth.loginUser(this.addBrandForm.value).subscribe(
        res => {
          localStorage.setItem('token', res['token']);
          this._router.navigate(['Dashboard']);
          this.toastr.successToastr('Logged in Successfully', 'Success!');

        },
        err => {
          this.toastr.errorToastr('Something Went Wrong', 'Oops!');
          this.submitbtn = "Submit"
          console.log(err);
        }
      );
    }

  }
}
