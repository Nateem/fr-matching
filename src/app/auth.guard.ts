import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthHttp, AuthConfig ,JwtHelper } from 'angular2-jwt';
import {AlertsService ,AlertType,AlertSettings} from "@jaspero/ng2-alerts";

@Injectable()
export class AuthGuard implements CanActivate {
    options:AlertSettings = {
        overlay: true,
        overlayClickToClose: true,
        showCloseButton: true,
        duration: 30000,
    }
    curUsr:any;
    token:string;
    jwtHelper: JwtHelper = new JwtHelper();
    constructor(private router: Router,private _alert:AlertsService) {
        
     }

    canActivate() {
        if(localStorage.getItem('currentUser')){
            // logged in so return true
            this.curUsr = JSON.parse(localStorage.getItem('currentUser'));
            this.token = this.curUsr.token;
            /*
            console.log(
                this.jwtHelper.decodeToken(this.token),
                this.jwtHelper.getTokenExpirationDate(this.token),
                this.jwtHelper.isTokenExpired(this.token)
              );*/
            if (!this.jwtHelper.isTokenExpired(this.token)) {
                //ถ้า token ยังไม่หมดอายุ
                return true;
                
            }
            else{
                this._alert.create('error', "Token หมดอายุ กรุณาเข้าสู่ระบบใหม่อีกครั้ง !",this.options)
            }
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}