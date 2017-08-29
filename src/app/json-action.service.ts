import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Params } from './app.params';
import "rxjs/add/operator/map";

@Injectable()
export class JsonActionService {
  public token:string;
  constructor(private _http:Http) { 
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token;   
  }
  createAuthorizationHeader():Headers {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.token ); 
    headers.append('Content-Type', 'application/json');    
    return headers;
  }
  
  getProvince(){
    return this._http.post(Params.host_backend + "/jsonAction.php",JSON.stringify({nextList:"province"}),{
      headers:this.createAuthorizationHeader()
    }).map(res=>res.json());
  }
  getAmphur(province_ID){
    return this._http.post(Params.host_backend + "/jsonAction.php",JSON.stringify({nextList:"amphur",province_ID:province_ID}),{
      headers:this.createAuthorizationHeader()
    }).map(res=>res.json());
  }
  getDistrict(amphur_ID){
    return this._http.post(Params.host_backend + "/jsonAction.php",JSON.stringify({nextList:"district",amphur_ID:amphur_ID}),{
      headers:this.createAuthorizationHeader()
    }).map(res=>res.json());
  }
}
