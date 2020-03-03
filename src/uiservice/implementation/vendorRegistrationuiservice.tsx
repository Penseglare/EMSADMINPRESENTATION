import "reflect-metadata";
import { injectable} from "inversify";
import axios from 'axios';
import ivendorRegistrationuiservice from "../interface/ivendorRegistrationuiservice";

import Vendormodel from "../../model/Vendormodel"

@injectable()
export default class vendorRegistrationuiservice implements ivendorRegistrationuiservice
{
    public savevendorReg(vendor:Vendormodel):any
    {
      // alert(JSON.stringify(vendor));
      console.log(vendor);
           return axios({method:'post',
        url:'http://localhost:4000/api/savevendor', 
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
}