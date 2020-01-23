import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, withPrefix } from 'gatsby';
import Features from '../components/Features/Features';
import Typography from '@material-ui/core/Typography';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useSiteMetadata from '../components/SiteMetadata/SiteMetadata';
import { Helmet } from 'react-helmet';
import ColorBlock from '../components/ColorBlock';

export const IndexPageTemplate = ({ title, homeBlock1, homeBlock2, homeBlock3 }) => {
  const { title: seoTitle, description: seoDescription } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>
      <Typography variant="h1" hidden>
        {title}
      </Typography>
      <ColorBlock backgroundColor="yellow" isFirst>
        <Banner title={homeBlock1.title} text={homeBlock1.text} cta={homeBlock1.link} />
      </ColorBlock>
      <ColorBlock backgroundColor="red">
        <Section>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {homeBlock2.title}
          </Typography>
          <Typography
            key={homeBlock2.text}
            variant="body1"
            align="center"
            paragraph
            style={{ fontSize: '1.2rem' }}
          >
            {homeBlock2.text &&
              homeBlock2.text.split('.').map(
                sentence =>
                  sentence && (
                    <React.Fragment key={sentence}>
                      {sentence}.<br />
                    </React.Fragment>
                  ),
              )}
          </Typography>
        </Section>
        <Section>
          <Features gridItems={homeBlock2.tools} />
        </Section>
      </ColorBlock>
      <ColorBlock
        backgroundColor="blue"
        showScrollDown={false}
        backgroundImage={homeBlock3.backgroundImage.childImageSharp.fluid.src}
      >
        <Typography
          variant="h3"
          component="h2"
          align="center"
          style={{ marginBottom: '5rem', alignSelf: 'flex-start' }}
        >
          {homeBlock3.title}
        </Typography>
        <Grid container spacing={4} style={{ justifyContent: 'space-between' }}>
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h5" component="div" style={{ marginTop: '1rem' }} gutterBottom>
              {homeBlock3.block1.title}
            </Typography>
            <Typography paragraph variant="body1" style={{ fontSize: '1.2rem' }}>
              {homeBlock3.block1.text}
            </Typography>
            <Button
              component={Link}
              to={homeBlock3.block1.link}
              variant="outlined"
              color="inherit"
              endIcon={<ChevronRightIcon />}
            >
              lees meer
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h5" component="div" style={{ marginTop: '20rem' }} gutterBottom>
              {homeBlock3.block2.title}
            </Typography>
            <Typography paragraph variant="body1" style={{ fontSize: '1.2rem' }}>
              {homeBlock3.block2.text}
            </Typography>
            <Button
              component={Link}
              to={homeBlock3.block2.link}
              variant="outlined"
              color="inherit"
              endIcon={<ChevronRightIcon />}
            >
              lees meer
            </Button>
          </Grid>
        </Grid>
      </ColorBlock>
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  homeBlock1: PropTypes.object,
  homeBlock2: PropTypes.object,
  homeBlock3: PropTypes.object,
};
IndexPageTemplate.defaultProps = {
  title: null,
  homeBlock1: {},
  homeBlock2: {},
  homeBlock3: {},
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      homeBlock1={frontmatter.homeBlock1}
      homeBlock2={frontmatter.homeBlock2}
      homeBlock3={frontmatter.homeBlock3}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

IndexPage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        homeBlock1 {
          title
          text
          link {
            text
            url
          }
        }
        homeBlock2 {
          title
          text
          tools {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
        homeBlock3 {
          title
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          block1 {
            title
            text
            link
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          block2 {
            title
            text
            link
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
