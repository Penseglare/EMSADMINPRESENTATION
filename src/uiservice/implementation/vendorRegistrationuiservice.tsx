import "reflect-metadata";
import { injectable} from "inversify";
import axios from 'axios';
import ivendorRegistrationuiservice from "../interface/ivendorRegistrationuiservice";

import Vendormodel from "../../model/Vendormodel"
import baseConfig from "../../config/baseConfig"
var CryptoJS = require("crypto-js");
@injectable()
export default class vendorRegistrationuiservice implements ivendorRegistrationuiservice
{
    public savevendorReg(vendor:Vendormodel):any
    {
       //alert(JSON.stringify(vendor));
      // debugger;
      //console.log(vendor);
      
      var cipherpwd = CryptoJS.AES.encrypt(JSON.stringify(vendor.Password), 'Penseglare@user').toString();
      vendor.Password=cipherpwd;
      vendor.City="city";
      vendor.Category="category";
      vendor.State="State";
      alert(JSON.stringify(vendor));
           return axios({method:'post',
        url:baseConfig.baseUrl+'api/savevendor', 
        data:vendor,
        headers:{'Access-Control-Allow-Origin':'*','Content-Type':'application/json'}
      })
      .then((response:any) => {
        console.log(response);
          return response;
       })
      .catch(function (error:any) {
          console.log(error);
      })
    }
    public  getData():any
    {
        return axios.get(baseConfig.baseUrl+'api/getallRegistredvendors')
        .then((response:any) => {
          let vedmodels = Array<Vendormodel>();
          response.data.map((v:any,i:number)=>{
            let vmodel = new Vendormodel(); 
            vmodel.Vendername = v._vendername;
            vmodel.Mobilenumber=v._mobilenumber;
            vmodel.Emailid = v._emailid;
            vmodel.Password=v._password;
            vmodel.Category = v._category;
            vmodel.City=v._city;
            vmodel.State = v._state;
            vmodel.Id=v._id;
            vedmodels.push(vmodel);
          })
            return vedmodels;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }
    public  getbyId(id:string):any
    {
      // var bytes = CryptoJS.AES.decrypt(ciphertext, 'Penseglare@user');
      // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));  
        let vmodel = new Vendormodel();
        console.log(id);
         return axios.get(baseConfig.baseUrl+'api/getRegistredvendorById/'+id)
        .then((response:any) => {
          vmodel.Vendername = response.data._vendername;
          vmodel.Mobilenumber=response.data._mobilenumber;
          vmodel.Emailid = response.data._emailid;
          vmodel.Password=response.data._password;
          vmodel.Category = response.data._category;
           vmodel.City=response.data._city;
          vmodel.State = response.data._state;
          vmodel.Id=response.data._id;
            return vmodel;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }
}