import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import authHelper from 'utils/authHelper';

const RequiredLogin = ({ user, children }) => {
  if (user) {
    return children;
  } else {
    authHelper.goLogin();
    return null;
  }
};

RequiredLogin.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const mapState = state => ({
  user: state.auth.user,
});

const mapDispatch = {};

export default connect(
  mapState,
  mapDispatch,
)(RequiredLogin);
