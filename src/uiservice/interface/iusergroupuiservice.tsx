import usergroupmodel from "../../model/usergroupmodel"

export default interface iusergroupuiservice
{
    getUserGroup():any;   
    getUserGroupById(Id:string):any;
    deleteUserGroup(Id:string):any;
    saveUserGroup(usergroup:usergroupmodel):any
    updateUserGroup(usergroup:usergroupmodel,id:string):any;
}



