import "reflect-metadata";
import { injectable} from "inversify";
import axios from 'axios';
import iusergroupuiservice from "../interface/iusergroupuiservice";
import usergroupmodel from "../../model/usergroupmodel"

@injectable()
export default class usergroupuiservice implements iusergroupuiservice
{
  public  getUserGroupById(id:string):any
    {
        debugger;
        let usergrpmodel  = new usergroupmodel();
        console.log(id);
         return axios.get('http://localhost:4000/api/getUserGroupById/'+id)
        
        .then((response:any) => {
            debugger;
            usergrpmodel.UserGroupName = response.data._usergroupname;
            usergrpmodel.UserGroupDescription=response.data._usergroupdescription;
            usergrpmodel.Id = response.data._id;
            return usergrpmodel;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }
    public  getUserGroup():any
    {
        debugger;
        let usergrpmodels = Array<usergroupmodel>();
       return axios.get('http://localhost:4000/api/getUserGroup')
        .then((response:any) => {
            debugger;
          console.log(response.data);
          response.data.map((v:any,i:number)=>{
            let usrgrpmodel = new usergroupmodel(); 
            usrgrpmodel.UserGroupName = v._groupname;
            usrgrpmodel.UserGroupDescription=v._groupdescription;
            usrgrpmodel.Id = v._id;
            usrgrpmodel.ExportReport=v._exportreports;
            usergrpmodels.push(usrgrpmodel);
          })
          return usergrpmodels;
         })
         
        .catch(function (error:any) {
            console.log(error);
        })

    }
    public  deleteUserGroup(id:string):any
    {
        debugger;
        let usergrpmodels = new usergroupmodel();
        console.log(id);
         return axios.get('http://localhost:4000/api/deleteUserGroup/'+id)
       
        .then((response:any) => {
          debugger;
          let usergroupmodels = Array<usergroupmodel>();
          response.data.map((v:any,i:number)=>{
            let usergrpmodels = new usergroupmodel(); 
            usergrpmodels.UserGroupName = v._usergroupname;
            usergrpmodels.UserGroupDescription=v._usergroupdescription;
            usergrpmodels.Id = v._id;
            usergroupmodels.push(usergrpmodels);
          })
            return usergroupmodels;
         })
        .catch(function (error:any) {
            console.log(error);
        })

    }

    public saveUserGroup(usergroup:usergroupmodel):any
    {
      debugger;
      console.log(usergroup);
           return axios({method:'post',
        url:'http://localhost:4000/api/saveUserGroup', 
        data:usergroup,
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
    public updateUserGroup(usergroup:usergroupmodel,id:string):any
    {
      debugger;
      console.log(usergroup);
       return axios({method:'PUT',
        url:'http://localhost:4000/api/updateUserGroup/'+id, 
        data:usergroup,
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