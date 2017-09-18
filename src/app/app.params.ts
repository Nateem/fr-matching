
declare interface paramsInfo{
    [name:string]:any;
} 
const params:paramsInfo={
    app_name:"ฟาร์มรักษ์ ส่วนกลาง",
    app_shortname:"Matching",
    app_logo:"/assets/img/farmruks_logo2.gif",
    app_desciption:"",
    host_retail_main:"http://localhost/farmruk/FrontOffice",
    //host_retail_main:"http://farmruks.com/retail",
    host_backend:"http://localhost/farmruk/api/matching"       
}

export const Params=params;