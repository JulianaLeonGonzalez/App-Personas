import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  person = new Person;
  constructor(private personsService : PersonsService) {
    
  }
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'birth': new FormControl(null, Validators.required),
        'fatherName': new FormControl(null),
        'motherName': new FormControl(null)
      }),
    });
  }

  onSubmit() {
    
    this.person.name=this.signupForm.value.userData.name;
    this.person.birth=this.signupForm.value.userData.birth;
    this.person.fatherName=this.signupForm.value.userData.fatherName;
    this.person.motherName=this.signupForm.value.userData.motherName;
    this.personsService.addPerson(this.person).subscribe(data => {
      console.log(data);
    });
    this.signupForm.reset();
  }
  

}
