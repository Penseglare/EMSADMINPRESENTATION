import usermodel from "../../model/usermodel"

export default interface iuseruiservice
{
  getbyId(id:string):any;
  getData():any;
  deleteuser(id:string):any
  saveuser(reg:usermodel):any
  updateuser(reg:usermodel,id:string):any
}