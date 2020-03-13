import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/registration/create.component';
import Edit from './components/registration/edit.component';
import Index from './components/registration/index.component';
import Signup from './components/Signup/signup.component';
import Vendor from './components/vendor/index.component';

const App: React.FC = () => {
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
      </Switch>
    </div>
  </Router>
  );
}

export default App;
