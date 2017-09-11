import { Injectable } from '@angular/core';
import { Params } from '../app.params';
import { Http,Headers } from '@angular/http';
import { AuthenticationService } from '../authentication.service';
import "rxjs/add/operator/map";
@Injectable()
export class OrganizationAddService {

  constructor(private _http:Http,private _auth:AuthenticationService) { }

  organizationAdd(FORM_DATA:any){
    return this._http.post(Params.host_backend + '/organization_add.model.php',JSON.stringify({FORM_DATA:FORM_DATA}),{
      headers:this._auth.createAuthorizationHeader()
    }).map(res=>res.json());
  }
  
}
