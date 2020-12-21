import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

const Quote = ({ text, author }) => (
  <Card
    elevation={0}
    style={{
      gridArea: 'banner',
    }}
  >
    <CardContent style={{ paddingTop: 56, paddingBottom: 56, paddingLeft: 0, paddingRight: 0 }}>
      <blockquote>
        <SvgIcon style={{ fontSize: '3rem', marginLeft: -24 }} viewBox="0 0 231 231">
          <path
            fill="#000"
            d="M27.5 164.8c.7-1 2.7-3 5.9-5.8l7.5-7.5c1.7-2.1 3.7-4.6 5.8-7.5 2.5-3.2 4.3-6.2 5.4-9 1-2.9 1.6-5.6 1.6-8 0-4-4.5-10-13.4-18.2A38.1 38.1 0 0127 81c0-8.9 3.2-16.3 9.6-22.4A31.9 31.9 0 0160.1 49c12.4 0 22.2 4.4 29.3 13.3a49.7 49.7 0 0110.6 32c0 32.8-18 62.4-54.3 88.7a218.4 218.4 0 01-18.2-18.2zm104 0c.7-1 2.7-3 5.9-5.8l7.4-7.5a188 188 0 005.9-7.5c2.5-3.2 4.3-6.2 5.3-9 1-2.9 1.6-5.6 1.6-8 0-4-4.4-10-13.3-18.2A38.1 38.1 0 01131 81c0-8.9 3.2-16.3 9.6-22.4A31.9 31.9 0 01164 49c12.5 0 22.2 4.4 29.3 13.3a49.7 49.7 0 0110.7 32c0 32.8-18.1 62.4-54.4 88.7a218.5 218.5 0 01-18.1-18.2z"
          />
        </SvgIcon>

        <Typography variant="h4" component="p">
          {text}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="right"
          style={{ marginTop: 16, fontWeight: '400' }}
        >
          {author}
        </Typography>
      </blockquote>
    </CardContent>
  </Card>
);

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Quote;
