import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        homeBlock1={data.homeBlock1}
        homeBlock2={data.homeBlock2}
        homeBlock3={data.homeBlock3}
        customerDisplay={data.customerDisplay}
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
