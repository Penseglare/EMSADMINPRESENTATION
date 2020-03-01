import React, { Component } from 'react';
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import iregistrationuiservice from "../../uiservice/interface/iregistrationuiservice";
import regmodel from "../../model/registrationmodel"


export default class register extends Component<any, any> {
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
                        //   value={this.state.person_name}
                        //   onChange={this.onChangePersonName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Business Name: </label>
                        <input type="text" 
                          className="form-control"
                        //   value={this.state.business_name}
                        //   onChange={this.onChangeBusinessName}
                          />
                    </div>
                    <div className="form-group">
                        <label>GST Number: </label>
                        <input type="text" 
                          className="form-control"
                        //   value={this.state.business_gst_number}
                        //   onChange={this.onChangeGstNumber}
                          />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
    onSubmit(e: any) {
    }
}