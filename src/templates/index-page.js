import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, withPrefix } from 'gatsby';
import Features from '../components/Features/Features';
import Typography from '@material-ui/core/Typography';
import Container from '../components/Container';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '@material-ui/core/Card';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useSiteMetadata from '../components/SiteMetadata/SiteMetadata';
import { Helmet } from 'react-helmet';
// import BlogRoll from '../components/BlogRoll';
// import Box from '@material-ui/core/Box';
// import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
// import CardActionArea from '@material-ui/core/CardActionArea';

export const IndexPageTemplate = ({
  title,
  banner,
  lead,
  features,
  how,
  // result,
  // contact,
}) => {
  const { title: seoTitle, description: seoDescription } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>
      <Typography variant="h1" hidden>
        {title}
      </Typography>
      {/* <Section> */}
      <Banner title={banner} text={lead.text} cta={lead.link} />
      {/* </Section> */}
      {/* <Container> */}
      {/*  <Section style={{ height: '50vh', display: 'flex', alignItems: 'center' }}> */}
      {/*    <Grid container style={{ justifyContent: 'flex-end' }}> */}
      {/*      <Grid item xs={12} md={6}> */}
      {/*        <Typography variant="body1" style={{ fontSize: '1.4rem' }} paragraph> */}
      {/*          {lead.text} */}
      {/*        </Typography> */}
      {/*        <Button */}
      {/*          component={Link} */}
      {/*          to={lead.link.url} */}
      {/*          variant="outlined" */}
      {/*          color="primary" */}
      {/*          endIcon={<ChevronRightIcon />} */}
      {/*        > */}
      {/*          {lead.link.text} */}
      {/*        </Button> */}
      {/*      </Grid> */}
      {/*    </Grid> */}
      {/*  </Section> */}
      {/* </Container> */}
      <div
        style={{
          paddingTop: '4rem',
          paddingBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          // backgroundColor: '#FFD600',
        }}
      >
        <Container>
          <Section>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  style={{ wordSpacing: '100vw' }}
                >
                  {features.title}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" component="h3" gutterBottom>
                  {features.subTitle}
                </Typography>
                {features.text.map(text => (
                  <Typography key={text} variant="body1" paragraph style={{ fontSize: '1.2rem' }}>
                    {text}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Section>
          <Section>
            {/* <Typography variant="h3" component="h2" style={{ marginBottom: '3rem' }}> */}
            {/*  {features.title} */}
            {/* </Typography> */}
            <Features gridItems={features.items} />
          </Section>
        </Container>
      </div>
      <div
        style={{
          paddingTop: '1rem',
          paddingBottom: '4rem',
          display: 'flex',
          alignItems: 'center',
          // backgroundColor: '#FFD600',
        }}
      >
        <Container>
          <Typography variant="h3" component="h2" style={{ marginBottom: '2rem' }}>
            {how.title}
          </Typography>
          <Grid container spacing={4}>
            {how.ways.map(way => (
              <Grid item xs={12} md={6}>
                <Card style={{ height: '100%' }} elevation={0}>
                  {/* <CardActionArea onClick={() => navigate(way.link)} style={{ marginBottom: '1rem' }}> */}
                  <PreviewCompatibleImage
                    imageInfo={way.image}
                    style={{
                      width: 200,
                      objectFit: 'shrink',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                  {/* </CardActionArea> */}
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ marginTop: '1rem' }}
                    gutterBottom
                  >
                    {way.title}
                  </Typography>
                  <Typography paragraph variant="body1" style={{ fontSize: '1.2rem' }}>
                    {way.text}
                  </Typography>
                  <Button
                    component={Link}
                    to={way.link}
                    variant="outlined"
                    color="primary"
                    endIcon={<ChevronRightIcon />}
                  >
                    lees meer
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      {/* <div */}
      {/*  style={{ */}
      {/*    paddingTop: '4rem', */}
      {/*    paddingBottom: '4rem', */}
      {/*    display: 'flex', */}
      {/*    alignItems: 'center', */}
      {/*  }} */}
      {/* > */}
      {/*  <Container> */}
      {/*    <Section> */}
      {/*      <Typography variant="h3" component="h2" gutterBottom> */}
      {/*        {result.title} */}
      {/*      </Typography> */}
      {/*      <ol> */}
      {/*        {result.results.map(item => ( */}
      {/*          <li>{item}</li> */}
      {/*        ))} */}
      {/*      </ol> */}
      {/*    </Section> */}
      {/*  </Container> */}
      {/* </div> */}
      {/* <div */}
      {/*  style={{ */}
      {/*    paddingTop: '4rem', */}
      {/*    paddingBottom: '4rem', */}
      {/*    display: 'flex', */}
      {/*    alignItems: 'center', */}
      {/*  }} */}
      {/* > */}
      {/*  <Container> */}
      {/*    <Section> */}
      {/*      <Typography variant="h3" component="h2" gutterBottom> */}
      {/*        {contact.title} */}
      {/*      </Typography> */}
      {/*      <Grid container spacing={4}> */}
      {/*        {contact.contacts.map(person => ( */}
      {/*          <Grid item xs={12} md={6}> */}
      {/*            <Card> */}
      {/*              <Avatar> */}
      {/*                <PreviewCompatibleImage */}
      {/*                  imageInfo={person.picture} */}
      {/*                  style={{ */}
      {/*                    height: 200, */}
      {/*                    width: 200, */}
      {/*                    objectFit: 'shrink', */}
      {/*                    marginLeft: 'auto', */}
      {/*                    marginRight: 'auto', */}
      {/*                  }} */}
      {/*                /> */}
      {/*              </Avatar> */}
      {/*              <CardContent> */}
      {/*                <Typography variant="h6" component="div"> */}
      {/*                  {person.name} */}
      {/*                </Typography> */}
      {/*              </CardContent> */}
      {/*              <li>{person.number}</li> */}
      {/*              <li>{person.linkedIn}</li> */}
      {/*            </Card> */}
      {/*          </Grid> */}
      {/*        ))} */}
      {/*      </Grid> */}
      {/*    </Section> */}
      {/*  </Container> */}
      {/* </div> */}
      {/* <Container> */}
      {/*  <Section> */}
      {/*    <Typography variant="h3" component="h2" gutterBottom> */}
      {/*      LEF Blog */}
      {/*    </Typography> */}
      {/*    <BlogRoll /> */}
      {/*    <Box display="flex" justifyContent="center" mt={2}> */}
      {/*      <Button component={Link} to="/blog" variant="contained" color="secondary"> */}
      {/*        Meer cases */}
      {/*      </Button> */}
      {/*    </Box> */}
      {/*  </Section> */}
      {/* </Container> */}
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  banner: PropTypes.string,
  lead: PropTypes.string,
  features: PropTypes.object,
  how: PropTypes.object,
  // result: PropTypes.object,
  // contact: PropTypes.object,
};
IndexPageTemplate.defaultProps = {
  title: null,
  banner: null,
  lead: null,
  features: [],
  how: {},
  // result: {},
  // contact: {},
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      banner={frontmatter.banner}
      lead={frontmatter.lead}
      features={frontmatter.features}
      how={frontmatter.how}
      result={frontmatter.result}
      contact={frontmatter.contact}
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
        title
        banner
        lead {
          text
          link {
            text
            url
          }
        }
        features {
          title
          subTitle
          text
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
        how {
          title
          ways {
            title
            text
            link
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        result {
          title
          results
        }
        contact {
          title
          contacts {
            name
            picture {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            number
            linkedIn
            email
          }
        }
      }
    }
  }
`;
