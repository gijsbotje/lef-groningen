import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import NavbarItem from '../NavbarItem';
import styled from 'styled-components';

const NavbarBase = styled(Grid)`
  && {
    width: auto;
    flex-grow: 1;
    justify-content: space-between;
  }
`;

const Navbar = ({ items }) => (
  <>
    {items.map(({ to, label }) => (
      <Grid item key={label}>
        <NavbarItem to={to} label={label} />
      </Grid>
    ))}
  </>
);

Navbar.propTypes = {
  items: PropTypes.array,
};

Navbar.defaultProps = {
  items: [],
};

export default Navbar;
