export default class usermodel
{
    private _username:string="";
    private _address:string="";
    private _password:string="";
    private _confirmpassword:string="";
    private _userid:number=0;

get Username(){
        return this._username; 
    }
    set UserName(value:string)
    {
        this._username=value;
    }
get Address(){
        return this._address;
    }
    set Address(value:string)
    {
        this._address=value;
    }
get Password(){
        return this._password;
    }
    set Password(value:string)
    {
        this._password=value;
    }
get ConfirmPassword(){
        return this._confirmpassword;
    }
    set ConfirmPassword(value:string)
    {
        this._confirmpassword=value;
    }
get UserId(){
        return this._userid;
    }
    set UserId(value:number)
    {
        this._userid=value;
    }
}