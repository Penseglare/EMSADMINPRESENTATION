import React, { Component } from 'react';
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import iuseruiservice from "../../uiservice/interface/iuseruiservice";
import usermodel from "../../model/usermodel"

export default class Create extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            username: '',
            address: '',
            password:'',
            confirmpassword:'',
        }
    }
    onChangeUserName(e: any) {
      this.setState({
        username: e.target.value
      });
    }
    onChangeAddress(e: any) {
      this.setState({
        Address: e.target.value
      })  
    }
    onChangePassword(e: any) {
      this.setState({
        password: e.target.value
      })
    }
    onChangeConfirmPassword(e: any) {
        this.setState({
          confirmpassword: e.target.value
        })
      }
  
    onSubmit(e: any) {
      debugger;

      e.preventDefault();
      
      let reg = new usermodel();
      reg.UserName= this.state.UserName;
      reg.Address= this.state.Address;
      reg.UserId= this.state.UserId;
      reg.Password= this.state.Password;
      reg.ConfirmPassword= this.state.ConfirmPassword;
      // const obj = {
      //   Name: this.state.person_name,
      //   Code: this.state.business_name,
      //   Id: this.state.business_gst_number
      // };
      let iregn = containerconfig.get<iuseruiservice>(TYPES.iuseruiservice);
      console.log(reg);
       iregn.saveuser(reg).then((res : any) => { console.log("success")});
    
      this.setState({
        username: '',
        address: '',
        password:'',
        confirmpassword:'',
      })
    }
   
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.username}
                          onChange={this.onChangeUserName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.Address}
                          onChange={this.onChangeAddress}
                          />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.Password}
                          onChange={this.onChangePassword}
                          />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.ConfirmPassword}
                          onChange={this.onChangeConfirmPassword}
                          />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}