import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, navigate } from 'gatsby';
import Features from '../components/Features/Features';
import BlogRoll from '../components/BlogRoll';
import Typography from '@material-ui/core/Typography';
import Container from '../components/Container';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';

export const IndexPageTemplate = ({
  title,
  banner,
  lead,
  pitch,
  features,
  how,
  result,
  contact,
}) => (
  <>
    <Typography variant="h1" hidden>
      {title}
    </Typography>
    <Section>
      <Banner title={banner} />
    </Section>
    <Container>
      <Section style={{ height: '50vh', display: 'flex', alignItems: 'center' }}>
        <Grid container style={{ justifyContent: 'flex-end' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">{lead}</Typography>
          </Grid>
        </Grid>
      </Section>
    </Container>
    <div
      style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFD600',
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="div" style={{ marginBottom: '0' }}>
              {pitch}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
    <div
      style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Section>
          <Typography variant="h3" component="h2" style={{ marginBottom: 30 }}>
            {features.title}
          </Typography>
          <Features gridItems={features.items} />
        </Section>
      </Container>
    </div>
    <div
      style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFD600',
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" style={{ marginBottom: 30 }}>
          {how.title}
        </Typography>
        <Grid container spacing={4}>
          {how.ways.map(way => (
            <Grid item xs={12} md={6}>
              <Card style={{ height: '100%' }}>
                <CardActionArea onClick={() => navigate(way.link)}>
                  <PreviewCompatibleImage
                    imageInfo={way.image}
                    style={{
                      height: 225,
                      width: 200,
                      objectFit: 'shrink',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography paragraph variant="body1" style={{ fontSize: '1.2rem' }}>
                    {way.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
    <div
      style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" style={{ marginBottom: 30 }}>
          {how.title}
        </Typography>
        {how.ways.map((way, index) => (
          <Grid
            container
            spacing={4}
            style={{
              alignItems: 'center',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              marginBottom: '2rem',
            }}
          >
            <Grid item xs={12} md={6}>
              <CardActionArea onClick={() => navigate(way.link)}>
                <PreviewCompatibleImage
                  imageInfo={way.image}
                  style={{
                    height: 225,
                    width: 200,
                    objectFit: 'shrink',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="div">
                {way.title}
              </Typography>
              <Typography paragraph variant="body1" style={{ fontSize: '1.2rem' }}>
                {way.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
    {/*<div*/}
    {/*  style={{*/}
    {/*    paddingTop: '4rem',*/}
    {/*    paddingBottom: '4rem',*/}
    {/*    display: 'flex',*/}
    {/*    alignItems: 'center',*/}
    {/*  }}*/}
    {/*>*/}
    {/*  <Container>*/}
    {/*    <Section>*/}
    {/*      <Typography variant="h3" component="h2" gutterBottom>*/}
    {/*        {result.title}*/}
    {/*      </Typography>*/}
    {/*      <ul>*/}
    {/*        {result.list.map(item => (*/}
    {/*          <li>{item.text}</li>*/}
    {/*        ))}*/}
    {/*      </ul>*/}
    {/*    </Section>*/}
    {/*  </Container>*/}
    {/*</div>*/}
    {/*<div*/}
    {/*  style={{*/}
    {/*    paddingTop: '4rem',*/}
    {/*    paddingBottom: '4rem',*/}
    {/*    display: 'flex',*/}
    {/*    alignItems: 'center',*/}
    {/*  }}*/}
    {/*>*/}
    {/*  <Container>*/}
    {/*    <Section>*/}
    {/*      <Typography variant="h3" component="h2" gutterBottom>*/}
    {/*        {contact.title}*/}
    {/*      </Typography>*/}
    {/*      <Grid container spacing={4}>*/}
    {/*        {contact.contacts.map(person => (*/}
    {/*          <Grid item xs={12} md={6}>*/}
    {/*            <Card>*/}
    {/*              <Avatar>*/}
    {/*                <PreviewCompatibleImage*/}
    {/*                  imageInfo={person.picture}*/}
    {/*                  style={{*/}
    {/*                    height: 200,*/}
    {/*                    width: 200,*/}
    {/*                    objectFit: 'shrink',*/}
    {/*                    marginLeft: 'auto',*/}
    {/*                    marginRight: 'auto',*/}
    {/*                  }}*/}
    {/*                />*/}
    {/*              </Avatar>*/}
    {/*              <CardContent>*/}
    {/*                <Typography variant="h6" component="div">*/}
    {/*                  {person.name}*/}
    {/*                </Typography>*/}
    {/*              </CardContent>*/}
    {/*              <li>{person.number}</li>*/}
    {/*              <li>{person.linkedIn}</li>*/}
    {/*            </Card>*/}
    {/*          </Grid>*/}
    {/*        ))}*/}
    {/*      </Grid>*/}
    {/*    </Section>*/}
    {/*  </Container>*/}
    {/*</div>*/}
    <Container>
      <Section>
        <Typography variant="h3" component="h2" gutterBottom>
          LEF Blog
        </Typography>
        <BlogRoll />
        <Box display="flex" justifyContent="center" mt={2}>
          <Button component={Link} to="/blog" variant="contained" color="secondary">
            Meer cases
          </Button>
        </Box>
      </Section>
    </Container>
  </>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  banner: PropTypes.string,
  lead: PropTypes.string,
  pitch: PropTypes.string,
  features: PropTypes.object,
  how: PropTypes.object,
  result: PropTypes.object,
  contact: PropTypes.object,
};
IndexPageTemplate.defaultProps = {
  title: null,
  banner: null,
  lead: null,
  pitch: null,
  features: [],
  how: {},
  result: {},
  contact: {},
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      banner={frontmatter.banner}
      lead={frontmatter.lead}
      pitch={frontmatter.pitch}
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
        lead
        pitch
        features {
          title
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
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
          list {
            text
          }
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
