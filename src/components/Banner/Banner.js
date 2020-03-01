import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Heading = styled(Typography)`
  && {
    font-size: 2.5rem;

    @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
      font-size: 4rem;
    }
  }
`;

const Text = styled(Typography)`
  && {
    font-size: 1rem;

    @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
      font-size: 1.2rem;
    }
  }
`;

const BannerInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  grid-template-areas: 'text';
  font-size: 6rem;

  color: #fff;

  @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
    grid-gap: 32px 72px;
    grid-template-columns: 4fr 2fr;
    grid-template-areas: 'text empty';
    font-size: 12rem;
  }
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-area: text;
`;

const Banner = ({ title, text, cta, titleTypographyProps }) => (
  <BannerInner>
    <BannerText>
      <Heading {...titleTypographyProps} gutterBottom>
        {title}
      </Heading>
      <Text variant="body1" style={{ marginBottom: '2rem' }} paragraph>
        {text}
      </Text>
      <Button
        component={Link}
        to={cta.url}
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<ChevronRightIcon />}
        title={cta.text}
      >
        {cta.text}
      </Button>
    </BannerText>
  </BannerInner>
);

Banner.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  titleTypographyProps: PropTypes.shape({
    ...Typography.propTypes,
  }),
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
};

Banner.defaultProps = {
  title: null,
  text: null,
  titleTypographyProps: {
    ...Typography.defaultProps,
    variant: 'h1',
    component: 'div',
    color: 'inherit',
  },
  cta: {
    text: null,
    url: null,
  },
};

export default Banner;
