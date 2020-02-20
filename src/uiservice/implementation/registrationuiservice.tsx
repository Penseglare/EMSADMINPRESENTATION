import "reflect-metadata";
import { injectable} from "inversify";
import axios from 'axios';
import iregistrationuiservice from "../interface/iregistrationuiservice";

import regmodel from "../../model/registrationmodel"

@injectable()
export default class registrationuiservice implements iregistrationuiservice
{
  public  getbyId(id:string):any
    {
        debugger;
        let rmodel = new regmodel();
        console.log(id);
         return axios.get('http://localhost:4000/api/getRegisteredUserById/'+id)
        //return axios.get('http://192.168.1.3:8082/api/id'+id+'/getRegisteredUserById')
        
        .then((response:any) => {
            debugger;
            rmodel.Name = response.data._name;
            rmodel.Code=response.data._code;
            rmodel.Id = response.data._pkId;
            return rmodel;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }
    public  getData():any
    {
        debugger;
        //return axios.get('http://192.168.1.3:8082/api/getRegisteredUser')
        return axios.get('http://localhost:4000/api/getRegisteredUser')
        .then((response:any) => {
            debugger;
          let regmodels = Array<regmodel>();
          response.data.map((v:any,i:number)=>{
            let rmodel = new regmodel(); 
            rmodel.Name = v._name;
            rmodel.Code=v._code;
            rmodel.Id = v._pkId;
            regmodels.push(rmodel);
          })
            return regmodels;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }
    public  deleteuser(id:string):any
    {
        debugger;
        let rmodel = new regmodel();
        console.log(id);
         return axios.get('http://localhost:4000/api/deleteuser/'+id)
        //return axios.get('http://192.168.1.3:8082/api/id'+id+'/getRegisteredUserById')
        
        .then((response:any) => {
          debugger;
          let regmodels = Array<regmodel>();
          response.data.map((v:any,i:number)=>{
            let rmodel = new regmodel(); 
            rmodel.Name = v._name;
            rmodel.Code=v._code;
            rmodel.Id = v._pkId;
            regmodels.push(rmodel);
          })
            return regmodels;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }

    public saveuser(reg:regmodel):any
    {
      debugger;
      console.log(reg);
           return axios({method:'post',
        url:'http://localhost:4000/api/saveuser', 
        data:reg,
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