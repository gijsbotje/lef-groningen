import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlipContainer = styled.div`
  perspective: 600px;
`;

const FlipElement = styled.div`
  padding-top: 75%;
  position: relative;
  transition: transform 0.4s;
  transform-style: preserve-3d;
`;

const FlipFace = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  background-color: #fff;
`;

const Flip = ({ front }) => (
  <FlipContainer>
    <FlipElement>
      <FlipFace>{front}</FlipFace>
    </FlipElement>
  </FlipContainer>
);

export default Flip;

Flip.propTypes = {
  front: PropTypes.elementType,
};

Flip.defaultProps = {
  front: undefined,
};
