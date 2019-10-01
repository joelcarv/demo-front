import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Customer } from '../shared/customer';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

    // get customer list
    getCustomersFiltered(state,country): Observable<Customer[]> {
      let params = new HttpParams();//.set('state',state).set('country',country);
      if (state) {
        params = params.set('state', state);
      }
      if (country) {
        params = params.set('country', country);
      }
      return this.http.get<Customer[]>(this.apiURL + '/customers' , { params })
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

  // get customer list
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiURL + '/customers' )
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.error(errorMessage);
     //window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
