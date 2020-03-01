import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const FeatureGrid = ({ gridItems }) => (
  <Grid container spacing={3} justify="space-between">
    {gridItems.map(item => (
      <Grid item xs={12} md={3} key={item.title}>
        <Box width="50%" mx="auto" my={2}>
          <PreviewCompatibleImage
            imageInfo={{ image: item.image, alt: item.title }}
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
      </Grid>
    ))}
  </Grid>
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
