//import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorHandler, Injectable} from '@angular/core';
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //API_URL:string  =  'http://localhost:8080/SampleDemo';

  

  constructor(private  http:  HttpClient) { }

  public createUser(user: User): Observable<User>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token,Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin' : '*'
        //'Authorization': 'my-auth-token'
      })
    };
    console.log(JSON.stringify (user));
    console.log(httpOptions);
    return  this.http.post<any>(`/customers/createCustomer`,JSON.stringify (user),httpOptions)
    .pipe(
      catchError(this.handleError)
    );

  }


  


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  public getUsers() : Observable<User[]>{ 
    return this.http.get<User[]>('/getUsers')
    .pipe(
      catchError(this.handleError)
    );

  }





}
