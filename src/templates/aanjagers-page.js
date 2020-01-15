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

export const AanjagersPageTemplate = ({ title, intro, fases }) => (
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

AanjagersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.object,
  fases: PropTypes.object,
};

AanjagersPageTemplate.defaultProps = {
  intro: {},
  fases: {},
};

const AanjagersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <AanjagersPageTemplate
      title={frontmatter.title}
      intro={frontmatter.intro}
      fases={frontmatter.fases}
    />
  );
};

AanjagersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

AanjagersPage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
};

export default AanjagersPage;

export const AanjagersPageQuery = graphql`
  query AanjagersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "aanjagers-page" } }) {
      frontmatter {
        title
        intro {
          text
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
