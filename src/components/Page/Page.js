import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Center from '../Center';
import s from './styles';

class Page extends React.Component {
  static propTypes = {
    width: PropTypes.oneOf(['large', 'middle', 'small']),
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    width: 'large',
  };

  render() {
    const { children, classes, ...props } = this.props;

    return (
      <Center {...props}>
        <div className={classes.content}>{children}</div>
      </Center>
    );
  }
}

export default withStyles(s)(Page);
