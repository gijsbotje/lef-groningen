import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
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
import SiteContext from '../SiteContext';

function ElevationScroll({ children, window, scrolledColor, transparentTextColor }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? scrolledColor : 'transparent',
    className: `text-color-${trigger ? 'dark' : transparentTextColor}`,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const ScrollAppBar = styled(AppBar)`
  && {
    &.MuiAppBar-colorTransparent.text-color- {
      &dark {
        color: ${props => props.theme.palette.common.black};
      }
      &light {
        color: ${props => props.theme.palette.common.white};
      }
    }
  }
`;

const StyledToolBar = styled(ToolBar)`
  && {
    justify-content: space-between;
    padding-top: ${props => props.theme.spacing(1)}px;
    padding-right: 0;
    padding-bottom: ${props => props.theme.spacing(1)}px;
    padding-left: 0;
  }
`;

const MobileMenuItemText = styled(ListItemText)`
  && {
    .MuiListItemText-primary {
      font-family: ${props => props.theme.typography.h1.fontFamily};
    }
  }
`;

const menuItems = [
  {
    to: '/diensten/',
    label: 'Diensten',
  },
  {
    to: '/ons-verhaal/',
    label: 'Ons verhaal',
  },
  {
    to: '/short-stories/',
    label: 'Short stories',
  },
  {
    to: '/contact/',
    label: 'Contact',
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { navbarSettings } = useContext(SiteContext);
  const { scrolledColor, textColor } = navbarSettings;

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <ElevationScroll scrolledColor={scrolledColor} transparentTextColor={textColor}>
        <ScrollAppBar color="transparent" position="fixed" style={{ transition: '.2s ease' }}>
          <Container maxWidth="lg">
            <StyledToolBar>
              <Logo href="/" title="LEF Groningen - home" />
              <Hidden implementation="css" xsDown>
                <Navbar items={menuItems} />
              </Hidden>
              <Hidden implementation="css" smUp>
                <IconButton onClick={toggleMenu} color="inherit" title="Open menu">
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </StyledToolBar>
          </Container>
        </ScrollAppBar>
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
                <MobileMenuItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
