import "reflect-metadata";
import { injectable} from "inversify";
import axios from 'axios';
import iuseruiservice from "../interface/iuseruiservice";

import usermodel from "../../model/usermodel"

@injectable()
export default class useruiservice implements iuseruiservice
{
  public  getbyId(id:string):any
    {
        debugger;
        let rmodel = new usermodel();
        console.log(id);
         return axios.get('http://localhost:4000/api/getRegisteredUserById/'+id)
        //return axios.get('http://192.168.1.3:8082/api/id'+id+'/getRegisteredUserById')
        
        .then((response:any) => {
            debugger;
            rmodel.UserName = response.data._username;
            rmodel.Address=response.data._address;
            rmodel.Password = response.data._password;
            rmodel.ConfirmPassword=response.data._confirmpassword;
            rmodel.UserId = response.data._userid;
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
          let usermodels = Array<usermodel>();
          response.data.map((v:any,i:number)=>{
            let rmodel = new usermodel(); 
            rmodel.UserName = v._username;
            rmodel.Address=v._address;
            rmodel.Password = v._password;
            rmodel.ConfirmPassword=v._confirmpassword;
            rmodel.UserId=v._userid;
            usermodels.push(rmodel);
          })
            return usermodels;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }
    public  deleteuser(id:string):any
    {
        debugger;
        let rmodel = new usermodel();
        console.log(id);
         return axios.get('http://localhost:4000/api/deleteuser/'+id)
        //return axios.get('http://192.168.1.3:8082/api/id'+id+'/getRegisteredUserById')
        
        .then((response:any) => {
          debugger;
          let usermodels = Array<usermodel>();
          response.data.map((v:any,i:number)=>{
            let rmodel = new usermodel(); 
            rmodel.UserName = v._username;
            rmodel.Address=v._address;
            rmodel.Password = v._password;
            rmodel.ConfirmPassword=v._confirmpassword;
            rmodel.UserId=v._userid;
            usermodels.push(rmodel);
          })
            return usermodels;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }

    public saveuser(reg:usermodel):any
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
    public updateuser(reg:usermodel,id:string):any
    {
      debugger;
      console.log(reg);
       return axios({method:'PUT',
        url:'http://localhost:4000/api/updateuser/'+id, 
        data:reg,
        headers:{'Access-Control-Allow-Origin':'*','Content-Type':'application/json'}
      })
      .then((response:any) => {
        debugger;
        console.log(response);
          return response;
       })
      .catch(function (error:any) {
          console.log(error);
      })
    }
}