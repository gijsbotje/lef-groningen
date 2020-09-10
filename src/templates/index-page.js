import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
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
import Box from '@material-ui/core/Box';
import SiteContext from '../components/SiteContext';
import { Helmet } from 'react-helmet';
import Flip from '../components/Flip';

const bgColor = 'white';

export const IndexPageTemplate = ({
  title,
  homeBlock1,
  homeBlock2,
  homeBlock3,
  customerDisplay,
}) => {
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
        <title>LEF Groningen - Durf jij het aan om te werken met LEF?</title>
        <meta
          name="description"
          content="Om te vernieuwen moet je lef hebben. Wij zijn LEF, een team van twintigers met bravoure en een scherpe blik. Door te confronteren en te verrassen dagen wij organisaties uit om te innoveren en te veranderen."
        />
      </Helmet>
      <Typography variant="h1" hidden>
        {title}
      </Typography>
      <ColorBlock
        backgroundColor="blue"
        backgroundImage={{ image: homeBlock1?.image ?? null, ...homeBlock1.image }}
        backgroundPosition="bottom right"
        isFirst
        scrollToId="home-block-2"
        showScrollDown
        equalPadding
        style={{ color: '#fff' }}
      >
        <Banner title={homeBlock1.title} text={homeBlock1.text} cta={homeBlock1.link} />
      </ColorBlock>
      <ColorBlock backgroundColor={bgColor} id="home-block-2" fullHeight={false} maxWidth="md">
        <Section>
          <Features gridItems={homeBlock2.tools} />
        </Section>
      </ColorBlock>

      <ColorBlock
        backgroundColor={bgColor}
        id="home-block-4"
        fullHeight={false}
        maxWidth="md"
        equalPadding
      >
        <Typography
          variant="h4"
          component="h2"
          align="center"
          style={{ marginBottom: '3rem', marginTop: '-3rem' }}
        >
          {customerDisplay.title}
        </Typography>
        <Grid container spacing={2}>
          {customerDisplay.logos?.map(customer => (
            <Grid item xs={6} sm={3} key={customer.name}>
              <Flip
                front={
                  <PreviewCompatibleImage
                    imageInfo={{ image: customer.image, alt: customer.title }}
                    style={{
                      maxWidth: 150,
                      filter: 'grayscale(1)',
                      objectFit: 'contain',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                }
                back={
                  <Card style={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" component="div">{customer.name}</Typography>
                      <Typography variant="body2">{customer.description}</Typography>
                    </CardContent>
                  </Card>
                }
              />
            </Grid>
          ))}
        </Grid>
      </ColorBlock>

      <ColorBlock backgroundColor={bgColor} id="home-block-3" equalPadding maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          style={{ marginTop: '2rem', marginBottom: '5rem', alignSelf: 'flex-start' }}
        >
          {homeBlock3.title}
        </Typography>
        <Grid container spacing={4}>
          {homeBlock3?.blocks.map(block => (
            <Grid key={block.title} item xs={12} sm={6} md={4}>
              <Card
                elevation={6}
                style={{
                  height: '100%',
                  backgroundColor: '#0E6CB4',
                  color: '#fff',
                }}
              >
                {block.imageOnly ? (
                  <PreviewCompatibleImage
                    imageInfo={{ image: block.image, alt: block.title }}
                    style={{
                      maxWidth: 600,
                      objectFit: 'cover',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                ) : (
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
                        title="Lees meer"
                      >
                        Lees meer
                      </Button>
                    </Box>
                  </CardContent>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </ColorBlock>
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  homeBlock1: PropTypes.object,
  homeBlock2: PropTypes.object,
  homeBlock3: PropTypes.object,
  customerDisplay: PropTypes.object,
};

IndexPageTemplate.defaultProps = {
  title: null,
  homeBlock1: {},
  homeBlock2: {},
  homeBlock3: {},
  customerDisplay: {},
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      homeBlock1={frontmatter.homeBlock1}
      homeBlock2={frontmatter.homeBlock2}
      homeBlock3={frontmatter.homeBlock3}
      customerDisplay={frontmatter.customerDisplay}
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
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        homeBlock2 {
          title
          text
          tools {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            text
          }
        }
        customerDisplay {
          title
          logos {
            image {
              childImageSharp {
                fluid(maxWidth: 150, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            url
            name
            description
          }
        }
        homeBlock3 {
          title
          blocks {
            title
            text
            link
            imageOnly
            image {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
