import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ConnectbackendService {
  private apiURL = 'http://127.0.0.1:8000/users/';
  constructor(private http: Http) { }

  

  getUsers() {
    return this.http.get(this.apiURL)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
