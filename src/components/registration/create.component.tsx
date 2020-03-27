import React, { Component } from 'react';
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import iregistrationuiservice from "../../uiservice/interface/iregistrationuiservice";
import regmodel from "../../model/registrationmodel"

export default class Create extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number:''
        }
    }
    onChangePersonName(e: any) {
      this.setState({
        person_name: e.target.value
      });
    }
    onChangeBusinessName(e: any) {
      this.setState({
        business_name: e.target.value
      })  
    }
    onChangeGstNumber(e: any) {
      this.setState({
        business_gst_number: e.target.value
      })
    }
  
    onSubmit(e: any) {
      debugger;

      e.preventDefault();
      
      let reg = new regmodel();
      reg.Name= this.state.person_name;
      reg.Code= this.state.business_name;
      reg.Id= this.state.business_gst_number;

      // const obj = {
      //   Name: this.state.person_name,
      //   Code: this.state.business_name,
      //   Id: this.state.business_gst_number
      // };
      let iregn = containerconfig.get<iregistrationuiservice>(TYPES.iregistrationuiservice);
      console.log(reg);
       iregn.saveuser(reg).then((res : any) => { console.log("success")});
      
      this.setState({
        person_name: '',
        business_name: '',
        business_gst_number: ''
      })
    }
   
    render() {
      
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.person_name}
                          onChange={this.onChangePersonName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Business Name: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.business_name}
                          onChange={this.onChangeBusinessName}
                          />
                    </div>
                    <div className="form-group">
                        <label>GST Number: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.business_gst_number}
                          onChange={this.onChangeGstNumber}
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