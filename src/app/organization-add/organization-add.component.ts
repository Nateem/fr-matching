import { Component, OnInit } from '@angular/core';
import { AgmMap,AgmMarker } from '@agm/core';

@Component({
  selector: 'app-organization-add',
  templateUrl: './organization-add.component.html',
  styleUrls: ['./organization-add.component.css']
})

export class OrganizationAddComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number = 13.755716;
    lng: number = 100.501589;

 
      
  constructor() { }

  ngOnInit() {

  }
  placeMarker($event){
      this.lat = $event.coords.lat;
      this.lng = $event.coords.lng;

  }

}
