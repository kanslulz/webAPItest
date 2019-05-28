import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

// Temporary icon.
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function DrawerContents() {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        {['Home', 'Web API1', 'Web API2'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon> <MailIcon /> </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['GitHub'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon> <MailIcon /> </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}