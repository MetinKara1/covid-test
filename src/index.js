import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import Index from 'views/Index.js';
import Landing from 'views/examples/Landing.js';
import Login from 'views/examples/Login.js';
import Profile from 'views/examples/Profile.js';
import Register from 'views/examples/Register.js';
import SpecialToIndividual from 'views/examples/SpecialToIndividual.js';
import SpecialToCorporate from 'views/examples/SpecialToCorporate.js';

import Dashboard from 'views/examples/Dashboard.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/components' exact render={props => <Index {...props} />} />
      <Route
        path='/bireylere-ozel'
        exact
        render={props => <SpecialToIndividual {...props} />}
      />
      <Route
        path='/kurumlara-ozel'
        exact
        render={props => <SpecialToCorporate {...props} />}
      />
      <Route
        path='/landing-page'
        exact
        render={props => <Landing {...props} />}
      />
      <Route path='/login-page' exact render={props => <Login {...props} />} />
      <Route
        path='/profile-page'
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path='/register-page'
        exact
        render={props => <Register {...props} />}
      />
      <Route path='/' exact render={props => <Dashboard {...props} />} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
