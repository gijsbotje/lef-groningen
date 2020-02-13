import React, { useState } from 'react';
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

export const AboutPageTemplate = ({ title, aboutBlock1, aboutBlock2, aboutBlock3 }) => {
  const [openDialogId, setOpenDialogId] = useState(null);
  return (
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
        fullHeight
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
        <Section>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            {aboutBlock2.title}
          </Typography>
        </Section>
        <Grid container spacing={4}>
          {[aboutBlock2.person1, aboutBlock2.person2].map((item, index) => (
            <>
              <Grid key={item.text} item xs={12} md={6}>
                <Card style={{ height: '100%' }} elevation={6}>
                  <CardActionArea onClick={() => setOpenDialogId(index)}>
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
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              component="div"
                              gutterBottom
                              align="center"
                              color="textSecondary"
                            >
                              {item.position}
                            </Typography>
                          </CardContent>
                        </Box>
                      }
                    >
                      <PreviewCompatibleImage
                        imageInfo={item}
                        style={{
                          objectFit: 'cover',
                          height: '100%',
                        }}
                      />
                    </HoverBlock>
                  </CardActionArea>
                </Card>
              </Grid>
              <Dialog
                open={openDialogId === index}
                onClose={() => setOpenDialogId(null)}
                maxWidth="md"
                fullWidth
                TransitionComponent={Transition}
                PaperComponent={ResponsivePaper}
              >
                <Grid container direction="row-reverse" style={{ height: '100%' }}>
                  <Grid xs={12} md={6}>
                    <Box position="relative" height="100%">
                      <PreviewCompatibleImage
                        imageInfo={item}
                        style={{
                          objectFit: 'cover',
                          height: '100%',
                        }}
                      />
                      <Box position="absolute" top=".5rem" right=".5rem" color="#fff">
                        <Fab onClick={() => setOpenDialogId(null)} color="secondary" size="small">
                          <CloseIcon />
                        </Fab>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <DialogContent>
                      <Typography variant="h4" gutterBottom>
                        {item.title}
                      </Typography>
                      {item.list.map(({ question, answer }) => (
                        <>
                          <Typography variant="subtitle1" style={{ fontWeight: 900 }}>
                            {question}
                          </Typography>
                          <Typography paragraph variant="body2">
                            {answer}
                          </Typography>
                        </>
                      ))}
                      <Grid container spacing={2}>
                        <Grid item>
                          <Tooltip title="LinkedIn">
                            <IconButton href={item.linkedIn} target="_blank" color="primary">
                              <FontAwesomeIcon icon={faLinkedin} />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                        <Grid item>
                          <Tooltip title="E-mail">
                            <IconButton href={`mailto:${item.mail}`} target="_blank" color="primary">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </DialogContent>
                  </Grid>
                </Grid>
              </Dialog>
            </>
          ))}
        </Grid>
      </ColorBlock>
    </>
  );
};

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
          title
          person1 {
            title
            list {
              question
              answer
            }
            image {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 600, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            position
            linkedIn
            mail
          }
          person2 {
            title
            list {
              question
              answer
            }
            image {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 600, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            position
            linkedIn
            mail
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
