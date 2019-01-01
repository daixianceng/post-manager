import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import LayoutBase from './components/LayoutBase';
import AuthGuard from './components/AuthGuard';
import Login from './containers/login';
import Overview from './containers/overview';
import NotFound from './containers/not-found';

class App extends Component {
  render() {
    return (
      <Router {...this.props}>
        <LayoutBase>
          <Switch>
            <Redirect from="/" to="/overview" exact />
            <Route path="/login" component={Login} exact />
            <AuthGuard>
              <Route path="/overview" component={Overview} exact />
            </AuthGuard>
            <Route component={NotFound} />
          </Switch>
        </LayoutBase>
      </Router>
    );
  }
}

export default App;
