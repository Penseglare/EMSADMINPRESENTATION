export default class venulistmodel
{
    private _name:string ="";
    private _place:string ="";
    private _address:string ="";    
    private _location:string="";
    private _searchkeyword="";
    private _pkid:string ="";
    
    get Name(){
        
            return this._name;
        }
        set Name(value : string)
        {
            this._name = value;
        }

        get Place(){
        
            return this._place;
        }
        set Place(value : string)
        {
            this._place = value;
        }

        get Address(){
        
            return this._address;
        }
        set Address(value : string)
        {
            this._address = value;
        }
        get Location(){
        
            return this._location;
        }
        set Location(value : string)
        {
            this._location = value;
        }
        get SearchKeyWord(){
            return this._searchkeyword;
        }
        set SearchKeyWord(value:string){
            this._searchkeyword=value;
        }
        get PkId(){
        
            return this._pkid;
        }
        set PkId(value : string)
        {
            this._pkid = value;
        }
}