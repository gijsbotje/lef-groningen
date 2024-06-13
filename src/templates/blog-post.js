import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content/Content';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { navigate } from 'gatsby-link';
import Chip from '@material-ui/core/Chip';
import Section from '../components/Section';
import ColorBlock from '../components/ColorBlock';
import SiteContext from '../components/SiteContext';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  featuredimage,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <ColorBlock
        backgroundColor="yellow"
        maxWidth="lg"
        id={title.toLowerCase().replace(/ /g, '-')}
        backgroundImage={featuredimage?.childImageSharp?.gatsbyImageData.src}
        minHeight="50vh"
      >
        <Section>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {title}
          </Typography>
        </Section>
      </ColorBlock>
      <ColorBlock backgroundColor="white" maxWidth="lg" fullHeight={false}>
        {helmet || ''}
        <PostContent content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <Typography variant="subtitle1" component="div">
              Tags
            </Typography>
            <Grid container spacing={1}>
              {tags.map(tag => (
                <Grid key={`${tag}tag`} item>
                  <Chip label={tag} onClick={() => navigate(`/tags/${kebabCase(tag)}/`)} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : null}
      </ColorBlock>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  featuredimage: PropTypes.object,
  helmet: PropTypes.object,
  tags: PropTypes.array,
};
BlogPostTemplate.defaultProps = {
  contentComponent: undefined,
  title: '',
  featuredimage: undefined,
  helmet: undefined,
  tags: [],
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'paper', textColor: 'dark' });
  }, []);

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${post.frontmatter.title}`}</title>
          <meta name="description" content={`${post.frontmatter.description}`} />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      featuredimage={post.frontmatter.featuredimage}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

BlogPost.defaultProps = {
  data: {},
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            gatsbyImageData(height: 800, quality: 100, layout: FULL_WIDTH)
          }
        }
        tags
      }
    }
  }
`;
