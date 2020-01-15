import React from 'react';
import PropTypes from 'prop-types';
import { DenktankPageTemplate } from '../../templates/denktank-page';

const DenktankPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <DenktankPageTemplate
        title={data.title}
        intro={data.intro}
        pricing={data.pricing}
        fases={data.fases}
      />
    );
  }
  return <div>Loading...</div>;
};

DenktankPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

DenktankPreview.defaultProps = {
  entry: {
    getIn: undefined,
  },
};

export default DenktankPreview;
