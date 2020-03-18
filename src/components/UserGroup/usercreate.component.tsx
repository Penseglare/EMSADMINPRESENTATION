import React, { Component } from 'react';
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import iusergroupuiservice from "../../uiservice/interface/iusergroupuiservice";
import usergroupmodel from "../../model/usergroupmodel"

export default class Create extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onChangeUsergroupName = this.onChangeUsergroupName.bind(this);
        this.onChangeUsergroupDescription = this.onChangeUsergroupDescription.bind(this);
        this.onChangeUserGroupId = this.onChangeUserGroupId.bind(this);
        this.onChangeExportReport = this.onChangeExportReport.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
          UsergroupName: '',
          UsergroupDescription: '',
          UserGroupId:'',
          ExportReport:'',
        }
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
      onChangeExportReport(e:any) {
        this.setState({
        ExportReport: e.target.value
      })
    }
  
    onSubmit(e: any) {
      debugger;

      e.preventDefault();
      
      let usrgrp = new usergroupmodel();
      usrgrp.UserGroupName =this.state.UsergroupName;
      usrgrp.UserGroupDescription= this.state.UsergroupDescription;
      usrgrp.Id= this.state.UserGroupId;
      usrgrp.ExportReport= this.state.ExportReport;
     
      let iusrgrp= containerconfig.get<iusergroupuiservice>(TYPES.iusergroupuiservice);
      console.log(usrgrp);
      iusrgrp.saveUserGroup(usrgrp).then((res : any) => { console.log("success")});
    
      this.setState({
        UsergroupName: '',
        UsergroupDescription: '',
        UserGroupId:'',
        ExportReport:'',

      })
    }
    // componentDidMount() {
    //   debugger;
    //   let iusergroup = containerconfig.get<iusergroupuiservice>(TYPES.iusergroupuiservice);
    //   iusergroup.getUserGroupById(this.props.match.params.id)
    //         .then((response:any)=>{
    //        debugger;
    //        this.setState({UsergroupName: response.UsergroupName,
    //         UsergroupDescription: response.UsergroupDescription,
    //         UserGroupId:response.Id,
    //           });
    //        }
    //    )
  
    //  }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>User Group Profile</h3>
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
                    <label>Can Export Reports: </label>
                    <select id="exportgrp">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <input type="select" 
                      className="form-control"
                      value={this.state.ExportReport}
                      onChange={this.onChangeExportReport}
                      />
                </div>
                <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}