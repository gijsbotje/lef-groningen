import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/no-danger
export const HTMLContent = ({ content }) => <div dangerouslySetInnerHTML={{ __html: content }} />;

const Content = ({ content }) => <div>{content}</div>;

Content.propTypes = {
  content: PropTypes.node,
};

Content.defaultProps = {
  content: null,
};

HTMLContent.propTypes = Content.propTypes;
HTMLContent.defaultProps = Content.defaultProps;

export default Content;
