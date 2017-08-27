import { Component, OnInit } from '@angular/core';
import {Routes_menu} from '../../app.routing';

declare const $: any;
declare interface RouteInfo {
    path?: string;
    data?:{
        [title:string]:any;
    };
}
export const ROUTES:RouteInfo[] = Routes_menu; 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES;
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
