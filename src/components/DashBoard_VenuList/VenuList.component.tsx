import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import iregistrationuiservice from "../../uiservice/interface/iregistrationuiservice";
class TableRow extends Component<any,any> {

  constructor(props:any) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(id:string) {
      let iregn = containerconfig.get<iregistrationuiservice>(TYPES.iregistrationuiservice);
      iregn.deleteuser(id)
           .then((response:any)=>{
          debugger;
          window.location.reload(true);
          }
      )
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.Name}
          </td>
          <td>
            {this.props.obj.Code}
          </td>
          <td>
            {this.props.obj.Id}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.PkId} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={() =>  this.delete(this.props.obj.PkId)} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;