/**
 * @fileoverview El componente list llama la función listPersons del servicio persons.service y luego muestra los datos en pantalla 
 * @version 
 * @author  Laura Juliana Leon <ljulianalg19@gmail.com>
*/

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  personsList = [];
  error = null;
  isError = false;
  private errorSub: Subscription;
  
  constructor(private personsService : PersonsService) {
   }

  ngOnInit() {
    this.errorSub = this.personsService.error.subscribe(
      errorMessage => {
        this.error = errorMessage;
        console.log(this.error);
      });
    this.personsService.listPersons().subscribe(
      persons => {
      this.personsList=persons;
      console.log(persons);
    },
    error => {
      this.isError=true;
      this.error = error.message;
    }
    );
  }
}
