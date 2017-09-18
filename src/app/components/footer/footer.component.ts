import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { CountdownDatetimeComponent } from '../countdown-datetime/countdown-datetime.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  entryComponents: [CountdownDatetimeComponent]
})
export class FooterComponent implements OnInit {

  curUsr: any;
  token: any;
  data: Date;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() {

  }




  ngOnInit() {
    this.curUsr = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.curUsr.token;
    this.data = this.jwtHelper.getTokenExpirationDate(this.token);

  }

}
