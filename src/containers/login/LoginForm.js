import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <form autoComplete="off">
        <TextField
          label="Username"
          value={this.state.username}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          value={this.state.password}
          margin="normal"
          fullWidth
        />
        <FormControl margin="normal" fullWidth>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </FormControl>
      </form>
    );
  }
}

export default LoginForm;
