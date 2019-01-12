import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

import s from './styles';

const variantIcons = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const MessageContent = props => {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcons[variant];

  return (
    <SnackbarContent
      className={cx(classes[variant], className)}
      message={
        <>
          <Icon className={cx(classes.icon, classes.iconVariant)} />
          {message}
        </>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      classes={{
        root: classes.root,
        message: classes.message,
        action: classes.action,
      }}
      {...other}
    />
  );
};

MessageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

export default withStyles(s)(MessageContent);
