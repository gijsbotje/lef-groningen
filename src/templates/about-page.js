import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Container from '../components/Container';
import ColorBlock from '../components/ColorBlock';
import Grid from '@material-ui/core/Grid';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grow from '@material-ui/core/Grow';
import Section from '../components/Section';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import HoverBlock from '../components/HoverBlock';
import CardContent from '@material-ui/core/CardContent';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import SiteContext from '../components/SiteContext';
import Button from '@material-ui/core/Button';
import { Helmet } from 'react-helmet';
import Features from '../components/Features/Features';
import Quote from '../components/Quote/Quote';
import useSiteMetadata from '../components/SiteMetadata';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

const ResponsivePaper = styled(Paper)`
  && {
    @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
      max-height: 30rem;
      height: calc(100% - 2rem);
    }
  }
`;

export const AboutPageTemplate = ({ title, aboutBlock1, aboutBlock2, seo, slug }) => {
  const { siteUrl } = useSiteMetadata();
  const [openDialogId, setOpenDialogId] = useState(null);
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'primary', textColor: 'dark' });
  }, []);
  return (
    <>
      <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <link rel="canonical" href={`${siteUrl}${slug}`} />
      </Helmet>
      <ColorBlock
        backgroundColor="white"
        equalPadding
        showScrollDown
        scrollToId="about-anchor"
        backgroundPosition="bottom left"
        maxWidth="sm"
        backgroundImage={{ image: aboutBlock1.background, ...aboutBlock1.background }}
      >
        <Container>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            {title}
          </Typography>
        </Container>
      </ColorBlock>
      <ColorBlock
        id="about-anchor"
        backgroundColor="white"
        showScrollDown={false}
        elevation={0}
        equalPadding
        maxWidth="md"
        fullHeight={false}
      >
        <Section>
          <Typography variant="h3" component="h2" align="center" style={{ marginBottom: '40px' }}>
            {aboutBlock2?.title}
          </Typography>
          <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
            {aboutBlock1?.intro}
          </Typography>
        </Section>
      </ColorBlock>

      <ColorBlock backgroundColor="white" fullHeight={false} maxWidth="md" equalPadding>
        <Section>
          <Features gridItems={aboutBlock1.tools} />
        </Section>
      </ColorBlock>

      <ColorBlock
        fullHeight={false}
        backgroundColor="white"
        showScrollDown={false}
        elevation={0}
        equalPadding
        maxWidth="md"
      >
        <Grid container spacing={4}>
          {aboutBlock2?.persons?.map((item, index) => (
            <Fragment key={item?.title}>
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{ height: '100%' }} elevation={6}>
                  <CardActionArea
                    component="div"
                    onClick={() => (item?.featured ? setOpenDialogId(index) : null)}
                  >
                    <HoverBlock
                      overlay={
                        <Box
                          bgcolor="rgba(255, 214, 0, .9)"
                          height="100%"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {item.featured ? (
                            <CardContent>
                              <Typography variant="h5" component="div" gutterBottom align="center">
                                {item?.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                component="div"
                                gutterBottom
                                align="center"
                                color="textSecondary"
                              >
                                {item?.position}
                              </Typography>
                              <Button
                                size="small"
                                variant="outlined"
                                color="primary"
                                style={{
                                  display: 'block',
                                  marginTop: '1.5rem',
                                  marginLeft: 'auto',
                                  marginRight: 'auto',
                                }}
                              >
                                Lees meer
                              </Button>
                            </CardContent>
                          ) : (
                            <CardContent>
                              <Typography variant="h5" component="div" gutterBottom align="center">
                                {item?.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                component="div"
                                gutterBottom
                                align="center"
                                color="textSecondary"
                              >
                                {item?.position}
                              </Typography>
                              <Typography variant="body2" align="center">
                                {item?.list
                                  ?.map(({ question, answer }) =>
                                    question === 'Leeftijd' ? `${answer} jaar` : answer,
                                  )
                                  .join(' - ')}
                              </Typography>
                            </CardContent>
                          )}
                        </Box>
                      }
                    >
                      <PreviewCompatibleImage
                        imageInfo={{ image: item?.image, alt: item?.title }}
                        style={{
                          objectFit: 'cover',
                          height: '100%',
                          width: '100%',
                        }}
                      />
                    </HoverBlock>
                  </CardActionArea>
                </Card>
              </Grid>
              {(index + 1) % 9 === 0 && aboutBlock2?.quotes[(index + 1) / 9 - 1] && (
                <Grid item xs={12}>
                  <Quote
                    author={aboutBlock2?.quotes[(index + 1) / 9 - 1]?.author}
                    text={aboutBlock2?.quotes[(index + 1) / 9 - 1]?.text}
                  />
                </Grid>
              )}
              {item.featured && (
                <Dialog
                  open={openDialogId === index}
                  onClose={() => setOpenDialogId(null)}
                  maxWidth="md"
                  fullWidth
                  TransitionComponent={Transition}
                  PaperComponent={ResponsivePaper}
                >
                  <Grid container direction="row-reverse" style={{ height: '100%' }}>
                    <Grid item xs={12} md={6}>
                      <Box position="relative" height="100%">
                        <PreviewCompatibleImage
                          imageInfo={{ image: item.image, alt: item.title }}
                          style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                          }}
                        />
                        <Box position="absolute" top=".5rem" right=".5rem" color="#fff">
                          <Fab onClick={() => setOpenDialogId(null)} color="secondary" size="small">
                            <CloseIcon />
                          </Fab>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <DialogContent>
                        <Typography variant="h4" gutterBottom>
                          {item.title}
                        </Typography>
                        {item.list &&
                          item.list.map(({ question, answer }) => (
                            <Fragment key={question}>
                              <Typography variant="subtitle1" style={{ fontWeight: 900 }}>
                                {question}
                              </Typography>
                              <Typography paragraph variant="body2">
                                {answer}
                              </Typography>
                            </Fragment>
                          ))}
                        <Grid container spacing={2}>
                          {item.linkedIn !== '' && (
                            <Grid item>
                              <Tooltip title="LinkedIn">
                                <IconButton
                                  href={item.linkedIn}
                                  target="_blank"
                                  color="primary"
                                  title="LEF op LinkedIn"
                                >
                                  <FontAwesomeIcon icon={faLinkedin} />
                                </IconButton>
                              </Tooltip>
                            </Grid>
                          )}
                          {item.mail && (
                            <Grid item>
                              <Tooltip title="E-mail">
                                <IconButton
                                  href={`mailto:${item.mail}`}
                                  target="_blank"
                                  color="primary"
                                  title="Mail met LEF"
                                >
                                  <FontAwesomeIcon icon={faEnvelope} />
                                </IconButton>
                              </Tooltip>
                            </Grid>
                          )}
                        </Grid>
                      </DialogContent>
                    </Grid>
                  </Grid>
                </Dialog>
              )}
            </Fragment>
          ))}
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{ height: '100%' }} elevation={6}>
              <CardActionArea component={Link} to="/contact/" title={aboutBlock2.extraBlock?.title}>
                <HoverBlock
                  overlay={
                    <Box
                      bgcolor="rgba(255, 214, 0, .9)"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <CardContent>
                        <Typography variant="h5" component="div" gutterBottom align="center">
                          {aboutBlock2.extraBlock?.title}
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom align="center">
                          {aboutBlock2.extraBlock?.subTitle}
                        </Typography>
                      </CardContent>
                    </Box>
                  }
                >
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: aboutBlock2.extraBlock?.image,
                      alt: aboutBlock2.extraBlock?.title,
                    }}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </HoverBlock>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </ColorBlock>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  aboutBlock1: PropTypes.object,
  aboutBlock2: PropTypes.object,
  slug: PropTypes.string.isRequired,
  seo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

AboutPageTemplate.defaultProps = {
  aboutBlock1: undefined,
  aboutBlock2: undefined,
  seo: undefined,
};

const AboutPage = ({ data }) => {
  const { markdownRemark } = data || {};
  const { frontmatter, fields } = markdownRemark || {};

  return (
    <AboutPageTemplate
      slug={fields?.slug}
      seo={frontmatter.seo}
      title={frontmatter.aboutBlock1.title}
      aboutBlock1={frontmatter.aboutBlock1}
      aboutBlock2={frontmatter.aboutBlock2}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
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
      fields {
        slug
      }
      frontmatter {
        seo {
          title
          description
        }
        aboutBlock1 {
          title
          intro
          background {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
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
        aboutBlock2 {
          title
          persons {
            title
            featured
            list {
              question
              answer
            }
            image {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            position
            linkedIn
            mail
          }
          quotes {
            author
            text
          }
          extraBlock {
            title
            subTitle
            image {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300, quality: 80) {
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
