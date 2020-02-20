import regmodel from "../../model/registrationmodel"

export default interface iregistrationuiservice
{
  getbyId(id:string):any;
  getData():any;
  deleteuser(id:string):any
  saveuser(reg:regmodel):any
}



