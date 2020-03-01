import React from 'react';
import PropTypes from 'prop-types';
import { Link as NavLink } from 'gatsby';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';

const NavbarLink = styled(Link)`
  && {
    font-size: 1rem;
    font-family: ${props => props.theme.typography.h1.fontFamily};
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

const NavbarItem = ({ to, label }) => (
  <NavbarLink to={to} component={NavLink} title={label} color="inherit">
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
