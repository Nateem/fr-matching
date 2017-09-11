import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params ,Route} from '@angular/router';
import {JsonActionService} from '../json-action.service';
import { ShopingControlDetailService } from './shoping-control-detail.service';

@Component({
  selector: 'app-shoping-control-detail',
  templateUrl: './shoping-control-detail.component.html',
  styleUrls: ['./shoping-control-detail.component.css']
})
export class ShopingControlDetailComponent implements OnInit {
  dataCaption?:any = {
    OZ_NAME:"",
    user_NAME:""
  };
  statusGet:any;
  dataRepeat:any;
  param_BILL_CODE:string;

  constructor(private _route: ActivatedRoute,private _shop_detail:ShopingControlDetailService,private _jsonService:JsonActionService) {
   this.param_BILL_CODE = _route.snapshot.params['BILL_CODE'];
   this.getDataWhere(this.param_BILL_CODE); 
  }
  getStatusData(){
    this._jsonService.SelectStatus().subscribe(
      (data)=>{
        this.statusGet = data;  
        //console.log(this.statusGet);        
      }
    )
  }
  getDataWhere(BILL_CODE){
    this._shop_detail.SelectWhereBillcode(BILL_CODE).subscribe(
      (data)=>{
        this.dataCaption = data.DATA.CAPTION;
        this.dataRepeat = data.DATA.BODY;
        //console.log(data);
        
      }
    )
  }

  ngOnInit() {
    this.getStatusData();
    
    
    
  }

}
