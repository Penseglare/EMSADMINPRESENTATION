import React, { Component } from 'react';
import { injectable, inject,named,interfaces } from "inversify";
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import iusergroupuiservice from "../../uiservice/interface/iusergroupuiservice";
import axios from 'axios';
import TableRow from './UserTableRow';
import usergroupmodel from "../../model/usergroupmodel";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  userGroupCreate  from '../UserGroup/usercreate.component';

@injectable()
export default class Index extends Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {business: []};
      }
      componentDidMount(){
        let iusergroup = containerconfig.get<iusergroupuiservice>(TYPES.iusergroupuiservice);
        iusergroup.getUserGroup()
             .then((response:any)=>{

            this.setState({business:response});
            }
        )
      }
      tabRow(){
        return this.state.business.map(function(object:any, i:any){
          debugger;
            return <TableRow obj={object} key={i} />;
        });
      }
  // onClick=() => {
  
  //   return  <Redirect  to="/usercreate/" />
  //   }
 
      render() {
        return (
          <div>
            <h3>User Group List</h3>
            <div className="form-group">


            <Router>
              <Link to={'/userGroupCreate'} className="btn btn-primary">Add New Group</Link>
              {/* <input type="submit" value="Vendor Registration" onClick={this.onClick}  className="btn btn-primary"/> */}
              <Route path='/userGroupCreate' component={userGroupCreate}/>
              </Router>

            {/* <button onClick={this.onClick}>Add New Group</button>  */}
                    </div>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>User Group</th>
                  <th>Description</th>
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
}