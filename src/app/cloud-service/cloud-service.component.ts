import { Component, OnInit } from '@angular/core';
import { CloudServiceService } from './cloud-service.service';
@Component({
  selector: 'app-cloud-service',
  templateUrl: './cloud-service.component.html',
  styleUrls: ['./cloud-service.component.css']
})
export class CloudServiceComponent implements OnInit {
  dataRepeat:any;
  params:any;
  listOrderBy:Array<Object> = [
    {
      KEY:"BILL_CODE",
      NAME:"เลขที่"
    },
    {
      KEY:"OZ_ID",
      NAME:"ร้านค้า"
    },
    {
      KEY:"TOP_SELLING",
      NAME:"ยอดขาย"
    }
    ,
    {
      KEY:"PRICE",
      NAME:"ค่าเช่า"
    }
    ,
    {
      KEY:"STATUS",
      NAME:"สถานะ"
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
  constructor(private _cldserv:CloudServiceService) { }
  
  SelectCloudService(params?:any){
    this._cldserv.SelectCloudService({
      TYPES:"SELECT_cloud_service",
      PARAMS:params
    }).subscribe(
      (data)=>{
        this.dataRepeat = data.DATA;
        console.log(data);
        
      }
    )
  }

  ngOnInit() {
    this.SelectCloudService(this.form);
  }

}
