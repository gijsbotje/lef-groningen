import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';

const BlogRollGrid = ({ data, max, width }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Grid container spacing={4}>
      {posts &&
        (max ? posts.slice(0, max) : posts).map(({ node: post }) => (
          <Grid key={post.id} item xs={12} sm={width}>
            <Card component="article" elevation={6} style={{ height: '100%' }}>
              <CardActionArea
                href={post.fields.slug}
                style={{
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                }}
              >
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
                <CardContent>
                  <Typography
                    variant={max ? 'h6' : 'h5'}
                    component="h2"
                    gutterBottom
                    display="block"
                  >
                    {post.frontmatter.title}
                  </Typography>
                  <Typography paragraph variant="body2">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

BlogRollGrid.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  max: PropTypes.number,
  width: PropTypes.number,
};

BlogRollGrid.defaultProps = {
  data: {
    allMarkdownRemark: {
      edges: [],
    },
  },
  max: null,
  width: 6,
};

const BlogRoll = ({ max, width }) => (
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
              html
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxHeight: 400, maxWidth: 800, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRollGrid data={data} count={count} max={max} width={width} />}
  />
);

BlogRoll.propTypes = {
  max: PropTypes.number,
  width: PropTypes.number,
};

BlogRoll.defaultProps = {
  max: null,
  width: 6,
};

export default BlogRoll;
