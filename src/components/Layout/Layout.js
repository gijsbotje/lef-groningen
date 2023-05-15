import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withPrefix, Link as GatsbyLink } from 'gatsby';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../SiteMetadata';
import SiteContext from '../SiteContext';
import Button from '@material-ui/core/Button';
import { useCookie } from '@use-hook/use-cookie';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const [GACookieConsent, setGACoockieConsent] = useCookie('gatsby-gdpr-google-analytics');
  const [GTMCookieConsent, setGtmCoockieConsent] = useCookie('gatsby-gdpr-google-tagmanager');
  const [navbarSettings, setNavbarSettings] = useState({
    scrolledColor: 'paper',
    textColor: 'light',
  });
  const [footerSettings, setFooterSettings] = useState({
    color: 'secondary',
  });

  const handleCookieConsent = answer => () => {
    setGACoockieConsent(answer, { expires: 365 });
    setGtmCoockieConsent(answer, { expires: 365 });
    if (answer === true) {
      window.location.reload();
    }
  };

  return (
    <>
      <Helmet>
        <html lang="nl" />
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

        <script type="application/ld+json">{`
          [
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "LEF Groningen",
              "email": "info@lefgroningen.nl",
              "url": "lefgroningen.nl",
              "sameAs": [
                "https://www.facebook.com/lefgroningen.nl/",
                "https://www.instagram.com/lefgroningen/",
                "https://www.linkedin.com/company/lefgroningen/"
                ]
            },
            , {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "name": "lefgroningen.nl",
                "url": "https://www.lefgroningen.nl/",
              }
          ]
        `}</script>

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        {/* <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} /> */}
      </Helmet>
      <SiteContext.Provider
        value={{ navbarSettings, setNavbarSettings, footerSettings, setFooterSettings }}
      >
        <Header />
        <div style={{ zIndex: 2, position: 'relative', backgroundColor: '#fff' }}>{children}</div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          style={{ maxWidth: 500 }}
          open={GTMCookieConsent === undefined || GACookieConsent === undefined}
          message="Wij gebruiken cookies om te analyseren of onze site goed werkt.
          Kies 'Weigeren' als je liever niet hebt dat er data wordt verzameld over je bezoek."
          action={
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Link
                  as={GatsbyLink}
                  href="/privacy-verklaring"
                  color="secondary"
                  style={{ marginRight: 24 }}
                >
                  Lees meer
                </Link>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="outlined"
                  size="small"
                  onClick={handleCookieConsent(false)}
                >
                  Weigeren
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  onClick={handleCookieConsent(true)}
                >
                  Toestaan
                </Button>
              </Grid>
            </Grid>
          }
        />
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
