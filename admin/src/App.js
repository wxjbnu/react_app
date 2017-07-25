import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import routes from './router'

import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
      </Router>
    );
  }
}

export default App;
