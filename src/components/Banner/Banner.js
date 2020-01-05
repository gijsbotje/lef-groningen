import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const BannerBase = styled.div`
  position: relative;
  background-position: center center;
  background-size: cover;
  z-index: 0;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    z-index: 0;
  }
`;

const BannerInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vw;
  min-height: 10rem;
  max-height: 32rem;
  z-index: 1;
  color: ${props => props.theme.palette.common.white};
`;

const Banner = ({
  src,
  title,
  titleTypographyProps,
  subTitle,
  subTitleTypographyProps,
  cta,
  size,
}) => {
  return (
    <BannerBase style={{ backgroundImage: `url(${src})` }}>
      <BannerInner>
        {title && (
          <Typography {...titleTypographyProps} gutterBottom>
            {title}
          </Typography>
        )}
        {subTitle && <Typography {...subTitleTypographyProps}>{subTitle}</Typography>}
      </BannerInner>
    </BannerBase>
  );
};

Banner.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  titleTypographyProps: PropTypes.shape({
    ...Typography.propTypes,
  }),
  subTitle: PropTypes.string,
  subTitleTypographyProps: PropTypes.shape({
    ...Typography.propTypes,
  }),
};

Banner.defaultProps = {
  src: null,
  title: null,
  titleTypographyProps: {
    ...Typography.defaultProps,
    variant: 'h2',
    component: 'div',
    align: 'center',
    color: 'inherit',
  },
  subTitle: PropTypes.string,
  subTitleTypographyProps: {
    ...Typography.defaultProps,
    variant: 'h4',
    component: 'div',
    align: 'center',
    color: 'inherit',
  },
};

export default Banner;
