import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
import Container from '../Container';
import ScrollTo from 'react-scroll-into-view';

const ColorBlockBG = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 1rem;
  scroll-behavior: smooth;

  &.equal-padding {
    padding-top: 1rem;
  }

  &.full-height {
    min-height: calc(${props => props.minHeight} - 112px);
  }

  &.rounded {
    border-radius: ${props => props.theme.shape.borderRadius}px;
  }

  &.elevation {
    &-0 {
      box-shadow: ${props => props.theme.shadows[0]};
    }
    &-1 {
      box-shadow: ${props => props.theme.shadows[1]};
    }
    &-2 {
      box-shadow: ${props => props.theme.shadows[2]};
    }
    &-3 {
      box-shadow: ${props => props.theme.shadows[3]};
    }
    &-4 {
      box-shadow: ${props => props.theme.shadows[4]};
    }
    &-5 {
      box-shadow: ${props => props.theme.shadows[5]};
    }
    &-6 {
      box-shadow: ${props => props.theme.shadows[6]};
    }
    &-7 {
      box-shadow: ${props => props.theme.shadows[7]};
    }
  }

  &.has-bg-image {
    background-position: center 30%;
    background-size: cover;
    background-blend-mode: soft-light;
  }

  &.bg-red {
    background-color: ${props => props.theme.palette.error.main};
    color: ${props => props.theme.palette.error.contrastText};
  }

  &.bg-green {
    background-color: ${props => props.theme.palette.success.main};
    color: ${props => props.theme.palette.success.contrastText};
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
  padding: 24px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 0;

  &:hover {
    cursor: pointer;
  }
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
  height: 40px;
  opacity: 0.75;
  animation: ${float} 1s ease-in-out infinite alternate;
  pointer-events: none;
`;

const ColorBlock = ({
  backgroundColor,
  backgroundImage,
  elevation,
  equalPadding,
  id,
  isFirst,
  fullHeight,
  showScrollDown,
  children,
  scrollToId,
  style,
  maxWidth,
  disableGutters,
  minHeight,
}) => (
  <ColorBlockBG
    id={id}
    className={clsx(`bg-${backgroundColor} elevation-${elevation || 0}`, {
      'has-bg-image': backgroundImage,
      'is-first': isFirst,
      'full-height': fullHeight,
      'equal-padding': equalPadding,
      rounded: !!elevation,
    })}
    minHeight={minHeight}
    style={{ backgroundImage: backgroundImage && `url(${backgroundImage})`, ...style }}
  >
    <Container maxWidth={maxWidth} disableGutters={disableGutters}>{children}</Container>
    {showScrollDown && (
      <ScrollTo selector={`#${scrollToId || ''}`}>
        <ScrollDownBox>
          <ScrollDownIndicator viewBox="0 0 95 54">
            <path fill="CurrentColor" d="M95 6l-7-6-41 41L6 0 0 6l47 48L95 6z" />
          </ScrollDownIndicator>
        </ScrollDownBox>
      </ScrollTo>
    )}
  </ColorBlockBG>
);

ColorBlock.propTypes = {
  backgroundColor: PropTypes.oneOf(['red', 'blue', 'yellow', 'dark', 'white']),
  backgroundImage: PropTypes.string,
  children: PropTypes.any,
  fullHeight: PropTypes.bool,
  id: PropTypes.string,
  isFirst: PropTypes.bool,
  scrollToId: PropTypes.string,
  showScrollDown: PropTypes.bool,
};

ColorBlock.defaultProps = {
  backgroundColor: 'white',
  backgroundImage: undefined,
  children: undefined,
  fullHeight: true,
  id: undefined,
  isFirst: false,
  scrollToId: undefined,
  showScrollDown: false,
  minHeight: '100vh',
};

export default ColorBlock;