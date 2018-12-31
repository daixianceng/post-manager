import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Loading from 'components/Loading';
import { login } from 'actions/login';
import authHelper from 'utils/authHelper';
import formikHelper from 'utils/formikHelper';
import LoginForm from './LoginForm';
import s from './styles';

class Login extends Component {
  static propTypes = {
    data: PropTypes.object,
    errorMessages: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    user: PropTypes.object,
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.formikRef = React.createRef();
    if (props.user) {
      authHelper.goBack();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.errorMessages !== this.props.errorMessages &&
      this.props.errorMessages
    ) {
      formikHelper.setErrors(this.formikRef.current, this.props.errorMessages);
    }
    if (prevProps.data !== this.props.data && this.props.data) {
      authHelper.login(this.props.data);
      authHelper.goBack();
    }
  }

  handleSubmit = values => {
    this.props.login(values);
  };

  render() {
    const { loading, classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Loading open={loading}>
          <Typography className={classes.title} variant="h3" gutterBottom>
            Login
          </Typography>
          <LoginForm onSubmit={this.handleSubmit} formikRef={this.formikRef} />
        </Loading>
      </Paper>
    );
  }
}

const mapState = state => ({
  data: state.login.data,
  errorMessages: state.login.messages,
  loading: state.login.loading,
  user: state.auth.user,
});

const mapDispatch = {
  login,
};

export default compose(
  withStyles(s),
  connect(
    mapState,
    mapDispatch,
  ),
)(Login);
