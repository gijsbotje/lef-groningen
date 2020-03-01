import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../SiteMetadata';
import SiteContext from '../SiteContext';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const [navbarSettings, setNavbarSettings] = useState({
    scrolledColor: 'paper',
    textColor: 'light',
  });
  const [footerSettings, setFooterSettings] = useState({
    color: 'secondary',
  });

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16.png`}
          sizes="16x16"
        />

        <link rel="preload" href="https://fonts.googleapis.com" />
        <link rel="preload" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>
      <SiteContext.Provider
        value={{ navbarSettings, setNavbarSettings, footerSettings, setFooterSettings }}
      >
        <Header />
        <div style={{ zIndex: 2, position: 'relative', backgroundColor: '#fff' }}>{children}</div>
        <Footer />
      </SiteContext.Provider>
    </>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.any,
};

TemplateWrapper.defaultProps = {
  children: undefined,
};

export default TemplateWrapper;
