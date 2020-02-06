import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ColorBlock from '../ColorBlock';
import Box from '@material-ui/core/Box';

const FeatureGrid = ({ gridItems }) => (
  <ColorBlock
    fullHeight={false}
    backgroundColor="yellow"
    showScrollDown={false}
    elevation={0}
    equalPadding
    maxWidth="md"
    style={{
      marginTop: '-2rem',
      marginBottom: '-2rem',
      paddingTop: '0rem',
      paddingBottom: '0rem',
    }}
  >
    <Grid container spacing={3}>
      {gridItems.map((item, index) => (
        <Grid item xs={12}>
          <Grid
            container
            spacing={4}
            direction={index % 2 ? 'row-reverse' : 'row'}
            alignItems="center"
          >
            <Grid key={item.text} item xs={12} sm={3}>
              <Box bgcolor="common.white" borderRadius="50%" p={2} overflow="hidden" boxShadow={6}>
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
            </Grid>
            <Grid key={item.text} item xs={12} sm={9}>
              <Typography variant="h4" component="div" gutterBottom>
                {item.title}
              </Typography>
              <Typography paragraph style={{ fontSize: '1.5rem' }} color="textSecondary">
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </ColorBlock>
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
