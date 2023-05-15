import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const Section = ({ children, style }) => (
  <Box pb={4} component="section" style={style}>
    {children}
  </Box>
);

Section.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

Section.defaultProps = {
  children: null,
  style: undefined,
};

export default Section;
