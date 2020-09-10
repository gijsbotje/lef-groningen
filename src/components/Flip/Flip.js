import React from 'react';
import styled from 'styled-components';

const FlipContainer = styled.div`
  perspective: 600px;

  &:hover .flip-element {
    transform: rotateY(180deg);
  }
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
  ${props => (props.face === 'back' ? `transform: rotateY(180deg);` : null)}
`;

const Flip = ({ front, back }) => {
  return (
    <FlipContainer>
      <FlipElement className="flip-element">
        <FlipFace>
          {front}
        </FlipFace>
        <FlipFace face="back">
          {back}
        </FlipFace>
      </FlipElement>
    </FlipContainer>
  );
};

export default Flip;
