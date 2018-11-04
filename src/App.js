import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LayoutBase from './components/LayoutBase';
import Overview from './containers/overview';
import NotFound from './containers/not-found';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LayoutBase>
          <Switch>
            <Redirect from="/" to="/overview" exact />
            <Route path="/overview" component={Overview} exact />
            <Route component={NotFound} />
          </Switch>
        </LayoutBase>
      </BrowserRouter>
    );
  }
}

export default App;
