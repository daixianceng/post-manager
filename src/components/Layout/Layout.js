import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header';
import NavList from '../NavList';
import s from './styles';

class Layout extends Component {
  render() {
    const { children, classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <Grid container wrap="nowrap">
          <Grid className={classes.nav} item lg={2} md={3}>
            <NavList />
          </Grid>
          <Grid item xs>
            {children}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(s)(Layout);
