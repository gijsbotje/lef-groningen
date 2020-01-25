import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, navigate } from 'gatsby';
import Features from '../components/Features/Features';
import Typography from '@material-ui/core/Typography';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ColorBlock from '../components/ColorBlock';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';

const bgColor = 'yellow';

export const IndexPageTemplate = ({ title, homeBlock1, homeBlock2, homeBlock3 }) => (
  <>
    <Typography variant="h1" hidden>
      {title}
    </Typography>
    <ColorBlock backgroundColor={bgColor} isFirst scrollToId="home-block-2" showScrollDown>
      <Banner title={homeBlock1.title} text={homeBlock1.text} cta={homeBlock1.link} />
    </ColorBlock>
    <ColorBlock backgroundColor={bgColor} id="home-block-2" scrollToId="home-block-3" maxWidth="lg">
      <Section>
        <Features gridItems={homeBlock2.tools} />
      </Section>
    </ColorBlock>
    <ColorBlock
      backgroundColor={bgColor}
      // backgroundImage={homeBlock3.backgroundImage.childImageSharp.fluid.src}
      id="home-block-3"
      equalPadding
      maxWidth="lg"
    >
      <Typography
        variant="h3"
        component="h2"
        align="center"
        style={{ marginTop: '-2rem', marginBottom: '5rem', alignSelf: 'flex-start' }}
      >
        {homeBlock3.title}
      </Typography>
      <Grid container spacing={4}>
        {[
          homeBlock3.block1,
          homeBlock3.block2,
          homeBlock3.block3,
          homeBlock3.block4,
          homeBlock3.block5,
          homeBlock3.block6,
        ].map((block, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={6} style={{ height: '100%', backgroundColor: '#00b8f1', color: '#fff' }}>
              {index === 0 || index === 5 ? (
                <CardContent style={{ height: '100%' }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <Typography paragraph align="center" style={{ fontSize: '1.3rem' }}>
                      {block.text}
                    </Typography>
                    <Button
                      component={Link}
                      to={block.link}
                      variant="outlined"
                      color="inherit"
                      endIcon={<ChevronRightIcon />}
                      style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    >
                      Lees meer
                    </Button>
                  </Box>
                </CardContent>
              ) : (
                <PreviewCompatibleImage
                  imageInfo={block}
                  style={{
                    maxWidth: 600,
                    objectFit: 'contain',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </ColorBlock>
  </>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  homeBlock1: PropTypes.object,
  homeBlock2: PropTypes.object,
  homeBlock3: PropTypes.object,
};
IndexPageTemplate.defaultProps = {
  title: null,
  homeBlock1: {},
  homeBlock2: {},
  homeBlock3: {},
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      homeBlock1={frontmatter.homeBlock1}
      homeBlock2={frontmatter.homeBlock2}
      homeBlock3={frontmatter.homeBlock3}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

IndexPage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        homeBlock1 {
          title
          text
          link {
            text
            url
          }
        }
        homeBlock2 {
          title
          text
          tools {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
        homeBlock3 {
          title
          block1 {
            title
            text
            link
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          block2 {
            title
            text
            link
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          block3 {
            title
            text
            link
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          block4 {
            title
            text
            link
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          block5 {
            title
            text
            link
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          block6 {
            title
            text
            link
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 50) {
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
