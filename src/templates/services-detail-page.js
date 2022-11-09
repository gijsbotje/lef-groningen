import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ColorBlock from '../components/ColorBlock';
import Container from '../components/Container';
import Content, { HTMLContent } from '../components/Content/Content';
import Section from '../components/Section';
import SiteContext from '../components/SiteContext';

export const ServicesDetailPageTemplate = ({ title, bannerImage, contentComponent, content }) => {
  const { setNavbarSettings } = useContext(SiteContext);
  const PageContent = contentComponent || Content;

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'primary', textColor: 'dark' });
  }, []);

  return (
    <>
      <Helmet>
        <title>LEF Groningen - Onze diensten</title>
        <meta
          name="description"
          content="Wij dagen organisaties uit om te veranderen en te innoveren. Dit doen we op twee verschillende manieren. Als ideeënbrouwers, of als projectaanjagers."
        />
      </Helmet>
      <ColorBlock
        backgroundColor="yellow"
        showScrollDown
        maxWidth="sm"
        backgroundImage={{ image: bannerImage, ...bannerImage }}
      >
        <Section>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            {title}
          </Typography>
        </Section>
      </ColorBlock>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <PageContent content={content} />
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            voorbeelden
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

ServicesDetailPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  bannerImage: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

ServicesDetailPageTemplate.defaultProps = {
  bannerImage: undefined,
  contentComponent: undefined,
};

const ServicesDetailPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <ServicesDetailPageTemplate
      content={html}
      contentComponent={HTMLContent}
      title={frontmatter.title}
      description={frontmatter.description}
      bannerImage={frontmatter.bannerImage}
    />
  );
};

ServicesDetailPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
};

ServicesDetailPage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
};

export default ServicesDetailPage;

export const ServicesDetailPageQuery = graphql`
  query ServicesDetailPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
