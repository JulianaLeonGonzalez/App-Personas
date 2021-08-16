import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Person } from '../models/person';
import { EndPoints } from '../shared/end-points';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { 
  }

  listPersons(): Observable<Array<Person>> {
    return this.http.get<Array<Person>>(EndPoints.listPersonsAPI).pipe(
      catchError(
        error => throwError(
          error.message || 'Server error'
        )
        
      )
    );
  }

  addPerson( person : Person ): Observable<any> {

    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(EndPoints.createPersonAPI, body,{'headers':headers})
      .pipe(
        catchError(
          error => throwError(
            error.message || 'Server error'
          )
        )
      );
  }
}
