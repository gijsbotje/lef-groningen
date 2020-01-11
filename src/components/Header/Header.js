import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/logo.svg';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Logo from '../Logo';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'gatsby';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const StyledToolBar = styled(ToolBar)`
  && {
    justify-content: space-between;
    padding-top: ${props => props.theme.spacing(1)}px;
    padding-right: 0;
    padding-bottom: ${props => props.theme.spacing(1)}px;
    padding-left: 0;
  }
`;

const menuItems = [
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/blog',
    label: 'Blog',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <ElevationScroll>
        <AppBar color="primary" position="sticky">
          <Container maxWidth="lg">
            <StyledToolBar>
              <Logo src={logo} alt="Lef Groningen logo" href="/" title="Lef Groningen - home" />
              <Hidden implementation="css" xsDown>
                <Navbar items={menuItems} />
              </Hidden>
              <Hidden implementation="css" smUp>
                <IconButton onClick={toggleMenu} color="inherit">
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </StyledToolBar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Drawer anchor="right" open={showMenu} onClose={toggleMenu}>
        <Box width={240}>
          <List>
            <ListItem>
              <Typography variant="h4" component="div">
                Menu
              </Typography>
            </ListItem>
            {menuItems.map(({ to, label }) => (
              <ListItem key={to} button component={Link} to={to} onClick={toggleMenu}>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
