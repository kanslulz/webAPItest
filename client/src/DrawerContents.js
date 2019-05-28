import React from 'react';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import featureDescriptors from './features/feature-descriptors.js';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

export default function DrawerContents(props) {
  const classes = useStyles();
  const isSelected = path => window.location.pathname === path;

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.closeDrawer}
      onKeyDown={props.closeDrawer}
    >
      <List>
        <ListItem button key='Home' selected={isSelected('/')} onClick={() => window.location.href = '/'}>
          <ListItemIcon> <HomeIcon /> </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
      </List>
      <Divider />
      <List>
        {featureDescriptors.map(fd => (
          <ListItem 
              button key={fd.name} 
              selected={isSelected(fd.path)} 
              onClick={() => window.location.href = fd.path}
          >
            <ListItemIcon> <fd.component.Icon /> </ListItemIcon>
            <ListItemText primary={fd.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}