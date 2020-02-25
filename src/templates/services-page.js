import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section';
import Grid from '@material-ui/core/Grid';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ColorBlock from '../components/ColorBlock';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import SiteContext from '../components/SiteContext';
import Button from '@material-ui/core/Button';

export const ServicesPageTemplate = ({ title, intro, ideeenbrouwerij, veranderAanjagers }) => {
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'primary', textColor: 'dark' });
  }, []);

  return (
    <>
      <Typography variant="h1" hidden>
        {title}
      </Typography>
      <ColorBlock
        backgroundColor="yellow"
        showScrollDown
        scrollToId={ideeenbrouwerij.title.toLowerCase().replace(/ /g, '-')}
        backgroundImage={ideeenbrouwerij.background.childImageSharp.fluid.src}
        maxWidth="sm"
      >
        <Section>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {title}
          </Typography>
          <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
            {intro}
          </Typography>
        </Section>
      </ColorBlock>
      <ColorBlock
        backgroundColor="white"
        maxWidth="lg"
        id={ideeenbrouwerij.title.toLowerCase().replace(/ /g, '-')}
        fullHeight={false}
      >
        <Section style={{ marginTop: '3rem' }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            style={{ marginBottom: '4rem' }}
          >
            {ideeenbrouwerij.title}
          </Typography>
          <Grid container spacing={2}>
            {ideeenbrouwerij.items.map(({ text, image }) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={6} style={{ height: '100%' }}>
                  <CardMedia>
                    <Box width="50%" mx="auto" my={2}>
                      <PreviewCompatibleImage imageInfo={image} />
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                      mb={3}
                      px={2}
                    >
                      <Typography variant="body1" align="center">
                        {text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={6} style={{ height: '100%' }}>
                <Box
                  bgcolor="secondary.main"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardContent>
                    <Typography variant="body1" align="center">
                      Klik
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Section>
      </ColorBlock>
      <ColorBlock backgroundColor="white" maxWidth="lg" fullHeight={false}>
        <Section>
          <Typography variant="h3" component="h2" align="center" style={{ marginBottom: '4rem' }}>
            {veranderAanjagers.title}
          </Typography>
          <Grid container spacing={2}>
            {veranderAanjagers.items.map(({ text, image }) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={6} style={{ height: '100%' }}>
                  <CardMedia>
                    <Box width="50%" mx="auto" my={2}>
                      <PreviewCompatibleImage imageInfo={image} />
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                      mb={3}
                      px={2}
                    >
                      <Typography variant="body1" align="center">
                        {text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={6} style={{ height: '100%' }}>
                <Box
                  bgcolor="secondary.main"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardContent>
                    <Typography variant="body1" align="center">
                      Klik
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Section>
      </ColorBlock>
      <ColorBlock>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="h3" component="div" gutterBottom align="center">
            Get in touch!
          </Typography>
          <Box mt={5}>
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              size="large"
              color="secondary"
            >
              Neem contact op
            </Button>
          </Box>
        </Box>
      </ColorBlock>
    </>
  );
};

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  ideeenbrouwerij: PropTypes.object,
  veranderAanjagers: PropTypes.object,
};

ServicesPageTemplate.defaultProps = {
  intro: undefined,
  ideeenbrouwerij: {},
  veranderAanjagers: {},
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ServicesPageTemplate
      title={frontmatter.title}
      intro={frontmatter.intro}
      ideeenbrouwerij={frontmatter.ideeenbrouwerij}
      veranderAanjagers={frontmatter.veranderAanjagers}
    />
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

ServicesPage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
};

export default ServicesPage;

export const ServicesPageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        title
          intro
        ideeenbrouwerij {
          title
          lead
          intro
          background {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          items {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          cta {
            question
            linkText
            linkUrl
          }
        }
        veranderAanjagers {
          title
          lead
          intro
          items {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 100, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          cta {
            question
            linkText
            linkUrl
          }
        }
      }
    }
  }
`;
