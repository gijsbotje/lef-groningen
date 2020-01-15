import React from 'react';
import PropTypes from 'prop-types';
import { AndersDenkenPageTemplate } from '../../templates/anders-denken-page';

const AndersDenkenPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <AndersDenkenPageTemplate
        title={data.title}
        intro={data.intro}
        pricing={data.pricing}
        fases={data.fases}
      />
    );
  }
  return <div>Loading...</div>;
};

AndersDenkenPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

AndersDenkenPreview.defaultProps = {
  entry: {
    getIn: undefined,
  },
};

export default AndersDenkenPreview;
