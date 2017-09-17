import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  curUsr:any;
  token:any;
  data:any;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor() { }

  ngOnInit() {
    this.curUsr = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.curUsr.token;
    this.data = this.jwtHelper.decodeToken(this.token);
    /*
    console.log(
        this.jwtHelper.decodeToken(this.token),
        this.jwtHelper.getTokenExpirationDate(this.token),
        this.jwtHelper.isTokenExpired(this.token)
      );*/
  }
  

}
