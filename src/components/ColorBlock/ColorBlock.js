import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
import Container from '../Container';

const ColorBlockBG = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 1rem;

  &.full-height {
    min-height: 100vh;

    &.is-first {
      min-height: calc(100vh - 112px);
    }
  }

  &.has-bg-image {
    background-position: center center;
    background-size: cover;
    background-blend-mode: overlay;
  }

  &.bg-red {
    background-color: ${props => props.theme.palette.error.main};
    color: ${props => props.theme.palette.error.contrastText};
  }

  &.bg-blue {
    background-color: ${props => props.theme.palette.info.main};
    color: ${props => props.theme.palette.info.contrastText};
  }

  &.bg-yellow {
    background-color: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.secondary.contrastText};
  }

  &.bg-dark {
    background-color: ${props => props.theme.palette.common.black};
    color: ${props => props.theme.palette.common.white};
  }

  &.bg-white {
    background-color: ${props => props.theme.palette.common.white};
    color: ${props => props.theme.palette.common.black};
  }
`;

const ScrollDownBox = styled.div`
  position: absolute;
  bottom: 0;
  padding: 16px 24px;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  transform: translateX(-50%);
  line-height: 0;
`;

const float = keyframes`
  from {
    transform: translateY(-5px);
  }

  to {
    transform: translateY(5px);
  }
`;

const ScrollDownIndicator = styled.svg`
  width: 40px;
  opacity: 0.75;
  animation: ${float} 1s ease-in-out infinite alternate;
`;

const ColorBlock = ({
  backgroundColor,
  backgroundImage,
  isFirst,
  fullHeight,
  showScrollDown,
  children,
}) => (
  <ColorBlockBG
    className={clsx(`bg-${backgroundColor}`, {
      'has-bg-image': backgroundImage,
      'is-first': isFirst,
      'full-height': fullHeight,
    })}
    style={{ backgroundImage: backgroundImage && `url(${backgroundImage})` }}
  >
    <Container>{children}</Container>
    {showScrollDown && (
      <ScrollDownBox>
        <ScrollDownIndicator viewBox="0 0 95 54">
          <path fill="CurrentColor" d="M95 6l-7-6-41 41L6 0 0 6l47 48L95 6z" />
        </ScrollDownIndicator>
      </ScrollDownBox>
    )}
  </ColorBlockBG>
);

ColorBlock.propTypes = {
  backgroundColor: PropTypes.oneOf(['red', 'blue', 'yellow', 'dark', 'white']),
  backgroundImage: PropTypes.string,
  children: PropTypes.any,
  fullHeight: PropTypes.bool,
  isFirst: PropTypes.bool,
  showScrollDown: PropTypes.bool,
};

ColorBlock.defaultProps = {
  backgroundColor: 'white',
  backgroundImage: undefined,
  children: undefined,
  fullHeight: true,
  isFirst: false,
  showScrollDown: true,
};

export default ColorBlock;
