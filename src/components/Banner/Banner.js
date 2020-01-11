import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Container from '../Container';
import Box from '@material-ui/core/Box';

const BannerBase = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 0;
  color: ${props => props.theme.palette.common.white};
  background-color: ${props => props.theme.palette.common.black};
`;

const Heading = styled(Typography)`
  && {
    font-size: 12rem;
    text-transform: uppercase;
    word-spacing: 100vw;
    text-align: left;
    line-height: 1;
    margin-bottom: 0;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.palette.secondary.main};
  }
`;

const StripeAccent = styled.div`
  align-self: flex-end;
  width: 152px;
  height: 56px;
  background-color: ${props => props.theme.palette.secondary.main};
  flex-shrink: 0;
  border-radius: 8px;
`;

const Banner = ({ title, subTitle, titleTypographyProps }) => (
  <BannerBase>
    <Container>
      <Box display="flex">
        {title && (
          <Heading {...titleTypographyProps} gutterBottom>
            {title}
          </Heading>
        )}
        {/*<StripeAccent />*/}
      </Box>
    </Container>
  </BannerBase>
);

Banner.propTypes = {
  title: PropTypes.string,
  titleTypographyProps: PropTypes.shape({
    ...Typography.propTypes,
  }),
};

Banner.defaultProps = {
  title: null,
  titleTypographyProps: {
    ...Typography.defaultProps,
    variant: 'h1',
    component: 'div',
    align: 'center',
    color: 'inherit',
  },
};

export default Banner;
