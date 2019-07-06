import { Component, OnInit } from '@angular/core';
declare var $;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss']
})
export class AddRolesComponent implements OnInit {

  addRolesForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private _router: Router, private _auth: AuthenticationService) { }

  name: string;
  permissions: Array<any>;
  submitbtn: string = "Submit";

  ngOnInit() {
    $(document).ready(() => {
      $('.select2').select2();
    });

    this.addRolesForm = this.formBuilder.group({
      name: ['', Validators.required],
      permissions: ['', Validators.required]
    });
  }


  addRoles() {
    this.submitted = true;
    this.submitbtn = "Proces...";
    console.log(this.addRolesForm.value);
    // if (this.addRolesForm.invalid) {
    //   return;
    // } else {
    //   this._auth.loginUser(this.addRolesForm.value).subscribe(
    //     res => {
    //       localStorage.setItem('token', res['token']);
    //       this._router.navigate(['Dashboard']);
    //       this.toastr.successToastr('Logged in Successfully', 'Success!');

    //     },
    //     err => {
    //       this.toastr.errorToastr('Something Went Wrong', 'Oops!');
    //       this.submitbtn = "Submit"
    //       console.log(err);
    //     }
    //   );
    // }

  }
}
