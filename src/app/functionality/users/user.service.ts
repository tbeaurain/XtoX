import { Injectable } from '@angular/core';
import { User } from '../../class/user';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
/**Pour la prochaine fois voir si on génère les messages d'erreur avec la composante message pour
 * résoudre le problèmes de log 
 * 
 */

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class UserService {

  private usersUrl = 'api/users'  // URL to web api

  constructor(
    private http: HttpClient
    
  ) { }
 
  /** GET Users from the server**/
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  /** GET User by id. **/
  getUserbyId (id:number): Observable<User> {
    const url = `${this.usersUrl}/{id}`;
    return this.http.get<User>(url)
  }
  
 
  /** PUT: update the user on the server */
  updateUser (user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions)
  }

  //////// Save methods //////////
 
  /** POST: add a new user to the server */
  addHero (hero: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, hero, httpOptions)
  }
 
  /** DELETE: delete the user from the server */
  deleteHero (hero: User | number): Observable<User> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.usersUrl}/${id}`;
 
    return this.http.delete<User>(url, httpOptions)
  }
 
  /** PUT: update the user on the server */
  updateHero (hero: User): Observable<any> {
    return this.http.put(this.usersUrl, hero, httpOptions)
  }



  
}
