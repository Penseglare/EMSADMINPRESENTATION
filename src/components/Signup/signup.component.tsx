import React, { Component } from 'react';

import axios from 'axios';

export default class Create extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onChangeUserID = this.onChangeUserID.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            user_id: '',
            password: ''
        }
    }
  
    onChangeUserID(e: any) {
      this.setState({
        user_id: e.target.value
      });
    }
    onChangePassword(e: any) {
      this.setState({
        password: e.target.value
      })  
    }

    onSubmit(e: any) {
      e.preventDefault();
      const obj = {
        user_id: this.state.user_id,
        password: this.state.password
      };
      axios.post('http://localhost:4000/api/signupuser', obj)
       .then(res => console.log(res.data));
    
      this.setState({
        user_id: '',
        password: ''    
      })
    }
   
    render() {
        return (
            <div style={{ marginTop: 10 , width:350, alignItems:'center',justifyContent:'center' }}>
           
                 <h3>Login</h3>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Id: </label>
                        <input 
                          type="text" 
                          className="form-control"      
                          value={this.state.user_id}
                          onChange={this.onChangeUserID}
                          required placeholder="Enter Userid"
                          />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" 
                          className="form-control"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          required placeholder="Enter Password"
                          />
                    </div>      
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                    <div className="form-group">
                    <a href="https://www.penseglare.com">New user?</a>
                    </div>
                    </form>
          
               
            </div>
        )
    }
}