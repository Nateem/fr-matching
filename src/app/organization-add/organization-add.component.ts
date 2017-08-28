import { Component, OnInit } from '@angular/core';
import { AgmMap,AgmMarker } from '@agm/core';
import { JsonActionService } from '../json-action.service';
@Component({
  selector: 'app-organization-add',
  templateUrl: './organization-add.component.html',
  styleUrls: ['./organization-add.component.css']
})

export class OrganizationAddComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number = 13.755716;
    lng: number = 100.501589;
    
    proviceRepeat:any;
    amphurRepeat:any;
    districtRepeat:any;
    form?:any = {
      province_ID: "",
      amphur_ID: "",
      district_ID: "",
    }
    

 
      
  constructor(private _jsonAT:JsonActionService) { }

  
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
      this.lat = $event.coords.lat;
      this.lng = $event.coords.lng;
  }
  ngOnInit() {
    this.getProvince()
  }

}
