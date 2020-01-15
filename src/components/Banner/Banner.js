import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Container from '../Container';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import withStyles from '@material-ui/styles/withStyles';
// import Grid from '@material-ui/core/Grid';

const BannerBase = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 112px);
  z-index: 0;
  color: ${props => props.theme.palette.common.white};
  background-color: ${props => props.theme.palette.common.black};
`;

const Heading = styled(Typography)`
  && {
    font-size: 6rem;
    text-transform: uppercase;
    word-spacing: 100vw;
    line-height: 1;
    margin-bottom: 0;
    text-align: left;
    grid-area: ${props => props.gridArea};

    @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
      font-size: 8rem;
    }
  }
`;

const BannerInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 32px;
  grid-template-areas:
    'heading1'
    'heading2'
    'heading3'
    'text';
  font-size: 8rem;

  @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
    grid-gap: 32px 72px;
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'heading1 text'
      'heading2 text'
      'heading3 text';
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
  <BannerBase>
    <Container>
      <BannerInner>
        {title &&
          title.split(' ').map((part, index) => (
            <Heading
              key={part}
              {...titleTypographyProps}
              gutterBottom
              gridArea={`heading${index + 1}`}
            >
              {part}
            </Heading>
          ))}
        <BannerText>
          <Typography variant="body1" style={{ fontSize: '1.75rem' }} paragraph>
            {text}
          </Typography>
          <ColorButton
            component={Link}
            to={cta.url}
            variant="outlined"
            color="default"
            endIcon={<ChevronRightIcon />}
          >
            {cta.text}
          </ColorButton>
        </BannerText>
      </BannerInner>
    </Container>
  </BannerBase>
);

// const BannerInner = styled.div`
//   display: grid;
//   grid-template-columns: 75% 1fr 1fr 1fr;
//   grid-template-rows: 1fr 1fr 1fr;
//   grid-gap: 24px;
//   grid-template-areas:
//     'heading1 bar1 bar1 bar1'
//     'heading2 bar2 bar2 .'
//     'heading3 bar3 . .';
//   font-size: 8rem;
//
//   @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
//     grid-template-columns: 50% 1fr 1fr 1fr;
//     font-size: 12rem;
//   }
// `;

// const Banner = ({ title, titleTypographyProps }) => (
//   <BannerBase>
//     <Container>
//       <BannerInner>
//         {title &&
//           title.split(' ').map((part, index) => (
//             <Heading
//               key={part}
//               {...titleTypographyProps}
//               gutterBottom
//               gridArea={`heading${index + 1}`}
//             >
//               {part}
//             </Heading>
//           ))}
//         <Bar gridArea="bar1" />
//         <Bar gridArea="bar2" />
//         <Bar gridArea="bar3" />
//       </BannerInner>
//     </Container>
//   </BannerBase>
// );

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
    align: 'center',
    color: 'inherit',
  },
  cta: {
    text: null,
    url: null,
  },
};

export default Banner;
