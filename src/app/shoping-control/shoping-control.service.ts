
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AuthenticationService } from '../authentication.service';
import { Params } from '../app.params';
import "rxjs/add/operator/map";

@Injectable()
export class ShopingControlService {
  public token:string;
  constructor(private _http:Http ,private _auth:AuthenticationService) { 
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token;   
  }
  SelectShopingControl(params:object){
    return this._http.post(Params.host_backend + '/shoping-control.model.php',JSON.stringify(params),{
      headers:this._auth.createAuthorizationHeader()
    }).map(res=>res.json());
  }
}
