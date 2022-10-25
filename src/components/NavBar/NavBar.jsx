import React, { useState } from 'react';

import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, Brightness7, Brightness4, AccountCircle } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthentcated = true;
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
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={{}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 /> }
          </IconButton>
          {!isMobile && 'search...'}
          <div>
            {!isAuthentcated ? (
              <Button onClick={() => {}} color="inherit">
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/:id"
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp; </> }
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="profile"
                  src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                />
              </Button>
            )}
          </div>
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
      <div>
        <nav className="classes.drawer">
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => {}}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            />
          ) : (
            <Drawer />
          )}

        </nav>
      </div>
    </>
  );
};

export default NavBar;
