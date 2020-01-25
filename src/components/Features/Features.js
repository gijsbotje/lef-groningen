import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import ColorBlock from '../ColorBlock';

const colors = ['blue', 'yellow', 'blue'];

const FeatureGrid = ({ gridItems }) => (
  <Grid container spacing={10}>
    {gridItems.map((item, index) => (
      <Grid item xs={12}>
        <ColorBlock
          fullHeight={false}
          backgroundColor={colors[index]}
          showScrollDown={false}
          elevation={6}
          equalPadding
          maxWidth="lg"
          style={{
            marginLeft: index % 2 ? 'none' : '2rem',
            marginRight: index % 2 ? '2rem' : 'none',
          }}
        >
          <Grid container spacing={4} direction={index % 2 ? 'row-reverse' : 'row'}>
            <Grid key={item.text} item xs={12} sm={3}>
              <Card
                style={{
                  marginRight: `${index % 2 ? '-4rem' : '0'}`,
                  marginLeft: `${index % 2 ? '0' : '-4rem'}`,
                  marginTop: '-6rem',
                  padding: '2rem',
                }}
                elevation={6}
              >
                <PreviewCompatibleImage
                  imageInfo={item}
                  style={{
                    maxWidth: 300,
                    objectFit: 'contain',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: 16,
                  }}
                />
              </Card>
            </Grid>
            <Grid key={item.text} item xs={12} sm={9}>
              <Typography variant="h4" component="div" gutterBottom>
                {item.title}
              </Typography>
              <Typography paragraph style={{ fontSize: '1.5rem' }}>
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        </ColorBlock>
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
