import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  personsList = [];
  constructor(private personsService : PersonsService) {
    
   }

  ngOnInit(): void {
    this.personsService.listPersons().subscribe((persons) => {
      this.personsList=persons;
      console.log(persons);
    })
  }

}
