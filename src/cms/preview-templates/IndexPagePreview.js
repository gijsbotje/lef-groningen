import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        banner={data.banner}
        lead={data.lead}
        features={data.features}
        how={data.how}
        result={data.result}
        contact={data.contact}
      />
    );
  }
  return <div>Loading...</div>;
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

IndexPagePreview.defaultProps = {
  entry: {
    getIn: undefined,
  },
};

export default IndexPagePreview;
