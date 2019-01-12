import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import authHelper from 'utils/authHelper';

const s = theme => ({
  avatar: {
    marginRight: theme.spacing.unit,
  },
});

class UserMenu extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    authHelper.logout();
    authHelper.goLogin();
  };

  render() {
    const { user, classes, ...props } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <>
        <Button onClick={this.handleOpen} color="inherit" {...props}>
          <Avatar
            alt={user.username}
            src={user.avatarURL}
            className={classes.avatar}
          />
          {user.username}
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={this.handleClose}>
          <MenuItem component={Link} to="/profile">
            Profile
          </MenuItem>
          <MenuItem onClick={this.handleLogout}>Log out</MenuItem>
        </Menu>
      </>
    );
  }
}

const mapState = state => ({
  user: state.auth.user,
});

const mapDispatch = {};

export default compose(
  connect(
    mapState,
    mapDispatch,
  ),
  withStyles(s),
)(UserMenu);
