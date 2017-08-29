import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Params } from './app.params';
import "rxjs/add/operator/map";

@Injectable()
export class JsonActionService {
  constructor(private _http:Http) { }

  getProvince(){
    return this._http.post(Params.host_backend + "/jsonAction.php",{nextList:"province"}).map(res=>res.json());
  }
  getAmphur(province_ID){
    return this._http.post(Params.host_backend + "/jsonAction.php",{nextList:"amphur",province_ID:province_ID}).map(res=>res.json());
  }
  getDistrict(amphur_ID){
    return this._http.post(Params.host_backend + "/jsonAction.php",{nextList:"district",amphur_ID:amphur_ID}).map(res=>res.json());
  }
}
