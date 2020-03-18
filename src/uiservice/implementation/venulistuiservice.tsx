import "reflect-metadata";
import { injectable} from "inversify";
import axios from 'axios';
import ivenulistuiservice from "../interface/ivenulistuiservice";
import regmodel from "../../model/venulistmodel"
import baseConfig from "../../config/baseConfig"
@injectable()
export default class venulistuiservice implements ivenulistuiservice
{
    public  getData():any
    {
        debugger;
        //return axios.get('http://192.168.1.3:8082/api/getRegisteredUser')
        return axios.get(baseConfig.baseUrl+'api/getVenuList')
        .then((response:any) => {
            debugger;
          let regmodels = Array<regmodel>();
          response.data.map((v:any,i:number)=>{
            let rmodel = new regmodel(); 
            rmodel.Name = v._name;
            rmodel.Place=v._place;
            rmodel.Address = v.address;
            rmodel.Location = v.location;
            rmodel.PkId=v._pkId
            regmodels.push(rmodel);
          })
            return regmodels;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }
    public  getDataBySearch():any
    {
        debugger;
        //return axios.get('http://192.168.1.3:8082/api/getRegisteredUser')
        return axios.get(baseConfig.baseUrl+'api/getVenuListBySearch')
        .then((response:any) => {
            debugger;
          let regmodels = Array<regmodel>();
          response.data.map((v:any,i:number)=>{
            let rmodel = new regmodel(); 
            rmodel.Name = v._name;
            rmodel.Place=v._place;
            rmodel.Address = v.address;
            rmodel.Location = v.location;
            rmodel.PkId=v._pkId
            regmodels.push(rmodel);
          })
            return regmodels;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }

}