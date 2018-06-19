import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ConnectbackendService {
  private apiUserURL = 'http://127.0.0.1:8000/users/';
  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any> {
    return this.http.post( this.apiUserURL , userData);
  }
  loginUser(userData): Observable<any> {
    return this.http.post( this.apiUserURL , userData);
  }

  /*getUsers() {
    return this.http.post(this.apiURL)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }*/

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
