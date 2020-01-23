import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Container from '../Container';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import withStyles from '@material-ui/styles/withStyles';

const BannerBase = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 112px);
  z-index: 0;
  color: ${props => props.theme.palette.secondary.contrastText};
  background-color: ${props => props.theme.palette.secondary.main};
`;

const Heading = styled(Typography)`
  && {
    font-size: 6rem;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 0;

    @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
      font-size: 5rem;
    }
  }
`;

const HeadingContainer = styled.div`
  grid-area: heading;

  @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const BannerInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  grid-template-areas:
    'heading'
    'text';
  font-size: 8rem;

  @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
    grid-gap: 32px 72px;
    grid-template-columns: 2fr 3fr;
    grid-template-areas: 'heading text';
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

const ColorButton = withStyles(() => ({
  root: {
    color: '#fff',
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    marginTop: '0.75rem',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
}))(Button);

const Banner = ({ title, text, cta, titleTypographyProps }) => (
  <BannerInner>
    <HeadingContainer>
      <Heading {...titleTypographyProps} gutterBottom>
        {title &&
          title.split(' ').map(part => (
            <React.Fragment key={part}>
              {part}
              <br />
            </React.Fragment>
          ))}
      </Heading>
    </HeadingContainer>
    <BannerText>
      <Typography variant="body1" style={{ fontSize: '1.75rem' }} paragraph>
        {text}
      </Typography>
      <Button
        component={Link}
        to={cta.url}
        variant="outlined"
        color="inherit"
        endIcon={<ChevronRightIcon />}
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
