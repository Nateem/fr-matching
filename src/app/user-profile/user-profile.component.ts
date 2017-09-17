import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import {Params} from '../app.params';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  curUsr:any;
  token:any;
  data:any;
  jwtHelper: JwtHelper = new JwtHelper();
  host:any;
  constructor() { }

  ngOnInit() {
    this.curUsr = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.curUsr.token;
    this.data = this.jwtHelper.decodeToken(this.token);
    this.host = Params.host_main + '/retail/' + this.data.img;
    /*
    console.log(
        this.jwtHelper.decodeToken(this.token),
        this.jwtHelper.getTokenExpirationDate(this.token),
        this.jwtHelper.isTokenExpired(this.token)
      );*/
  }

}
