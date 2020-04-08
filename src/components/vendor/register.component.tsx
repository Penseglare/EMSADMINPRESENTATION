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
                           onChange={this.onChangeName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Mobile No : </label>
                        <input type="text" 
                          className="form-control"
                           value={this.state.Mobile}
                           onChange={this.onChangeMobile}
                          />
                    </div>
                    <div className="form-group">
                        <label>Email id : </label>
                        <input type="text" 
                          className="form-control"
                           value={this.state.Emailid}
                           onChange={this.onChangeEmailid}
                          />
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="Password" 
                          className="form-control"
                           value={this.state.Password}
                           onChange={this.onChangePassword}
                          />
                    </div>
                    <div className="form-group">
                        <label>City : </label>
                          <select id="city" value={this.state.City}
                          onChange={this.onChangeCity}>
                            <option>sdfsdf</option>
                            <option>sdfsdf</option>
                            <option>sdfsdf</option>
                          </select>
                    </div>
                    
                    <div className="form-group">
                        <label>State : </label>
                          <select id="state" value={this.state.State}
                          onChange={this.onChangeState}>
                            <option>sdfsdf</option>
                            <option>sdfsdf</option>
                            <option>sdfsdf</option>
                          </select>
                    </div>
                    <div className="form-group">
                        <label>Category : </label>
                          <select id="category" value={this.state.Category}
                          onChange={this.onChangeCategory}>
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
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeMobile = this.onChangeMobile.bind(this);
      this.onChangeEmailid = this.onChangeEmailid.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);

      this.onChangeCity = this.onChangeCity.bind(this);
      this.onChangeState = this.onChangeState.bind(this);
      this.onChangeCategory = this.onChangeCategory.bind(this);
      
      this.onSubmit = this.onSubmit.bind(this);
debugger;
      this.state = {
          Name: '',
          Mobile: '',
          Emailid:'',
          Password:'',
          City:'',
          State:'',
          Category:'',
          Id:''
      }
  }

  onChangeName(e:any) {
    this.setState({
      Name: e.target.value
    });
  }
  onChangeMobile(e:any) {
    this.setState({
      Mobile: e.target.value
    })  
  }
  onChangeEmailid(e:any) {
    this.setState({
      Emailid: e.target.value
    })
  }
  onChangePassword(e:any) {
      this.setState({
        Password: e.target.value
    })
  }

  onChangeCity(e:any) {
    this.setState({
      City: e.target.value
  })
}
onChangeState(e:any) {
  this.setState({
    State: e.target.value
})
}
onChangeCategory(e:any) {
  this.setState({
    Category: e.target.value
})
}
  onSubmit(e: any) {
    e.preventDefault();
    this.setState({duplcationflag: false});
    let vendor = new Vendormodel();
    vendor.Vendername= this.state.Name;
    vendor.Mobilenumber= this.state.Mobile;
    vendor.Emailid= this.state.Emailid;
    vendor.Password= this.state.Password;
    vendor.City= this.state.City;
    vendor.State=this.state.State;
    vendor.Category= this.state.Category;
    // this.state = {duplcationflag: false};
    let ivendor = containerconfig.get<ivendorRegistrationuiservice>(TYPES.ivendoruiservice);
    ivendor.getbyId(vendor.Emailid).then((response:any)=>{
      this.setState({duplcationflag: true});
    });
    const duplcationflag = this.state.duplcationflag;
    if(duplcationflag){
    alert("Email already registered");
  }
    else{
      alert(JSON.stringify(vendor));
   ivendor.savevendorReg(vendor).then((res : any) => { console.log("success")});
    }
  }

  componentDidMount() {
    debugger;
    let ivendor = containerconfig.get<ivendorRegistrationuiservice>(TYPES.ivendoruiservice);
    let vendorId:string = this.props.match.params.id;
if(vendorId !=undefined)
{
    ivendor.getbyId(this.props.match.params.id)
          .then((response:any)=>{
         debugger;
         console.log(response);
         this.setState({
           Name: response._vendername,
          Mobile: response._mobilenumber,
          Emailid:response._emailid,
          Password:response._exportreports,
          City:response._city,
          State:response._state,
          Category:response._category,
          Id:response._id
            });
         }
     )
    }
    else{
      this.setState({
        Name: '',
       Mobile: '',
       Emailid:'',
       Password:'',
       City:'',
       State:'',
       Category:'',
       Id:''
         });
    }
   }
}