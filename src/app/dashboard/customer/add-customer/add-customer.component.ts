import { Component, OnInit } from '@angular/core';
declare var $;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private _router: Router, private _auth: AuthenticationService) { }

  name: string;
  description: string;
  discount: string;
  submitbtn: string = "Submit";

  ngOnInit() {

    this.addCustomerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      discount: ['']
    });
  }
  get f() { return this.addCustomerForm.controls; }

  addCustomer() {
    this.submitted = true;
    this.submitbtn = "Proces..."
    if (this.addCustomerForm.invalid) {
      return;
    } else {
      this._auth.loginUser(this.addCustomerForm.value).subscribe(
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
