import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import styled from 'styled-components';

const StyledSwiperWrapper = styled.div`
  .swiper-wrapper {
    align-items: center;
  }
`;

const Carousel = ({ children, pagination, navigation, spaceBetween, ...rest }) => {
  return (
    <StyledSwiperWrapper>
      <Swiper pagination={pagination} navigation={navigation} spaceBetween={spaceBetween} {...rest}>
        {children}
      </Swiper>
    </StyledSwiperWrapper>
  );
};

Carousel.propTypes = {
  children: PropTypes.any,
  pagination: PropTypes.object,
  navigation: PropTypes.object,
  spaceBetween: PropTypes.number,
};

Carousel.defaultProps = {
  children: undefined,
  pagination: {},
  navigation: {},
  spaceBetween: 0,
};

export default Carousel;
