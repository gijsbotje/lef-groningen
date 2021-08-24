import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import LefLogo from '../../img/Logo-LEF-wit.svg';
import styled from 'styled-components';

const LogoContainer = styled(Link)`
  && {
    display: flex;
    align-items: center;
    height: ${12 * 8}px;
    padding-top: ${props => props.theme.spacing(1)}px;
    padding-bottom: ${props => props.theme.spacing(1)}px;
    color: inherit;
  }
`;

const Logo = ({ href, title }) => (
  <LogoContainer to={href} title={title}>
    <LefLogo style={{ height: '100%' }} />
  </LogoContainer>
);

Logo.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
};

Logo.defaultProps = {
  href: null,
  title: null,
};

export default Logo;
