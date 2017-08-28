import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {Observable} from 'rxjs';
import "rxjs/add/operator/map";
@Injectable()
export class AuthenticationService {
  public token:string;
  constructor(private _http:Http) { 
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username:string,password:string):Observable <boolean> {
    return this._http.post("http://localhost/farmruk/matching/api/login.model.php", JSON.stringify({ username: username, password: password }))
    .map((res) => {
      // login successful if there's a jwt token in the response
      let token = res.json() && res.json().token;
      if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          // return true to indicate successful login
          return true;
      } else {
          // return false to indicate failed login
          return false;
      }
     });
  }
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
  
}
