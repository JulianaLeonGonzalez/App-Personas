import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'birth': new FormControl(null, Validators.required)
      }),
    });
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

}
