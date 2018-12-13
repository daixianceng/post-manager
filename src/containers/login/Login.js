import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import LoginForm from './LoginForm';
import s from './styles';

class Login extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  handleSubmit = () => {};

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Login
        </Typography>
        <LoginForm onSubmit={this.handleSubmit} />
      </Paper>
    );
  }
}

export default withStyles(s)(Login);
