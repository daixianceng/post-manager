import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

class LayoutBase extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <CssBaseline />
        {children}
      </>
    );
  }
}

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutBase;
