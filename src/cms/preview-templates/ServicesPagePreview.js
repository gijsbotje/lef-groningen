import React from 'react';
import PropTypes from 'prop-types';
import { ServicesPageTemplate } from '../../templates/services-page';

const ServicesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ServicesPageTemplate
        title={data.title}
        ideeenbrouwerij={data.ideeenbrouwerij}
        veranderAanjagers={data.veranderAanjagers}
      />
    );
  }
  return <div>Loading...</div>;
};

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

ServicesPagePreview.defaultProps = {
  entry: {
    getIn: undefined,
  },
};

export default ServicesPagePreview;
