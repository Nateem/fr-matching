import { Component, OnInit } from '@angular/core';
import { AgmMap,AgmMarker } from '@agm/core';
import {AlertsService ,AlertType,AlertSettings} from "@jaspero/ng2-alerts";
import { JsonActionService } from '../json-action.service';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-organization-add',
  templateUrl: './organization-add.component.html',
  styleUrls: ['./organization-add.component.css']
})

export class OrganizationAddComponent implements OnInit {
    options:AlertSettings = {
      overlay: true,
      overlayClickToClose: true,
      showCloseButton: true,
      duration: 30000,
    }
    
    proviceRepeat:any;
    amphurRepeat:any;
    districtRepeat:any;
    form?:any = {
      lat: 13.755716,
      lng: 100.501589,
      province_ID: "",
      amphur_ID: "",
      district_ID: "",
    }
    result:any;
    

 
      
  constructor(private _jsonAT:JsonActionService,private _http:Http,public _alert:AlertsService) { }
  openAlert(type: AlertType,MSG:string) {
    this._alert.create(type, MSG,this.options);
  }
  OrganizationAdd(FORM_DATA:any){
    this._http.post('http://localhost/farmruk/matching/api/organization_add.model.php',{FORM_DATA:FORM_DATA}).map(res=>res.json()).subscribe((data)=>{
      this.result = data;
      if(data.ERROR == false){
        this.form = {};
        this.form = {
          lat: 13.755716,
          lng: 100.501589,
          province_ID: "",
          amphur_ID: "",
          district_ID: "",
        }
      }
      this.openAlert(data.TYPE,data.MSG);
      //console.log(data);
    });    
  }
  getProvince(){
   this._jsonAT.getProvince().subscribe(
      (data)=>{
        this.proviceRepeat = data;
      }
    );
    
  }
  getAmphur(provice_ID){
    this.form.amphur_ID = '';
    this.form.district_ID = '';
    this._jsonAT.getAmphur(provice_ID).subscribe(
      (data)=>{
        this.amphurRepeat = data;
      }
    )
  }
  getDistrict(amphur_ID){
    this.form.district_ID = '';
    this._jsonAT.getDistrict(amphur_ID).subscribe(
      (data)=>{
        this.districtRepeat = data;
      }
    )
  }
  placeMarker($event){
      this.form.lat = $event.coords.lat;
      this.form.lng = $event.coords.lng;
  }
  ngOnInit() {
    this.getProvince();
  
  }

}
