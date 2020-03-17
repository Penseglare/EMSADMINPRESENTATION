export default class vendormodel
{
    private _id:string="";
    private _vendername:string="";
    private _mobilenumber:number=0;
    private _emailid:string="";
    private _password:string="";
    private _city:string="";
    private _state:string="";
    private _category:string="";
    
    
    get Vendername(){
        return this._vendername;
    }
    set Vendername(value:string){
        this._vendername=value;
    }
    get Mobilenumber(){
        return this._mobilenumber;
    }
    set Mobilenumber(value:number){
        this._mobilenumber=value;
    }
    get Emailid(){
        return this._emailid;
    }
    set Emailid(value:string){
        this._emailid=value;
    }
    get Password(){
        return this._password;
    }
    set Password(value:string){
        this._password=value;
    }
    get City(){
        return this._city;
    }
    set City(value:string){
        this._city=value;
    }
    get State(){
        return this._state;
    }
    set State(value:string){
        this._state=value;
    }
    get Category(){
        return this._category;
    }
    set Category(value:string){
        this._category=value;
    }
    get Id(){
        return this._id;
    }
    set Id(value:string){
        this._id=value;
    }
}