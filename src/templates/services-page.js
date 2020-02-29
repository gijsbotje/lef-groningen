import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section';
import Grid from '@material-ui/core/Grid';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import ColorBlock from '../components/ColorBlock';
import Box from '@material-ui/core/Box';
import SiteContext from '../components/SiteContext';
import Button from '@material-ui/core/Button';
import ScrollTo from 'react-scroll-into-view';

export const ServicesPageTemplate = ({
  title,
  bannerImage,
  subTitle,
  intro,
  ideeenBrouwerij,
  veranderAanjagers,
  dienstAnnouncement,
}) => {
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'primary', textColor: 'dark' });
  }, []);

  return (
    <>
      <Typography variant="h1" hidden>
        {title}
      </Typography>
      <ColorBlock
        backgroundColor="yellow"
        showScrollDown
        scrollToId={ideeenBrouwerij.title.toLowerCase().replace(/ /g, '-')}
        fluid={bannerImage.childImageSharp.fluid}
        maxWidth="sm"
      >
        <Section>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {title}
          </Typography>
        </Section>
      </ColorBlock>
      <ColorBlock backgroundColor="white" maxWidth="md" fullHeight={false}>
        <Section>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            align="center"
            style={{ marginBottom: '2rem' }}
          >
            {subTitle}
          </Typography>
          <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
            {intro}
          </Typography>
          <Grid container spacing={5} style={{ marginTop: '40px' }}>
            {[ideeenBrouwerij, veranderAanjagers].map(({ title: itemTitle, image }) => (
              <Grid key={itemTitle} item xs={12} sm={6} style={{ textAlign: 'center' }}>
                <ScrollTo selector={`#${itemTitle.toLowerCase().replace(/ /g, '-')}`}>
                  <Typography variant="h5" gutterBottom>
                    {itemTitle}
                  </Typography>
                  <PreviewCompatibleImage
                    imageInfo={{ image }}
                    style={{
                      maxWidth: '240px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginBottom: '16px',
                    }}
                  />
                  <Button type="button" variant="text" color="primary">
                    Lees meer
                  </Button>
                </ScrollTo>
              </Grid>
            ))}
          </Grid>
        </Section>
      </ColorBlock>
      <ColorBlock
        backgroundColor="white"
        maxWidth="md"
        id={ideeenBrouwerij.title.toLowerCase().replace(/ /g, '-')}
        fullHeight={false}
      >
        <Section>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            style={{ marginBottom: '4rem' }}
          >
            {ideeenBrouwerij.title}
          </Typography>
          {ideeenBrouwerij.items.map(({ title: itemTitle, text, image }, index) => (
            <Grid key={itemTitle} container direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
              <Grid item xs={12} sm={6}>
                <PreviewCompatibleImage imageInfo={{ image }} />
              </Grid>
              <Grid item xs={12} sm={6} container direction="column" justify="center">
                <Box pl={index % 2 === 0 ? 5 : 0} pr={index % 2 === 0 ? 0 : 5}>
                  <Typography variant="h6" align={index % 2 === 0 ? 'right' : 'left'}>
                    {itemTitle}
                  </Typography>
                  <Typography variant="body1" align={index % 2 === 0 ? 'right' : 'left'}>
                    {text}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Section>
      </ColorBlock>
      <ColorBlock
        backgroundColor="white"
        maxWidth="md"
        id={veranderAanjagers.title.toLowerCase().replace(/ /g, '-')}
        fullHeight={false}
      >
        <Section>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            style={{ marginBottom: '4rem' }}
          >
            {veranderAanjagers.title}
          </Typography>
          {veranderAanjagers.items.map(({ title: itemTitle, text, image }, index) => (
            <Grid key={itemTitle} container direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
              <Grid item xs={12} sm={6}>
                <PreviewCompatibleImage imageInfo={{ image }} />
              </Grid>
              <Grid item xs={12} sm={6} container direction="column" justify="center">
                <Box pl={index % 2 === 0 ? 5 : 0} pr={index % 2 === 0 ? 0 : 5}>
                  <Typography variant="h6" align={index % 2 === 0 ? 'right' : 'left'}>
                    {itemTitle}
                  </Typography>
                  <Typography variant="body1" align={index % 2 === 0 ? 'right' : 'left'}>
                    {text}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Section>
      </ColorBlock>
      <ColorBlock backgroundColor="white" maxWidth="sm" fullHeight={false}>
        <Section>
          <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
            {dienstAnnouncement.title}
          </Typography>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            {dienstAnnouncement.subTitle}
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            {dienstAnnouncement.announcement}
          </Typography>
          <Typography variant="h6" align="center">
            {dienstAnnouncement.finish}
          </Typography>
        </Section>
      </ColorBlock>
    </>
  );
};

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  bannerImage: PropTypes.object,
  subTitle: PropTypes.string,
  intro: PropTypes.string,
  ideeenBrouwerij: PropTypes.object,
  veranderAanjagers: PropTypes.object,
  dienstAnnouncement: PropTypes.object,
};

ServicesPageTemplate.defaultProps = {
  intro: undefined,
  bannerImage: undefined,
  subTitle: undefined,
  ideeenBrouwerij: {},
  veranderAanjagers: {},
  dienstAnnouncement: {},
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ServicesPageTemplate
      title={frontmatter.title}
      bannerImage={frontmatter.bannerImage}
      subTitle={frontmatter.subTitle}
      intro={frontmatter.intro}
      ideeenBrouwerij={frontmatter.ideeenBrouwerij}
      veranderAanjagers={frontmatter.veranderAanjagers}
      dienstAnnouncement={frontmatter.dienstAnnouncement}
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
        subTitle
        intro
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ideeenBrouwerij {
          title
          lead
          intro
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          items {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 500, quality: 80, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
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
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          items {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 500, quality: 80, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        dienstAnnouncement {
          title
          subTitle
          announcement
          finish
        }
      }
    }
  }
`;
