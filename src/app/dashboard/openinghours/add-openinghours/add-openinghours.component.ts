import { Component, OnInit } from '@angular/core';
declare var $;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-openinghours',
  templateUrl: './add-openinghours.component.html',
  styleUrls: ['./add-openinghours.component.scss']
})
export class AddOpeninghoursComponent implements OnInit {

  addOpeningHoursForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private _router: Router, private _auth: AuthenticationService) { }

  location: string;
  day_of_the_week: string;
  open_time: string;
  close_time: string;
  submitbtn: string = "Submit";

  ngOnInit() {
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
      $('.select2').select2();
    });

    this.addOpeningHoursForm = this.formBuilder.group({
      location: ['', Validators.required],
      day_of_the_week: ['', Validators.required],
      open_time: ['', Validators.required],
      close_time: ['', Validators.required]
    });
  }

  get f() { return this.addOpeningHoursForm.controls; }

  addOpeningHours() {
    this.submitted = true;
    this.submitbtn = "Proces..."
    if (this.addOpeningHoursForm.invalid) {
      return;
    } else {
      this._auth.loginUser(this.addOpeningHoursForm.value).subscribe(
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
