// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SubjectIcon from '@material-ui/icons/Subject';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import s from './styles';

class NavList extends Component {
  render() {
    const {
      classes,
      ...props
    } = this.props;

    return (
      <List {...props}>
        <ListSubheader>Main</ListSubheader>
        <ListItem
          button
          component={NavLink}
          to={`/overview`}
          activeClassName={classes.selected}
        >
          <ListItemIcon>
            <ViewCarouselIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <Divider />
        <ListSubheader>Posts</ListSubheader>
        <ListItem
          button
          component={NavLink}
          to="/category"
          activeClassName={classes.selected}
        >
          <ListItemIcon>
            <ViewModuleIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/post"
          activeClassName={classes.selected}
        >
          <ListItemIcon>
            <SubjectIcon />
          </ListItemIcon>
          <ListItemText primary="Posts" />
        </ListItem>
        <Divider />
        <ListSubheader>User</ListSubheader>
        <ListItem
          button
          component={NavLink}
          to="/user"
          activeClassName={classes.selected}
        >
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    );
  }
}

NavList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(s)(NavList);
