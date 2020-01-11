import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LogoContainer = styled(Link)`
  && {
    display: flex;
    align-items: center;
    height: ${12* 8}px;
    padding-top: ${props => props.theme.spacing(1)}px;
    padding-bottom: ${props => props.theme.spacing(1)}px;
  }
`;

const LogoImage = styled.img`
  height: 100%;
`;
const Logo = ({ src, alt, href, title }) => (
  <LogoContainer to={href} title={title}>
    <LogoImage src={src} alt={alt} />
  </LogoContainer>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
};

Logo.defaultProps = {
  alt: null,
  href: null,
  title: null,
};

export default Logo;
