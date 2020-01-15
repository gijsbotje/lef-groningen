import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Container from '../components/Container';
import Section from '../components/Section';
import Grid from '@material-ui/core/Grid';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MuiLink from '@material-ui/core/Link';

export const DenktankPageTemplate = ({ title, intro, pricing, fases }) => (
  <>
    <Container style={{ paddingTop: '1.5rem', paddingBottom: 0 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <MuiLink color="inherit" to="/" component={Link}>
          home
        </MuiLink>
        <Typography color="textPrimary">{title}</Typography>
      </Breadcrumbs>
    </Container>
    <Container style={{ paddingTop: '1.5rem' }}>
      <Section>
        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>
        {intro.map(({ text }) => (
          <Typography variant="body1" paragraph>
            {text}
          </Typography>
        ))}
        {pricing.options.map(({ text, linkText, url }) => (
          <Typography variant="body1">
            {text} <Link to={url}>{linkText}</Link>
          </Typography>
        ))}
      </Section>
      <Section>
        <Typography variant="h4" component="h2" style={{ marginBottom: '2rem' }}>
          {fases.heading}
        </Typography>
        <Grid container spacing={4}>
          {fases.items.map(({ title: faseTitle, text, image }) => (
            <Grid item xs={12} md={4}>
              <Card style={{ height: '100%' }} elevation={3}>
                <CardContent>
                  <PreviewCompatibleImage
                    imageInfo={image}
                    style={{
                      maxWidth: 100,
                      marginLeft: 'auto',
                      marginRight: 'auto',
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
    </Container>
  </>
);

DenktankPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.object,
  pricing: PropTypes.object,
  fases: PropTypes.object,
};

DenktankPageTemplate.defaultProps = {
  intro: {},
  pricing: {},
  fases: {},
};

const DenktankPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <DenktankPageTemplate
      title={frontmatter.title}
      intro={frontmatter.intro}
      pricing={frontmatter.pricing}
      fases={frontmatter.fases}
    />
  );
};

DenktankPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

DenktankPage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
};

export default DenktankPage;

export const DenktankPageQuery = graphql`
  query DenktankTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "denktank-page" } }) {
      frontmatter {
        title
        intro {
          text
        }
        pricing {
          options {
            text
            linkText
            url
          }
        }
        fases {
          heading
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
        }
      }
    }
  }
`;
