export default class usergroupmodel
{
    private _id:string ='';
    private _usergroupname:string ="";
    private _usergroupdescription:string ="";
    private _exportreports:string ="";


        get Id(){
            
            return this._id;
        }
        set Id(value : string)
        {
            this._id = value;
        }
    
        get UserGroupName(){
        
            return this._usergroupname;
        }
        set UserGroupName(value : string)
        {
            this._usergroupname = value;
        }

        get UserGroupDescription(){
        
            return this._usergroupdescription;
        }
        set UserGroupDescription(value : string)
        {
            this._usergroupdescription = value;
        }

        get ExportReport(){
        
            return this._exportreports;
        }
        set ExportReport(value : string)
        {
            this._exportreports = value;
        }
        

}