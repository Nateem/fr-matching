import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Route} from '@angular/router';
import { CloudServiceDetailService } from './cloud-service-detail.service';
import { Params } from '../app.params';

@Component({
  selector: 'app-cloud-service-detail',
  templateUrl: './cloud-service-detail.component.html',
  styleUrls: ['./cloud-service-detail.component.css']
})
export class CloudServiceDetailComponent implements OnInit {
  dataCaption?:any = {
    OZ_NAME:"",
    OZ_ID:""
  };
  statusGet:any;
  dataRepeat:any;
  param_BILL_CODE:string;
  pathHostFile:string;

  ADMIN_MSG:string;

  constructor(private _route:ActivatedRoute,private _cldserv:CloudServiceDetailService) { 
    this.param_BILL_CODE = _route.snapshot.params['BILL_CODE'];
    
    
    
  }
  SelectWhereBillcode(){
    this._cldserv.SelectWhereBillcode(this.param_BILL_CODE).subscribe(
      (data)=>{
        this.dataCaption = data.DATA.CAPTION;
        this.dataRepeat = data.DATA.BODY;
        this.ADMIN_MSG = data.DATA.CAPTION.ADMIN_MSG;
        console.log(data);
        
      }
    );
  }

  ngOnInit() {
    this.pathHostFile = Params.host_retail_main + '/img/pay_confirm/';
    this.SelectWhereBillcode();
  }

}
