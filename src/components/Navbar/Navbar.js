import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import NavbarItem from '../NavbarItem';

const Navbar = ({ items }) => (
  <Grid container spacing={4} wrap="nowrap">
    {items.map(({ to, label }) => (
      <Grid item key={label}>
        <NavbarItem to={to} label={label} />
      </Grid>
    ))}
  </Grid>
);

Navbar.propTypes = {
  items: PropTypes.array,
};

Navbar.defaultProps = {
  items: [],
};

export default Navbar;
