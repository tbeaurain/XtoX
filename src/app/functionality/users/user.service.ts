import { Injectable } from '@angular/core';
import { User } from '../../Class/user';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';


export class UserService {
  getUsers(): Observable<User[]>{
    return of();
  }
  //return the Different user when we connect the backend and the frontend
  constructor() { }
}
