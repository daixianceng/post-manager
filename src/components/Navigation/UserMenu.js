import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class UserMenu extends Component {
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

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <>
        <IconButton onClick={this.handleOpen} color="inherit" {...this.props}>
          <AccountCircleIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={this.handleClose}>
          <MenuItem component={Link} to="/profile">
            Profile
          </MenuItem>
          <MenuItem>Log out</MenuItem>
        </Menu>
      </>
    );
  }
}

export default UserMenu;
