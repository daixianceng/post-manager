import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

import Navigation from '../Navigation';
import s from './styles';

class Header extends Component {
  render() {
    return (
      <AppBar
        position="static"
        color="primary"
      >
        <Navigation />
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(s)(Header);
