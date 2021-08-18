/**
 * @fileoverview El componente form se encarga de solicitar los datos al usuario y cuando el form es cargado llama la función addPerson del servicio persons.service
 * @version 
 * @author  Laura Juliana Leon <ljulianalg19@gmail.com>
*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/models/person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  person = new Person;
  error = null;
  isError = false;
  private errorSub: Subscription;

  constructor(private personsService : PersonsService) {
  }
  signupForm: FormGroup;
  ngOnInit() {
      this.errorSub = this.personsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

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

    if(this.signupForm.value.userData.fatherName == null || this.signupForm.value.userData.fatherName =="")this.person.fatherName="No aplica";
    if(this.signupForm.value.userData.motherName == null || this.signupForm.value.userData.motherName =="")this.person.motherName="No aplica";
   
    this.personsService.addPerson(this.person).subscribe(
      data => {
        window.alert(data.message);
      },
      error => {
        this.isError=true;
        this.error=error;
        if(error== "Http failure response for http://localhost:3000/create: 406 Not Acceptable") this.error="Los datos de los padres son incorrectos o no han sido registrados";
        if(error== "Http failure response for http://localhost:3000/create: 500 Internal Server Error") this.error="Error accediendo a la base de datos";
        if(error== "Http failure response for http://localhost:3000/create: 400 Bad Request") this.error="Esta persona ya existe en la base de datos";
      }
    );
    this.signupForm.reset();
  }
  
  onHandleError() {
    this.isError = false;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

}
