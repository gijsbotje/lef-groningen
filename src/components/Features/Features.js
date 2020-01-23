import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const FeatureGrid = ({ gridItems }) => (
  <Grid container spacing={4}>
    {gridItems.map(item => (
      <Grid key={item.text} item xs={12} sm={6} md={4}>
        <Card style={{ height: '100%' }} elevation={6}>
          <CardMedia>
            <PreviewCompatibleImage
              imageInfo={item}
              style={{
                maxWidth: 200,
                objectFit: 'contain',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 16,
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              {item.title}
            </Typography>
            <Typography paragraph style={{ fontSize: '1.1rem' }}>
              {item.text}
            </Typography>
          </CardContent>
        </Card>
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
