import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AuthenticationService } from '../authentication.service';
import { Params } from '../app.params';
import "rxjs/add/operator/map";

@Injectable()
export class CloudServiceService {

  constructor(private _http:Http ,private _auth:AuthenticationService)  { }
  SelectCloudService(params:object){
    return this._http.post(Params.host_backend + '/cloud-service.model.php',JSON.stringify(params),{
      headers:this._auth.createAuthorizationHeader()
    }).map(res=>res.json());
  }
}
