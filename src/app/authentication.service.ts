import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {Observable} from 'rxjs';
import {AlertsService ,AlertType,AlertSettings} from "@jaspero/ng2-alerts";
import {Params} from "./app.params";
import "rxjs/add/operator/map";
@Injectable()
export class AuthenticationService {
  options:AlertSettings = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    duration: 30000,
  }
  public token:string;
  constructor(private _http:Http,public _alert:AlertsService) { 
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }
  createAuthorizationHeader():Headers {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.token ); 
    headers.append('Content-Type', 'application/json');    
    return headers;
  }
  openAlert(type: AlertType,MSG:string) {
    this._alert.create(type, MSG,this.options);
  }
  login(username:string,password:string): Observable <boolean> {
    return this._http.post(Params.host_backend + "/login.model.php", JSON.stringify({ username: username, password: password }))
    .map((res) => {
      // login successful if there's a jwt token in the response
      //console.log(res.text());
      
      this.openAlert(res.json().type,res.json().MSG);
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
