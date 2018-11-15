import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import MoreButton from './MoreButton';
import UserMenu from './UserMenu';
import s from './styles';

class Navigation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Toolbar>
        <div className={classes.growBox}>
          <MoreButton className={classes.moreButton} />
          <Button component={Link} to="/" color="inherit" title="Home">
            <Typography color="inherit">Post Manager</Typography>
          </Button>
        </div>
        <UserMenu className={classes.userMenu} />
      </Toolbar>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(s)(Navigation);
