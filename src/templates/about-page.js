import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Container from '../components/Container';
import ColorBlock from '../components/ColorBlock';
import Grid from '@material-ui/core/Grid';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const AboutPageTemplate = ({ title, aboutBlock1, aboutBlock2, aboutBlock3 }) => (
  <>
    <ColorBlock backgroundColor="white" equalPadding showScrollDown scrollToId="about-anchor">
      <Container>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
          {aboutBlock1.intro}
        </Typography>
      </Container>
    </ColorBlock>
    <ColorBlock
      id="about-anchor"
      fullHeight={false}
      backgroundColor="white"
      showScrollDown={false}
      elevation={0}
      equalPadding
      maxWidth="md"
      style={{
        marginTop: '-1rem',
        marginBottom: '-1rem',
        paddingTop: '0rem',
        paddingBottom: '0rem',
      }}
    >
      {[aboutBlock2.person1, aboutBlock2.person2].map((item, index) => (
        <Box my={2}>
          <Grid container spacing={4} direction={index % 2 ? 'row-reverse' : 'row'}>
            <Grid key={item.text} item xs={12} md={6}>
              <Card style={{ height: '100%' }} elevation={6}>
                <PreviewCompatibleImage
                  imageInfo={item}
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                  }}
                />
              </Card>
            </Grid>
            <Grid key={item.text} item xs={12} md={6}>
              <Card style={{ height: '100%', backgroundColor: '#FFD600' }} elevation={6}>
                <CardContent style={{ padding: '2rem' }}>
                  <Typography variant="h4" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography paragraph style={{ fontSize: '1.1rem' }}>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      ))}
    </ColorBlock>
    <ColorBlock>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        style={{ marginBottom: '3rem' }}
      >
        {aboutBlock3.title}
      </Typography>
      <Grid container spacing={4}>
        {aboutBlock3.parts.map(block => (
          <Grid item xs={12} md={6}>
            <Card
              elevation={6}
              style={{
                height: '100%',
                backgroundColor: '#fff',
                color: '#000',
              }}
            >
              <CardContent style={{ height: '100%' }}>
                <Box display="flex" flexDirection="column" alignItems="center" height="100%">
                  <Typography variant="h5" align="center" gutterBottom>
                    {block.title}
                  </Typography>
                  <Typography paragraph align="center" style={{ fontSize: '1rem' }}>
                    {block.text}
                  </Typography>
                  <Button
                    component={Link}
                    to={block.cta.url}
                    variant="outlined"
                    color="inherit"
                    endIcon={<ChevronRightIcon />}
                    style={{ marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
                  >
                    Lees meer
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ColorBlock>
  </>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  aboutBlock1: PropTypes.object,
  aboutBlock2: PropTypes.object,
  aboutBlock3: PropTypes.object,
};

AboutPageTemplate.defaultProps = {
  aboutBlock1: undefined,
  aboutBlock2: undefined,
  aboutBlock3: undefined,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <AboutPageTemplate
      title={frontmatter.aboutBlock1.title}
      aboutBlock1={frontmatter.aboutBlock1}
      aboutBlock2={frontmatter.aboutBlock2}
      aboutBlock3={frontmatter.aboutBlock3}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

AboutPage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query aboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        aboutBlock1 {
          title
          intro
        }
        aboutBlock2 {
          person1 {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 600, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          person2 {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 600, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        aboutBlock3 {
          title
          intro
          parts {
            title
            text
            cta {
              text
              url
            }
          }
        }
      }
    }
  }
`;
