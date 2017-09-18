import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { AuthenticationService } from '../authentication.service';
import { Params } from '../app.params';
import "rxjs/add/operator/map";

@Injectable()
export class CloudServiceDetailService {

  public token:string;
  constructor(private _http:Http ,private _auth:AuthenticationService) { 
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token;   
  } 
  SelectWhereBillcode(BILL_CODE){
    return this._http.post(Params.host_backend + '/cloud-service-detail.model.php',JSON.stringify({BILL_CODE:BILL_CODE}),{
      headers:this._auth.createAuthorizationHeader()
    }).map(res=>res.json());
  }

}
