import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Content, { HTMLContent } from '../components/Content/Content';
import Container from '../components/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { navigate } from 'gatsby-link';
import Chip from '@material-ui/core/Chip';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Container>
      {helmet || ''}
      <Typography variant="h3" component="h1">
        {title}
      </Typography>
      <Typography paragraph>{description}</Typography>
      <PostContent content={content} />
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
          <Typography variant="subtitle1" component="div">
            Tags
          </Typography>
          <Grid container spacing={1}>
            {tags.map(tag => (
              <Grid key={`${tag}tag`} item>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                <Chip label={tag} onClick={() => navigate(`/tags/${kebabCase(tag)}/`)} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : null}
    </Container>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  tags: PropTypes.array,
};
BlogPostTemplate.defaultProps = {
  contentComponent: undefined,
  description: undefined,
  title: undefined,
  helmet: undefined,
  tags: undefined,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

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
        description
        tags
      }
    }
  }
`;
