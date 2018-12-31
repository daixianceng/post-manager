import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import s from './styles';

class Loading extends Component {
  render() {
    const { open, children, classes, ...props } = this.props;

    return (
      <div className={open ? classes.root : undefined}>
        {children}
        {open && (
          <div className={classes.container}>
            <CircularProgress {...props} />
          </div>
        )}
      </div>
    );
  }
}

Loading.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(s)(Loading);
