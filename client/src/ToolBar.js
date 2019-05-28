import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import DrawerContents from './DrawerContents.js';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function ToolBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.icon} color="inherit" aria-label="Menu">
            <MenuIcon onClick={() => setOpen(true)} />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Web API Tests
          </Typography>
          <div className={classes.grow} />
          {/* TODO: Add github icon */}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <DrawerContents closeDrawer={() => setOpen(false)} />
      </SwipeableDrawer>
    </>
  );
}