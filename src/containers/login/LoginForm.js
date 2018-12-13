import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[\w-]+$/, {
      message: 'Username is invalid',
      excludeEmptyString: true,
    })
    .required('Please enter username'),
  password: Yup.string().required('Please enter password'),
});

const initialValues = {
  username: '',
  password: '',
};

class LoginForm extends Component {
  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.props.onSubmit}
      >
        {({ isValid }) => (
          <Form autoComplete="off">
            <FormikTextField
              name="username"
              label="Username"
              margin="normal"
              fullWidth
            />
            <FormikTextField
              name="password"
              label="Password"
              margin="normal"
              type="password"
              fullWidth
            />
            <FormControl margin="normal" fullWidth>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!isValid}
                fullWidth
              >
                Submit
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
