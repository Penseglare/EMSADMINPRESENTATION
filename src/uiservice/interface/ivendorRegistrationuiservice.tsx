import Vendormodel from "../../model/Vendormodel"

export default interface ivendorRegistrationuiservice
{
    savevendorReg(Vendor:Vendormodel):any
    getData():any;
    getbyId(id:string):any;
}