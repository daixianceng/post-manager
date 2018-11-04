import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';
import NavList from '../../components/NavList';
import s from './styles';

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Grid container wrap="nowrap">
          <Grid className={classes.nav} item lg={2} md={3}>
            <NavList />
          </Grid>
          <Grid item xs>
            content...
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(s)(Home);
