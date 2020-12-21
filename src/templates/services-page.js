import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import ColorBlock from '../components/ColorBlock';
import Box from '@material-ui/core/Box';
import SiteContext from '../components/SiteContext';
import Button from '@material-ui/core/Button';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';
import clsx from 'clsx';
import Container from '../components/Container';
import Grid from '@material-ui/core/Grid';
import MuiLink from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import SvgIcon from '@material-ui/core/SvgIcon';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import mdToHtml from '../utilities/mdToHtml';
import Grow from '@material-ui/core/Grow';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

const ServicesPageLayout = styled.section`
  display: grid;
  grid-gap: ${props => props.theme.spacing(4)}px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    //'title title'
    'intro intro'
    'block1 block2'
    'block3 block4'
    'block5 block5'
    'banner banner';

  @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr 1fr auto;
    grid-template-areas:
      'title title title'
      'block1 intro intro'
      'block2 block3 block4'
      'banner banner banner';

    &.mirrored {
      grid-template-areas:
        'title title title'
        'intro intro block1'
        'block2 block3 block4'
        'banner banner banner';
    }
  }
`;

export const ServicesPageTemplate = ({ title, bannerImage, services, contact }) => {
  const { setNavbarSettings } = useContext(SiteContext);
  const [showReadMore, setShowReadMore] = useState(null);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'primary', textColor: 'dark' });
  }, []);

  return (
    <>
      <Helmet>
        <title>LEF Groningen - Onze diensten</title>
        <meta
          name="description"
          content="Wij dagen organisaties uit om te veranderen en te innoveren. Dit doen we op twee verschillende manieren. Als ideeënbrouwers, of als projectaanjagers."
        />
      </Helmet>
      <ColorBlock
        backgroundColor="yellow"
        showScrollDown
        maxWidth="sm"
        backgroundImage={{ image: bannerImage, ...bannerImage }}
      >
        <Section>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            {title}
          </Typography>
        </Section>
      </ColorBlock>

      <Container maxWidth="lg" style={{ paddingBottom: 16 }}>
        {services.map((section, idx) => (
          <ServicesPageLayout className={clsx({ mirrored: idx % 2 === 0 })}>
            <Card
              elevation={0}
              style={{
                gridArea: 'intro',
                height: '100%',
                backgroundColor: '#FFD600',
                color: '#000',
              }}
            >
              <CardContent style={{ padding: 40 }}>
                <Box p={0}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography variant="h6" component="p" paragraph style={{ fontWeight: 400 }}>
                    {section.content.text}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => setShowReadMore(section.title)}
                    size="large"
                  >
                    Meer lezen
                  </Button>
                </Box>
              </CardContent>
            </Card>
            <Card elevation={0} style={{ gridArea: 'block1' }}>
              <PreviewCompatibleImage
                imageInfo={{ image: section.image2, alt: section.title }}
                style={{
                  maxWidth: 600,
                  height: '100%',
                  objectFit: 'cover',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Card>
            <Card elevation={0} style={{ gridArea: 'block2' }}>
              <PreviewCompatibleImage
                imageInfo={{ image: section.image3, alt: section.title }}
                style={{
                  maxWidth: 600,
                  height: '100%',
                  objectFit: 'cover',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Card>
            <Card elevation={0} style={{ gridArea: 'block3' }}>
              <PreviewCompatibleImage
                imageInfo={{ image: section.image4, alt: section.title }}
                style={{
                  maxWidth: 600,
                  height: '100%',
                  objectFit: 'cover',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Card>
            <Card elevation={0} style={{ gridArea: 'block4' }}>
              <PreviewCompatibleImage
                imageInfo={{ image: section.image5, alt: section.title }}
                style={{
                  maxWidth: 600,
                  height: '100%',
                  objectFit: 'cover',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Card>
            <Card
              elevation={0}
              style={{
                gridArea: 'banner',
              }}
            >
              <CardContent
                style={{ paddingTop: 56, paddingBottom: 56, paddingLeft: 0, paddingRight: 0 }}
              >
                <blockquote>
                  <SvgIcon style={{ fontSize: '3rem', marginLeft: -24 }} viewBox="0 0 231 231">
                    <path
                      fill="#000"
                      d="M27.5 164.8c.7-1 2.7-3 5.9-5.8l7.5-7.5c1.7-2.1 3.7-4.6 5.8-7.5 2.5-3.2 4.3-6.2 5.4-9 1-2.9 1.6-5.6 1.6-8 0-4-4.5-10-13.4-18.2A38.1 38.1 0 0127 81c0-8.9 3.2-16.3 9.6-22.4A31.9 31.9 0 0160.1 49c12.4 0 22.2 4.4 29.3 13.3a49.7 49.7 0 0110.6 32c0 32.8-18 62.4-54.3 88.7a218.4 218.4 0 01-18.2-18.2zm104 0c.7-1 2.7-3 5.9-5.8l7.4-7.5a188 188 0 005.9-7.5c2.5-3.2 4.3-6.2 5.3-9 1-2.9 1.6-5.6 1.6-8 0-4-4.4-10-13.3-18.2A38.1 38.1 0 01131 81c0-8.9 3.2-16.3 9.6-22.4A31.9 31.9 0 01164 49c12.5 0 22.2 4.4 29.3 13.3a49.7 49.7 0 0110.7 32c0 32.8-18.1 62.4-54.4 88.7a218.5 218.5 0 01-18.1-18.2z"
                    />
                  </SvgIcon>

                  <Typography variant="h4" component="p">
                    {section.quote.text}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    align="right"
                    style={{ marginTop: 16, fontWeight: '400' }}
                  >
                    {section.quote.author}
                  </Typography>
                </blockquote>
              </CardContent>
            </Card>
            <Dialog
              open={section.title === showReadMore}
              onClose={() => setShowReadMore(null)}
              fullWidth
              maxWidth="sm"
              TransitionComponent={Transition}
            >
              <DialogContent>
                <Box position="absolute" top=".5rem" right=".5rem" color="#fff">
                  <Fab onClick={() => setShowReadMore(null)} color="secondary" size="small">
                    <CloseIcon />
                  </Fab>
                </Box>
                <Typography variant="h4">{section.title}</Typography>
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: mdToHtml(section.extraContent) }} />
              </DialogContent>
            </Dialog>
          </ServicesPageLayout>
        ))}
      </Container>
      <Container maxWidth="lg" style={{ paddingTop: 16 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={4}>
            <Card elevation={0} style={{ height: '100%' }}>
              <PreviewCompatibleImage
                imageInfo={{ image: contact.image, alt: 'phone' }}
                style={{
                  maxWidth: 600,
                  height: '100%',
                  objectFit: 'cover',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Card
              elevation={0}
              style={{
                height: '100%',
                backgroundColor: '#FFD600',
                color: '#000',
              }}
            >
              <CardContent style={{ padding: 56 }}>
                <Typography variant="h5" component="div" paragraph style={{ marginBottom: 40 }}>
                  Ben je geïnteresseerd? Bel dan met Thijs op{' '}
                  <MuiLink href="tel:+31613972693" color="inherit">
                    +31 6 13972693
                  </MuiLink>{' '}
                  of vul ons contact formulier in.
                </Typography>
                <Button
                  component={Link}
                  variant="outlined"
                  color="inherit"
                  size="large"
                  to="/contact"
                >
                  Contact formulier
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  bannerImage: PropTypes.object,
  services: PropTypes.array,
  contact: PropTypes.object,
};

ServicesPageTemplate.defaultProps = {
  bannerImage: undefined,
  services: [],
  contact: {},
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ServicesPageTemplate
      title={frontmatter.title}
      bannerImage={frontmatter.bannerImage}
      services={frontmatter.services}
      contact={frontmatter.contact}
    />
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

ServicesPage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
};

export default ServicesPage;

export const ServicesPageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        title
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        contact {
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        services {
          title
          content {
            title
            text
          }
          extraContent
          image1 {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 300, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 300, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image3 {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 300, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image4 {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 300, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image5 {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 300, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          quote {
            text
            author
          }
        }
      }
    }
  }
`;
