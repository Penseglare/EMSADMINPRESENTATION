import React, { Component } from 'react';
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import { injectable, inject,named,interfaces } from "inversify";
import ivendorRegistrationuiservice from "../../uiservice/interface/ivendorRegistrationuiservice";
import axios from 'axios';
import TableRow from './TableRow';
import Vendormodel from "../../model/Vendormodel";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import  vendorregister  from '../vendor/register.component';


@injectable()
export default class index extends Component<any,any> {
render() {
    return (
      <div>
        <div className="form-group">
              <h3>Vendor List</h3>
              <Router>
              <Link to={'/vendorregister'} className="btn btn-primary">Vendor Registration</Link>
              {/* <input type="submit" value="Vendor Registration" onClick={this.onClick}  className="btn btn-primary"/> */}
              <Route path='/vendorregister' component={vendorregister}/>
              </Router>
        </div>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Vendor Name </th>
              <th>Mobile Number</th>
              <th>Email Id</th>
              <th>City </th>
              <th>State</th>
              <th>Category</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
      
    );
  }
  constructor(props:any) {
    super(props);
    this.state = {business: []};
  }
  componentDidMount(){
    let ivendor = containerconfig.get<ivendorRegistrationuiservice>(TYPES.ivendoruiservice);
    ivendor.getData()
         .then((response:any)=>{
        this.setState({business:response});
        }
    )
  }
  tabRow(){
    return this.state.business.map(function(object:any, i:any){
        return <TableRow obj={object} key={i} />;
    });
  }



  onClick=()=>{
    debugger;
      return <Route path='./vendorregister' component={vendorregister}/>
    }
}