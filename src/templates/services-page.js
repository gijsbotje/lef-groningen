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

export const ServicesPageTemplate = ({ title, ideeenbrouwerij, veranderAanjagers }) => (
  <>
    <Typography variant="h1" hidden>
      {title}
    </Typography>
    <ColorBlock backgroundColor="green" id={ideeenbrouwerij.title.toLowerCase().replace(/ /g, '-')}>
      <Section>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          {ideeenbrouwerij.title}
        </Typography>
        <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
          {ideeenbrouwerij.lead}
        </Typography>
      </Section>
      <Section>
        <Grid container spacing={6}>
          {ideeenbrouwerij.items.map(({ title: faseTitle, text, image }) => (
            <Grid item xs={12} md={4}>
              <Card style={{ height: '100%' }} elevation={3}>
                <CardContent>
                  <PreviewCompatibleImage
                    imageInfo={image}
                    style={{
                      maxWidth: 150,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginBottom: '1.5rem',
                    }}
                  />
                  <Typography variant="h6" component="div" gutterBottom>
                    {faseTitle}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section>
        <Grid container justify="flex-end">
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
      showScrollDown={false}
      id={veranderAanjagers.title.toLowerCase().replace(/ /g, '-')}
    >
      <Section>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          {veranderAanjagers.title}
        </Typography>
        <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
          {veranderAanjagers.lead}
        </Typography>
      </Section>
      <Section>
        <Grid container spacing={6}>
          {veranderAanjagers.items.map(({ title: faseTitle, text, image }) => (
            <Grid item xs={12} md={4}>
              <Card style={{ height: '100%' }} elevation={3}>
                <CardContent>
                  <PreviewCompatibleImage
                    imageInfo={image}
                    style={{
                      maxWidth: 150,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginBottom: '1.5rem',
                    }}
                  />
                  <Typography variant="h6" component="div" gutterBottom>
                    {faseTitle}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={6} md={5}>
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
