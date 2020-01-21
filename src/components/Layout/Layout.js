import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const TemplateWrapper = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
    <Footer />
  </>
);

TemplateWrapper.propTypes = {
  children: PropTypes.any,
};

TemplateWrapper.defaultProps = {
  children: undefined,
};

export default TemplateWrapper;
