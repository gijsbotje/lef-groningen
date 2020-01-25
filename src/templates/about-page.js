import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Container from '../components/Container';
import ColorBlock from '../components/ColorBlock';

export const AboutPageTemplate = ({ title, aboutBlock1, aboutBlock2 }) => (
  <ColorBlock backgroundColor="white">
    <Container>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
        {aboutBlock1.intro}
      </Typography>
    </Container>
  </ColorBlock>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  aboutBlock1: PropTypes.object,
  aboutBlock2: PropTypes.object,
};

AboutPageTemplate.defaultProps = {
  aboutBlock1: undefined,
  aboutBlock2: undefined,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <AboutPageTemplate
      title={frontmatter.aboutBlock1.title}
      aboutBlock1={frontmatter.aboutBlock1}
      aboutBlock2={frontmatter.aboutBlock2}
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
                fluid(maxWidth: 800, quality: 50) {
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
