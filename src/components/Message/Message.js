import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';

import MessageContent from 'components/MessageContent';

class Message extends Component {
  static propTypes = {
    content: PropTypes.any,
    counter: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      open: false,
      counter: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.counter !== nextProps.counter) {
      return {
        open: true,
        counter: nextProps.counter,
      };
    }
    return null;
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      open: false,
    });
  };

  render() {
    const { content, type } = this.props;
    return (
      <Snackbar
        open={this.state.open}
        onClose={this.handleClose}
        autoHideDuration={5000}
        disableWindowBlurListener
      >
        <MessageContent
          onClose={this.handleClose}
          variant={type}
          message={content}
        />
      </Snackbar>
    );
  }
}

const mapState = state => ({
  content: state.message.content,
  type: state.message.type,
  counter: state.message.counter,
});

const mapDispatch = {};

export default connect(
  mapState,
  mapDispatch,
)(Message);
