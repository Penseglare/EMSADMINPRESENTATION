import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from '../registration/create.component';
import Edit from '../registration/edit.component';
import Index from '../registration/index.component';
import Signup from '../Signup/signup.component';
import Vendor from '../vendor/index.component';
import UserGroup from '../UserGroup/userindex.component';
import AddUserGroup from '../UserGroup/usercreate.component';
import  userGroupEdit  from '../UserGroup/useredit.component';
export default class dashboard extends Component<any, any> {

    render(){
            return (
                <Router>
                <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul id="Menu" className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link to={'/create'} className="nav-link">Create</Link>
                        </li>
                        <li className="nav-item">
                          <Link to={'/index'} className="nav-link">Index</Link>
                        </li>
                        <li className="nav-item" >
                          <Link to={'/signup'} className="nav-link">Signup</Link>
                        </li>
                        <li className="nav-item" >
                          <Link to={'/vendor'} className="nav-link">Vendor</Link>
                        </li>
                        <li className="nav-item" >
                          <Link to={'/userindex'} className="nav-link">UserGroup</Link>
                        </li>
                        <li className="nav-item" >
                          <Link to={'/usercreate'} className="nav-link"></Link>
                        </li>
                        
                      </ul>
                      <button onClick={this.props.onSubmit} className="btn btn-danger">Log Out</button>
                    </div>
                  </nav> <br/>
                  <h2>Welcome to React CRUD Tutorial</h2> <br/>
                  <Switch>
                      <Route exact path='/create' component={ Create } />
                      <Route path='/edit/:id' component={ Edit } />
                      <Route path='/index' component={ Index } />
                      <Route path='/signup' component={ Signup } />
                      <Route path='/vendor' component={ Vendor } />
                      <Route path='/userindex' component={ UserGroup } />
                      <Route path='/usercreate' component={ AddUserGroup } />
                      <Route path='/useredit/:id' component={ userGroupEdit } />
                  </Switch>
                </div>
              </Router>
              );
    }
}