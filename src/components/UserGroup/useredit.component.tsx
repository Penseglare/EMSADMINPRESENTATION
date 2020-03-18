import React, { Component } from 'react';
import axios from 'axios';
import "reflect-metadata";
import { injectable, inject,named,interfaces } from "inversify";
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"

import iusergroupuiservice from "../../uiservice/interface/iusergroupuiservice";
import { wait } from '@testing-library/dom';
import usergroupmodel from "../../model/usergroupmodel";

@injectable()
export default class Edit extends Component<any,any> {
  constructor(props:any) {
    super(props);
    debugger;
    this.onChangeUsergroupName = this.onChangeUsergroupName.bind(this);
    this.onChangeUsergroupDescription = this.onChangeUsergroupDescription.bind(this);
    this.onChangeUserGroupId = this.onChangeUserGroupId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      UsergroupName: '',
      UsergroupDescription: '',
      UserGroupId:''
    }
  }

  componentDidMount() {
      debugger;
      let iusergroup = containerconfig.get<iusergroupuiservice>(TYPES.iusergroupuiservice);
      iusergroup.getUserGroupById(this.props.match.params.id)
            .then((response:any)=>{
           debugger;
           console.log(response);
           this.setState({UsergroupName: response._usergroupname,
            UsergroupDescription: response._usergroupdescription,
            UserGroupId:response._id,
              });
           }
       )
  
     }

  onChangeUsergroupName(e:any) {
    this.setState({
      UsergroupName: e.target.value
    });
  }
  onChangeUsergroupDescription(e:any) {
    this.setState({
      UsergroupDescription: e.target.value
    })  
  }
  onChangeUserGroupId(e:any) {
    this.setState({
      UserGroupId: e.target.value
    })
  }

  onSubmit(e:any) {
    e.preventDefault();
    // const obj = {
    //   person_name: this.state.person_name,
    //   business_name: this.state.business_name,
    //   business_gst_number: this.state.business_gst_number
    // };
    let usergroup = new usergroupmodel();
    usergroup.UserGroupName= this.state.UsergroupName;
    usergroup.UserGroupDescription= this.state.UsergroupDescription;
    usergroup.Id= this.state.UserGroupId;

    let user_group = containerconfig.get<iusergroupuiservice>(TYPES.iusergroupuiservice);
      console.log(user_group);
      user_group.updateUserGroup(usergroup,usergroup.Id).then((res : any) => { debugger;console.log(res.data)});

    // this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Update User Group</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>User Group:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.UsergroupName}
                      onChange={this.onChangeUsergroupName}
                      />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.UsergroupDescription}
                      onChange={this.onChangeUsergroupDescription}
                      />
                </div>
               
                <div className="form-group">
                    <input type="submit" 
                      value="Update User Group" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}