import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

const SPACING = 15;

const FeatureContainer = styled(Grid)`
  && {
    @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
      width: calc(100% + ${props => props.theme.spacing(SPACING * 2)}px);
      margin: -${props => props.theme.spacing(SPACING)}px;
    }
  }
`;

const FeatureItem = styled(Grid)`
  && {
    @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
      padding: ${props => props.theme.spacing(SPACING)}px !important;
    }
  }
`;

const FeatureGrid = ({ gridItems }) => (
  <FeatureContainer container spacing={3}>
    {gridItems.map(item => (
      <FeatureItem item xs={12} md={4} key={item.title}>
        <Box width="50%" mx="auto" my={2}>
          <PreviewCompatibleImage
            imageInfo={item}
            style={{
              maxWidth: 300,
              objectFit: 'contain',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Box>
        <Typography variant="h6" component="div" gutterBottom>
          {item.title}
        </Typography>
        <Typography paragraph variant="body1" color="textSecondary">
          {item.text}
        </Typography>
      </FeatureItem>
    ))}
  </FeatureContainer>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    }),
  ),
};

FeatureGrid.defaultProps = {
  gridItems: {
    image: null,
    text: null,
  },
};

export default FeatureGrid;
