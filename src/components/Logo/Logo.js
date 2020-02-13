import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LogoContainer = styled(Link)`
  && {
    display: flex;
    align-items: center;
    height: ${12 * 8}px;
    padding-top: ${props => props.theme.spacing(1)}px;
    padding-bottom: ${props => props.theme.spacing(1)}px;
  }
`;

const Logo = ({ children, href, title }) => (
  <LogoContainer to={href} title={title}>
    {children}
  </LogoContainer>
);

Logo.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  title: PropTypes.string,
};

Logo.defaultProps = {
  href: null,
  title: null,
};

export default Logo;
