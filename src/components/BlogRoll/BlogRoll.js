import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery, navigate } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Grid container spacing={4}>
      {posts &&
        posts.map(({ node: post }) => (
          <Grid key={post.id} item xs={12} md={6}>
            <Card component="article" elevation={6}>
              <CardActionArea onClick={() => navigate(post.fields.slug)}>
                {post.frontmatter.featuredimage ? (
                  <CardMedia>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </CardMedia>
                ) : null}
              </CardActionArea>
              <CardContent>
                <Typography
                  variant="h6"
                  component={Link}
                  to={post.fields.slug}
                  gutterBottom
                  display="block"
                >
                  {post.frontmatter.title}
                </Typography>
                <Typography variant="caption">{post.frontmatter.date}</Typography>
                <Typography paragraph>{post.excerpt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

BlogRoll.defaultProps = {
  data: {
    allMarkdownRemark: {
      edges: [],
    },
  },
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxHeight: 400, maxWidth: 800, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
