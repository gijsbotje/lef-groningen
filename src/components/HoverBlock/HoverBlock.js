import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HoverBlockBase = styled.div`
  position: relative;
  z-index: 0;

  &:hover .hover-block-overlay {
    opacity: 1;
  }
`;

const HoverBlockOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: ${props => props.theme.transitions.duration.shorter}ms
    ${props => props.theme.transitions.easing.easeInOut};
  z-index: 1;
`;

const HoverBlock = ({ overlay, children }) => (
  <HoverBlockBase>
    {children}
    <HoverBlockOverlay className="hover-block-overlay">
      {overlay}
    </HoverBlockOverlay>
  </HoverBlockBase>
);

HoverBlock.propTypes = {};

HoverBlock.defaultProps = {};

export default HoverBlock;
