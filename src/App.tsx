import React from 'react';
import { useHistory ,Redirect} from 'react-router-dom';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/registration/create.component';
import Edit from './components/registration/edit.component';
import Index from './components/registration/index.component';
import Signup from './components/Signup/signup.component';
import Vendor from './components/vendor/index.component';
import UserGroup from './components/UserGroup/userindex.component';
import AddUserGroup from './components/UserGroup/usercreate.component';
import  userGroupEdit  from './components/UserGroup/useredit.component';
import  Login  from './components/Login/login.component';
import  Dashboard  from './components/Dashboard/dashboard.component';
// const App: React.FC = () => {
//   return (
  //   <Router>
  //   <div className="container">
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //       <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul id="Menu" className="navbar-nav mr-auto">
  //         <li className="nav-item">
  //             <Link to={'/'} className="nav-link">Home</Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link to={'/create'} className="nav-link">Create</Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link to={'/index'} className="nav-link">Index</Link>
  //           </li>
  //           <li className="nav-item" >
  //             <Link to={'/signup'} className="nav-link">Signup</Link>
  //           </li>
  //           <li className="nav-item" >
  //             <Link to={'/vendor'} className="nav-link">Vendor</Link>
  //           </li>
  //           <li className="nav-item" >
  //             <Link to={'/userindex'} className="nav-link">UserGroup</Link>
  //           </li>
  //           <li className="nav-item" >
  //             <Link to={'/usercreate'} className="nav-link"></Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav> <br/>
  //     <h2>Welcome to React CRUD Tutorial</h2> <br/>
  //     <Switch>
  //         <Route exact path='/create' component={ Create } />
  //         <Route path='/edit/:id' component={ Edit } />
  //         <Route path='/index' component={ Index } />
  //         <Route path='/signup' component={ Signup } />
  //         <Route path='/vendor' component={ Vendor } />
  //         <Route path='/userindex' component={ UserGroup } />
  //         <Route path='/usercreate' component={ AddUserGroup } />
  //         <Route path='/useredit/:id' component={ userGroupEdit } />
  //     </Switch>
  //   </div>
  // </Router>
 
  // );

// }

export default class App extends React.Component<any,any>{
  constructor(props: any) {
    super(props);
    this.state ={
      isLogin:true,
      isDashboard:false,
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    
  }

  login=(e: any)=> {
   
debugger;
this.setState({isLogin : false,isDashboard:true});
return <Dashboard/>
  }

  logout=(e: any)=> {
   
    debugger;
    this.setState({isLogin : true,isDashboard:false});
    return <Login/>
      }

  render(){
      return (
    
    <div className="container">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </Switch> */}
      {this.state.isLogin ? <Login onSubmit = {this.login}/> : <Dashboard onSubmit = {this.logout}/>}
      
      
    </div>
  
  
  );
  }
}

// export default App;
 
  