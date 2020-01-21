import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Footer = () => (
  <AppBar position="static" color="primary" elevation={0} square>
    <Toolbar>
      <Typography color="inherit" style={{ marginRight: 'auto' }}>
        info@lefgroningen.nl
      </Typography>
      <Typography color="inherit">Lef Groningen &copy;</Typography>
    </Toolbar>
  </AppBar>
);

export default Footer;
