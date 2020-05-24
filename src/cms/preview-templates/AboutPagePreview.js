import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <AboutPageTemplate
      title={data.aboutBlock1.title}
      aboutBlock1={data.aboutBlock1}
      aboutBlock2={data.aboutBlock2}
    />
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

AboutPagePreview.defaultProps = {
  entry: undefined,
};

export default AboutPagePreview;
