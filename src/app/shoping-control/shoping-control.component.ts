import { Component, OnInit } from '@angular/core';
import { ShopingControlService } from './shoping-control.service';
@Component({
  selector: 'app-shoping-control',
  templateUrl: './shoping-control.component.html',
  styleUrls: ['./shoping-control.component.css']
})
export class ShopingControlComponent implements OnInit {
  dataRepeat:any;
  params:any;
  listOrderBy:Array<Object> = [
    {
      KEY:"BILL_CODE",
      NAME:"เลขที่"
    },
    {
      KEY:"DATE_TIME",
      NAME:"วันที่"
    },
    {
      KEY:"OZ_ID",
      NAME:"ผู้สั่ง"
    }
  ];
  listAscDesc:Array<Object> = [
    {
      KEY:"ASC",
      NAME:"น้อยไปหามาก"
    },
    {
      KEY:"DESC",
      NAME:"มากไปหาน้อย"
    }
  ]
  form:any = {
    LIMIT:50,
    SEARCH:"",
    ORDER_BY:"BILL_CODE",
    ASC_DESC:"DESC"
  }
  constructor(private _shop:ShopingControlService) { }

  SelectOrdersShop(params?:any){
    this._shop.SelectShopingControl({
      TYPES:"SELECT_orders_shop",
      PARAMS:params
    }).subscribe(
      (data)=>{
    
        if(data.ERROR==false){
          this.dataRepeat = data.DATA;
        }  
        //console.log(data);
        
      },
      (err)=>console.log(err),
      ()=>console.log("Finised")
      
    );
  }
  ngOnInit() {
    this.SelectOrdersShop(this.form);
  }


}
