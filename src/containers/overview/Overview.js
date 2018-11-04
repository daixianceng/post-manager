import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import s from './styles';

class Overview extends Component {
  render() {
    return (
      <div>Overview</div>
    );
  }
}

Overview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(s)(Overview);
