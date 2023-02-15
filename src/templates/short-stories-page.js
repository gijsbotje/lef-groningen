import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section';
import ColorBlock from '../components/ColorBlock';
import SiteContext from '../components/SiteContext';
import BlogRoll from '../components/BlogRoll/BlogRoll';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../components/SiteMetadata';

export const ShortStoriesTemplate = ({ seo, slug, title, background }) => {
  const { siteUrl } = useSiteMetadata();
  const { setNavbarSettings, setFooterSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'primary', textColor: 'light' });
    setFooterSettings({ color: 'info' });

    return () => {
      setFooterSettings({ color: 'secondary' });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <link rel="canonical" href={`${siteUrl}${slug}`} />
      </Helmet>
      <ColorBlock
        backgroundColor="blue"
        scrollToId={title.toLowerCase().replace(/ /g, '-')}
        backgroundImage={{ image: background, ...background }}
      >
        <Section>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            {title}
          </Typography>
        </Section>
      </ColorBlock>
      <ColorBlock backgroundColor="white" maxWidth="lg" id={title.toLowerCase().replace(/ /g, '-')}>
        <BlogRoll />
      </ColorBlock>
    </>
  );
};

ShortStoriesTemplate.propTypes = {
  title: PropTypes.string,
  seo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  slug: PropTypes.string,
  background: PropTypes.object,
};
ShortStoriesTemplate.defaultProps = {
  title: undefined,
  seo: undefined,
  slug: undefined,
  background: undefined,
};

const ShortStoriesPage = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark;

  return (
    <ShortStoriesTemplate
      title={frontmatter.title}
      background={frontmatter.background}
      slug={fields.slug}
    />
  );
};

ShortStoriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

ShortStoriesPage.defaultProps = {
  data: {},
};

export default ShortStoriesPage;

export const ShortStoriesQuery = graphql`
  query ShortStoriesQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "short-stories-page" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        seo {
          title
          description
        }
        background {
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
