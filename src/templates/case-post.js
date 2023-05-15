import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content/Content';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section';
import ColorBlock from '../components/ColorBlock';
import SiteContext from '../components/SiteContext';
import useSiteMetadata from '../components/SiteMetadata';
import Skrim from '../components/Skrim';

export const CasePostTemplate = ({ content, contentComponent, title, featuredimage, helmet }) => {
  const PostContent = contentComponent || Content;

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
      <ColorBlock
        backgroundColor="yellow"
        maxWidth="lg"
        id={title.toLowerCase().replace(/ /g, '-')}
        backgroundImage={featuredimage}
        minHeight="50vh"
        fullHeight={false}
        style={{ color: '#fff' }}
      >
        <Skrim />
        <Section>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            style={{ wordBreak: 'break-word' }}
          >
            {title}
          </Typography>
        </Section>
      </ColorBlock>
      <ColorBlock
        backgroundColor="white"
        maxWidth="md"
        fullHeight={false}
        style={{ paddingTop: 0 }}
      >
        {helmet || ''}
        <PostContent content={content} />
      </ColorBlock>
    </>
  );
};

CasePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  featuredimage: PropTypes.object,
  helmet: PropTypes.object,
};
CasePostTemplate.defaultProps = {
  contentComponent: undefined,
  title: '',
  featuredimage: undefined,
  helmet: undefined,
};

const CasePost = ({ data }) => {
  const { siteUrl } = useSiteMetadata();
  const { markdownRemark } = data || {};
  const { frontmatter, html, fields } = markdownRemark || {};
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'paper', textColor: 'light' });
  }, []);

  return (
    <CasePostTemplate
      content={html}
      slug={fields.slug}
      seo={{
        ...frontmatter.seo,
        description: frontmatter?.seo?.description || frontmatter.description,
      }}
      contentComponent={HTMLContent}
      description={frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Lef Groningen">
          <title>{`${frontmatter?.seo?.title || frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${frontmatter?.seo?.description || frontmatter.description}`}
          />
          <link rel="canonical" href={`${siteUrl}${fields.slug}`} />
        </Helmet>
      }
      tags={frontmatter.tags}
      title={frontmatter.title}
      featuredimage={frontmatter.featuredimage}
    />
  );
};

CasePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

CasePost.defaultProps = {
  data: {},
};

export default CasePost;

export const pageQuery = graphql`
  query CasePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }

      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        seo {
          title
          description
        }
        featuredimage {
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
