export default class registrationmodel
{
    private _id:string;
    private _vendername:string;
    private _mobilenumber:number;
    private _emailid:string;
    private _password:string;
    private _city:string;
    private _state:string;
    private _category:string;
    constructor(){
        this._id="";
        this._vendername="";
        this._mobilenumber=0;
        this._emailid="";
        this._password="";
        this._city="";
        this._state="";
        this._category="";
    }
    get vendername():string{
        return this._vendername;
    }
    set vendername(value:string){
        this._vendername=value;
    }
    get mobilenumber():number{
        return this._mobilenumber;
    }
    set mobilenumber(value:number){
        this._mobilenumber=value;
    }
    get emailid():string{
        return this._emailid;
    }
    set emailid(value:string){
        this._emailid=value;
    }
    get password():string{
        return this._password;
    }
    set password(value:string){
        this._password=value;
    }
    get city():string{
        return this._city;
    }
    set city(value:string){
        this._city=value;
    }
    get state():string{
        return this._state;
    }
    set state(value:string){
        this._state=value;
    }
    get category():string{
        return this._category;
    }
    set category(value:string){
        this._category=value;
    }
    get id():string{
        return this._id;
    }
    set id(value:string){
        this._id=value;
    }
}