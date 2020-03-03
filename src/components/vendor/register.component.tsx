import React, { Component } from 'react';
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import ivendorRegistrationuiservice from "../../uiservice/interface/ivendorRegistrationuiservice";
import Vendormodel from "../../model/Vendormodel"


export default class register extends Component<any, any> {
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create your vendor account </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name :  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                           value={this.state.Name}
                        //   onChange={this.onChangePersonName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Mobile No : </label>
                        <input type="text" 
                          className="form-control"
                           value={this.state.Mobile}
                        //   onChange={this.onChangeBusinessName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Email id : </label>
                        <input type="text" 
                          className="form-control"
                           value={this.state.Emailid}
                        //   onChange={this.onChangeGstNumber}
                          />
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="Password" 
                          className="form-control"
                           value={this.state.Password}
                        //   onChange={this.onChangeGstNumber}
                          />
                    </div>
                    <div className="form-group">
                        <label>City : </label>
                          <select id="city" value={this.state.City}>
                            <option>sdfsdf</option>
                            <option>sdfsdf</option>
                            <option>sdfsdf</option>
                          </select>
                    </div>
                    
                    <div className="form-group">
                        <label>State : </label>
                          <select id="state" value={this.state.State}>
                            <option>sdfsdf</option>
                            <option>sdfsdf</option>
                            <option>sdfsdf</option>
                          </select>
                    </div>
                    <div className="form-group">
                        <label>Category : </label>
                          <select id="category" value={this.state.Category}>
                            <option>Venu Management</option>
                          </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Proceed" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
    constructor(props: any) {
      super(props);
      // this.onChangePersonName = this.onChangePersonName.bind(this);
      // this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
      // this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          Name: 'dfsd',
          Mobno: '9656965511',
          Emailid:'sdf@g.com',
          Password:'123',
          City:'kerala',
          State:'thirissur',
          Category:'sdf'
      }
  }
  onSubmit(e: any) {
    e.preventDefault();
    let vendor = new Vendormodel();
    vendor.Vendername= this.state.Name;
    vendor.Mobilenumber= this.state.Mobno;
    vendor.Emailid= this.state.Emailid;
    vendor.Password= this.state.Password;
    vendor.City= this.state.State;
    vendor.Category= this.state.Category;
    let ivendor = containerconfig.get<ivendorRegistrationuiservice>(TYPES.ivendoruiservice);
    console.log(vendor);
     ivendor.savevendorReg(vendor).then((res : any) => { console.log("success")});
    

  }
}