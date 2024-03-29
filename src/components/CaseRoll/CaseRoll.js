import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { HTMLContent } from '../Content';
import Grow from '@material-ui/core/Grow';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

const CaseRollGrid = ({ data, max, width }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const [openShortStory, setOpenShortStory] = useState(null);

  return (
    <Grid container spacing={4}>
      {posts &&
        (max ? posts.slice(0, max) : posts).map(({ node: post }) => (
          <Grid key={post.id} item xs={12} sm={width}>
            <Card component="article" elevation={0} style={{ height: '100%' }}>
              <CardActionArea
                onClick={() => setOpenShortStory(post.fields.slug)}
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
                    {post.frontmatter.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Dialog
              open={openShortStory === post.fields.slug}
              onClose={() => setOpenShortStory(null)}
              TransitionComponent={Transition}
            >
              <Box position="relative" height="100%">
                <CardMedia>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </CardMedia>
                <Box position="absolute" top=".5rem" right=".5rem" color="#fff">
                  <Fab onClick={() => setOpenShortStory(null)} color="secondary" size="small">
                    <CloseIcon />
                  </Fab>
                </Box>
              </Box>
              <DialogContent>
                <Typography variant="h5" gutterBottom display="block">
                  {post.frontmatter.title}
                </Typography>
                <HTMLContent content={post.html} />
              </DialogContent>
            </Dialog>
          </Grid>
        ))}
    </Grid>
  );
};

CaseRollGrid.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  max: PropTypes.number,
  width: PropTypes.number,
};

CaseRollGrid.defaultProps = {
  data: {
    allMarkdownRemark: {
      edges: [],
    },
  },
  max: null,
  width: 6,
};

const CaseRoll = ({ max, width }) => (
  <StaticQuery
    query={graphql`
      query CaseRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "case-post" } } }
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
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
    render={(data, count) => <CaseRollGrid data={data} count={count} max={max} width={width} />}
  />
);

CaseRoll.propTypes = {
  max: PropTypes.number,
  width: PropTypes.number,
};

CaseRoll.defaultProps = {
  max: null,
  width: 6,
};

export default CaseRoll;
