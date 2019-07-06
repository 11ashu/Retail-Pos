import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  countryForm: FormGroup;
  submitted = false;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.countryForm = this.fb.group({
      nme: ['', [Validators.required]],
      description: [''],
    });
  }
  get myForm() {
    return this.countryForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.countryForm.valid) {
      return false;
    } else {
      console.log(this.countryForm.value)
    }
  }
}
