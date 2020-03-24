import React, { Component } from 'react';
import axios from 'axios';
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import ivendorRegistrationuiservice from "../../uiservice/interface/ivendorRegistrationuiservice";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class TableRow extends Component<any,any> {

  // constructor(props:any) {
  //       super(props);
  //       this.delete = this.delete.bind(this);
  //   }
    // delete(id:string) {
    //   let iregn = containerconfig.get<ivendorRegistrationuiservice>(TYPES.ivendoruiservice);
    //   iregn.deleteuser(id)
    //        .then((response:any)=>{
    //       debugger;
    //       window.location.reload(true);
    //       }
    //   )
    // }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.Vendername}
          </td>
          <td>
            {this.props.obj.Mobilenumber}
          </td>
          <td>
            {this.props.obj.Emailid}
          </td>
          <td>
            {this.props.obj.City}
          </td>
          <td>
            {this.props.obj.State }
          </td>
          <td>
            {this.props.obj.Category }
          </td>
          <td>
          {/* <Router> */}
            {/* <Link to={"/edit/"+this.props.obj.PkId} className="btn btn-primary">Edit</Link> */}
            <Link to={'/vendorregister/'+this.props.obj.Id} className="btn btn-primary">Edit</Link>
            {/* </Router> */}
          </td>
          {/* <td>
            <button onClick={() =>  this.delete(this.props.obj.PkId)} className="btn btn-danger">Delete</button>
          </td> */}
        </tr>
    );
  }
}

export default TableRow;