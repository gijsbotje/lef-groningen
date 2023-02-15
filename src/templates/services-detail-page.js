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
import useSiteMetadata from '../components/SiteMetadata';

export const ServicesDetailPageTemplate = ({
  title,
  seo,
  slug,
  bannerImage,
  contentComponent,
  content,
}) => {
  const { siteUrl } = useSiteMetadata();
  const { setNavbarSettings } = useContext(SiteContext);
  const PageContent = contentComponent || Content;

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'primary', textColor: 'dark' });
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <link rel="canonical" href={`${siteUrl}${slug}`} />
      </Helmet>
      <ColorBlock
        backgroundColor="yellow"
        showScrollDown
        maxWidth="lg"
        backgroundImage={{ image: bannerImage, ...bannerImage }}
      >
        <Section>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            {title}
          </Typography>
        </Section>
      </ColorBlock>

      <Container maxWidth="lg">
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} md={7}>
            <PageContent content={content} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

ServicesDetailPageTemplate.propTypes = {
  seo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
  bannerImage: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

ServicesDetailPageTemplate.defaultProps = {
  bannerImage: undefined,
  contentComponent: undefined,
  seo: undefined,
  slug: undefined,
};

const ServicesDetailPage = ({ data }) => {
  const { frontmatter, fields, html } = data.markdownRemark;

  return (
    <ServicesDetailPageTemplate
      seo={frontmatter?.seo}
      slug={fields?.slug}
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
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
    }),
  }),
};

ServicesDetailPage.defaultProps = {
  data: {
    markdownRemark: {
      fields: {},
      frontmatter: {},
    },
  },
};

export default ServicesDetailPage;

export const ServicesDetailPageQuery = graphql`
  query ServicesDetailPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
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
