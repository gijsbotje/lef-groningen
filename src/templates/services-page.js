import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section';
import Grid from '@material-ui/core/Grid';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ColorBlock from '../components/ColorBlock';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';

export const ServicesPageTemplate = ({ title, ideeenbrouwerij, veranderAanjagers }) => (
  <>
    <Typography variant="h1" hidden>
      {title}
    </Typography>
    <ColorBlock
      backgroundColor="yellow"
      maxWidth="lg"
      id={ideeenbrouwerij.title.toLowerCase().replace(/ /g, '-')}
      showScrollDown
      backgroundImage={ideeenbrouwerij.background.childImageSharp.fluid.src}
      minHeight="50vh"
    >
      <Section>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          {title}
        </Typography>
      </Section>
    </ColorBlock>
    <ColorBlock
      backgroundColor="white"
      maxWidth="lg"
      id={ideeenbrouwerij.title.toLowerCase().replace(/ /g, '-')}
    >
      <Typography variant="h3" component="h2" gutterBottom align="center">
        {ideeenbrouwerij.title}
      </Typography>
      <Section style={{ marginTop: '3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gridAutoFlow: 'column',
            gridGap: '2rem',
          }}
        >
          {ideeenbrouwerij.items.map(({ text, image }, index) => {
            if (index % 2) {
              return (
                <>
                  <Card style={{ backgroundColor: '#fff' }} elevation={6}>
                    <PreviewCompatibleImage imageInfo={image} />
                  </Card>
                  <Card
                    style={{
                      backgroundColor: '#fddd3f',
                      color: '#000',
                    }}
                    elevation={6}
                  >
                    <CardContent style={{ height: '100%' }}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                      >
                        <Typography variant="body1" align="center" style={{ fontSize: '1.5rem' }}>
                          {text}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </>
              );
            }

            return (
              <>
                <Card
                  style={{
                    backgroundColor: '#fddd3f',
                    color: '#000',
                  }}
                  elevation={6}
                >
                  <CardContent style={{ height: '100%' }}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                    >
                      <Typography variant="body1" align="center" style={{ fontSize: '1.5rem' }}>
                        {text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                <Card style={{ backgroundColor: '#fff' }} elevation={6}>
                  <PreviewCompatibleImage imageInfo={image} />
                </Card>
              </>
            );
          })}
        </div>
      </Section>
      <Section style={{ marginTop: '2rem' }}>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6} md={7}>
            <Typography variant="body1" paragraph style={{ fontSize: '1.3rem' }}>
              {ideeenbrouwerij.lead}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h3" component="div" gutterBottom>
              {ideeenbrouwerij.cta.question}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              to={ideeenbrouwerij.cta.linkUrl}
              endIcon={<ChevronRightIcon />}
              size="large"
            >
              {ideeenbrouwerij.cta.linkText}
            </Button>
          </Grid>
        </Grid>
      </Section>
    </ColorBlock>

    <ColorBlock
      backgroundColor="yellow"
      maxWidth="lg"
      id={veranderAanjagers.title.toLowerCase().replace(/ /g, '-')}
    >
      <Typography variant="h3" component="h2" gutterBottom align="center">
        {veranderAanjagers.title}
      </Typography>
      <Section style={{ marginTop: '3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gridAutoFlow: 'column',
            gridGap: '2rem',
          }}
        >
          {veranderAanjagers.items.map(({ text, image }, index) => {
            if (index % 2) {
              return (
                <>
                  <Card style={{ backgroundColor: '#000' }} elevation={6}>
                    <PreviewCompatibleImage imageInfo={image} />
                  </Card>
                  <Card
                    style={{
                      backgroundColor: '#fff',
                      color: '#000',
                    }}
                    elevation={6}
                  >
                    <CardContent style={{ height: '100%' }}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                      >
                        <Typography variant="body1" align="center" style={{ fontSize: '1.5rem' }}>
                          {text}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </>
              );
            }

            return (
              <>
                <Card
                  style={{
                    backgroundColor: '#fff',
                    color: '#000',
                  }}
                  elevation={6}
                >
                  <CardContent style={{ height: '100%' }}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                    >
                      <Typography variant="body1" align="center" style={{ fontSize: '1.5rem' }}>
                        {text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                <Card style={{ backgroundColor: '#000' }} elevation={6}>
                  <PreviewCompatibleImage imageInfo={image} />
                </Card>
              </>
            );
          })}
        </div>
      </Section>
      <Section style={{ marginTop: '2rem' }}>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6} md={7}>
            <Typography variant="body1" paragraph style={{ fontSize: '1.3rem' }}>
              {veranderAanjagers.lead}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h3" component="div" gutterBottom>
              {veranderAanjagers.cta.question}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              to={veranderAanjagers.cta.linkUrl}
              endIcon={<ChevronRightIcon />}
              size="large"
            >
              {veranderAanjagers.cta.linkText}
            </Button>
          </Grid>
        </Grid>
      </Section>
    </ColorBlock>
  </>
);

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  ideeenbrouwerij: PropTypes.object,
  veranderAanjagers: PropTypes.object,
};

ServicesPageTemplate.defaultProps = {
  ideeenbrouwerij: {},
  veranderAanjagers: {},
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ServicesPageTemplate
      title={frontmatter.title}
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
