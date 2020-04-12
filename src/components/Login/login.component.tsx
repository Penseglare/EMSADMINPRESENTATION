import React, { Component } from 'react';
import { useHistory ,Redirect} from 'react-router-dom';
export default class login extends Component<any, any> {
    constructor(props: any) {
        super(props);
       
      }
    
     
    render(){
            return (
              
 <div>
    <button name="continue" onClick={this.props.onSubmit}>Login</button>
  </div>
 
            );
        }
    }