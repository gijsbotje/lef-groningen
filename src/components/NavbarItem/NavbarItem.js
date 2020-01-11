import React from 'react';
import PropTypes from 'prop-types';
import { Link as NavLink } from 'gatsby';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';

const NavbarLink = styled(Link)`
  && {
    font-size: 1.2rem;
  }
`;

const NavbarItem = ({ to, label }) => (
  <NavbarLink to={to} component={NavLink} color="inherit">
    {label}
  </NavbarLink>
);

NavbarItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};

NavbarItem.defaultProps = {
  to: null,
  label: null,
};

export default NavbarItem;
