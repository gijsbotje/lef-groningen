import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const FeatureGrid = ({ gridItems }) => (
  <Grid container spacing={2}>
    {gridItems.map(item => {
      console.log(item);
      return (
        <Grid key={item.text} item xs={12} sm={6} md={4}>
          <PreviewCompatibleImage
            imageInfo={item}
            style={{
              height: 200,
              width: 200,
              objectFit: 'cover',
              borderRadius: '50%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <Typography paragraph>{item.text}</Typography>
        </Grid>
      )
    })}
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
