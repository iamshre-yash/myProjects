import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';

Navbar.propTypes = {
    title: PropTypes.string
};
Navbar.defaultProps = {
    title: 'TextUtils',
}
export default function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <CssBaseline />
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="ShreYash" src="/public/shreyash.png" />
              </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
