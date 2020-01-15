import React from 'react';
import PropTypes from 'prop-types';
import { AndersDoenPageTemplate } from '../../templates/anders-doen-page';

const AndersDoenPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <AndersDoenPageTemplate
        title={data.title}
        intro={data.intro}
        pricing={data.pricing}
        fases={data.fases}
      />
    );
  }
  return <div>Loading...</div>;
};

AndersDoenPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

AndersDoenPreview.defaultProps = {
  entry: {
    getIn: undefined,
  },
};

export default AndersDoenPreview;
