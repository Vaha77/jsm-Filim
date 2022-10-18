import React from 'react';
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { Menu, Brightness7 } from '@mui/icons-material';
// import { AppBar,IconButton,Toolbar,Drawer,Button,Avatar } from '@mui/material';
// import { Menu } from '@mui/icons-material';
import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={{}}>
            <Brightness7 />
          </IconButton>
        </Toolbar>

      </AppBar>
    </>
  );
};

export default NavBar;
