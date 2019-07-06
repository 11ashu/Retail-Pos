import { Component, OnInit } from '@angular/core';
declare var $;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private _router: Router, private _auth: AuthenticationService) { }

  name: string;
  description: string;
  tax_rate: string;
  submitbtn: string = "Submit";

  ngOnInit() {
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
      $('.select2').select2();
    });

    this.addCategoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      tax_rate: ['']
    });
  }

  get f() { return this.addCategoryForm.controls; }

  addCategory() {
    this.submitted = true;
    this.submitbtn = "Proces..."
    if (this.addCategoryForm.invalid) {
      return;
    } else {
      this._auth.loginUser(this.addCategoryForm.value).subscribe(
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
