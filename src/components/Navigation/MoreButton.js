import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class MoreButton extends Component {
  render() {
    return (
      <IconButton
        color="inherit"
        {...this.props}
      >
        <MenuIcon />
      </IconButton>
    );
  }
}

export default MoreButton;
