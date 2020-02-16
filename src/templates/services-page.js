import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section';
import Grid from '@material-ui/core/Grid';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ColorBlock from '../components/ColorBlock';
// import Button from '@material-ui/core/Button';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import SiteContext from '../components/SiteContext';

export const ServicesPageTemplate = ({ title, ideeenbrouwerij, veranderAanjagers }) => {
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'paper', textColor: 'dark' });
  }, []);

  return (
    <>
      <Typography variant="h1" hidden>
        {title}
      </Typography>
      <ColorBlock
        backgroundColor="yellow"
        showScrollDown
        scrollToId={ideeenbrouwerij.title.toLowerCase().replace(/ /g, '-')}
        backgroundImage={ideeenbrouwerij.background.childImageSharp.fluid.src}
      >
        <Section>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {title}
          </Typography>
          <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
            Wij dagen organisaties uit om te veranderen en te innoveren. Dit doen we op twee
            verschillende manieren. Als ideeenbrouwes, of als projectaanjagers.
          </Typography>
          <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
            We beginnen klein en creëren stap voor stap iets groots. Zo bewegen wij, en zo willen we
            anderen in beweging brengen.
          </Typography>
        </Section>
      </ColorBlock>
      <ColorBlock
        backgroundColor="white"
        maxWidth="lg"
        id={ideeenbrouwerij.title.toLowerCase().replace(/ /g, '-')}
      >
        <Section style={{ marginTop: '3rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3}>
              <Typography variant="h4" component="h2" gutterBottom>
                {ideeenbrouwerij.title}
              </Typography>
            </Grid>
            {ideeenbrouwerij.items.map(({ text, image }) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={6} style={{ height: '100%' }}>
                  <CardMedia>
                    <Box width="50%" mx="auto" my={2}>
                      <PreviewCompatibleImage imageInfo={image} />
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                      mb={3}
                      px={2}
                    >
                      <Typography variant="body1" align="center">
                        {text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12} sm={12} md={3}>
              <Typography variant="h4" component="h2">
                {veranderAanjagers.title}
              </Typography>
            </Grid>
            {veranderAanjagers.items.map(({ text, image }) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={6} style={{ height: '100%' }}>
                  <CardMedia>
                    <Box width="50%" mx="auto" my={2}>
                      <PreviewCompatibleImage imageInfo={image} />
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                      mb={3}
                      px={2}
                    >
                      <Typography variant="body1" align="center">
                        {text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>
        {/* <Section style={{ marginTop: '2rem' }}> */}
        {/*  <Grid container spacing={2} justify="flex-end"> */}
        {/*    <Grid item xs={12} md={9}> */}
        {/*      <Typography variant="h3" component="div" gutterBottom> */}
        {/*        {ideeenbrouwerij.cta.question} */}
        {/*      </Typography> */}
        {/*      <Typography variant="body1" paragraph> */}
        {/*        {ideeenbrouwerij.lead} */}
        {/*      </Typography> */}
        {/*      <Button */}
        {/*        variant="outlined" */}
        {/*        color="inherit" */}
        {/*        component={Link} */}
        {/*        to={ideeenbrouwerij.cta.linkUrl} */}
        {/*        endIcon={<ChevronRightIcon />} */}
        {/*        size="large" */}
        {/*      > */}
        {/*        {ideeenbrouwerij.cta.linkText} */}
        {/*      </Button> */}
        {/*    </Grid> */}
        {/*  </Grid> */}
        {/* </Section> */}
      </ColorBlock>

      {/* <ColorBlock */}
      {/*  backgroundColor="yellow" */}
      {/*  maxWidth="lg" */}
      {/*  id={veranderAanjagers.title.toLowerCase().replace(/ /g, '-')} */}
      {/* > */}
      {/*  <Section style={{ marginTop: '3rem' }}> */}
      {/*    */}
      {/*  </Section> */}
      {/*  <Section style={{ marginTop: '2rem' }}> */}
      {/*    <Typography variant="h3" component="div" gutterBottom> */}
      {/*      {veranderAanjagers.cta.question} */}
      {/*    </Typography> */}
      {/*    <Typography variant="body1" paragraph> */}
      {/*      {veranderAanjagers.lead} */}
      {/*    </Typography> */}
      {/*    <Button */}
      {/*      variant="outlined" */}
      {/*      color="inherit" */}
      {/*      component={Link} */}
      {/*      to={veranderAanjagers.cta.linkUrl} */}
      {/*      endIcon={<ChevronRightIcon />} */}
      {/*      size="large" */}
      {/*    > */}
      {/*      {veranderAanjagers.cta.linkText} */}
      {/*    </Button> */}
      {/*  </Section> */}
      {/* </ColorBlock> */}
    </>
  );
}

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  ideeenbrouwerij: PropTypes.object,
  veranderAanjagers: PropTypes.object,
};

ServicesPageTemplate.defaultProps = {
  ideeenbrouwerij: {},
  veranderAanjagers: {},
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ServicesPageTemplate
      title={frontmatter.title}
      ideeenbrouwerij={frontmatter.ideeenbrouwerij}
      veranderAanjagers={frontmatter.veranderAanjagers}
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
        ideeenbrouwerij {
          title
          lead
          intro
          background {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          items {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          cta {
            question
            linkText
            linkUrl
          }
        }
        veranderAanjagers {
          title
          lead
          intro
          items {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 100, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          cta {
            question
            linkText
            linkUrl
          }
        }
      }
    }
  }
`;
