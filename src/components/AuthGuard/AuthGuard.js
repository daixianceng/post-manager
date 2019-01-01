import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import authHelper from 'utils/authHelper';

const AuthGuard = ({ user, children }) => {
  if (user) {
    return children;
  } else {
    authHelper.goLogin();
    return null;
  }
};

AuthGuard.propTypes = {
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
)(AuthGuard);
