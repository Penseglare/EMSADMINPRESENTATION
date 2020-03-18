import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import iusergroupuiservice from "../../uiservice/interface/iusergroupuiservice";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  userGroupCreate  from '../UserGroup/usercreate.component';

class UserTableRow extends Component<any,any> {

  constructor(props:any) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(id:string) {
      let iusergroup= containerconfig.get<iusergroupuiservice>(TYPES.iusergroupuiservice);
      iusergroup.deleteUserGroup(id)
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
            {this.props.obj.UserGroupName}
          </td>
          <td>
            {this.props.obj.UserGroupDescription}
          </td>
          <td>
            {this.props.obj.Id}
          </td>
          <td>
            {/* <Link to={"/useredit/"+this.props.obj.Id} className="btn btn-primary">Edit</Link> */}
            <Link to={"/useredit/"+this.props.obj.Id} className="btn btn-primary">Edit</Link>
            {/* <Router>
              <Link to={'/userGroupCreate/'+this.props.obj.Id} className="btn btn-primary">Edit</Link>
              <Route path='/userGroupCreate' component={userGroupCreate}/>
              </Router> */}

          </td>
          <td>
            <button onClick={() =>  this.delete(this.props.obj.Id)} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default UserTableRow;