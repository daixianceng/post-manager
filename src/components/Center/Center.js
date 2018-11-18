import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

const sizes = {
  large: { lg: 8, md: 10, sm: 12 },
  middle: { lg: 6, md: 8, sm: 10 },
  small: { lg: 4, md: 6, sm: 8 },
};

class Center extends React.Component {
  static propTypes = {
    width: PropTypes.oneOf(['large', 'middle', 'small']),
    children: PropTypes.node,
  };

  static defaultProps = {
    width: 'middle',
  };

  render() {
    const { width, children } = this.props;

    return (
      <Grid container justify="center">
        <Grid item {...sizes[width]} xs={12}>
          {children}
        </Grid>
      </Grid>
    );
  }
}

export default Center;
