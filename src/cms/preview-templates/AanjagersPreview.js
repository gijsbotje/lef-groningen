import React from 'react';
import PropTypes from 'prop-types';
import { AanjagersPageTemplate } from '../../templates/aanjagers-page';

const AanjagersPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <AanjagersPageTemplate title={data.title} intro={data.intro} fases={data.fases} />;
  }
  return <div>Loading...</div>;
};

AanjagersPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

AanjagersPreview.defaultProps = {
  entry: {
    getIn: undefined,
  },
};

export default AanjagersPreview;
