import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';

import Navigation from '../Navigation';

class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Navigation />
      </AppBar>
    );
  }
}

export default Header;
