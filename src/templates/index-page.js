import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Features from '../components/Features/Features';
import BlogRoll from '../components/BlogRoll';
import Typography from '@material-ui/core/Typography';
import Container from '../components/Container';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <Typography variant="h1" hidden>
      {title}
    </Typography>
    <Section>
      <Banner
        src={image.childImageSharp ? image.childImageSharp.fluid.src : image}
        title={heading}
        subTitle={subheading}
      />
    </Section>
    <Container>
      <Section>
        <Typography variant="h3" component="h2">
          {mainpitch.title}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {mainpitch.description}
        </Typography>
      </Section>
      <Section>
        <Typography variant="h3" component="h2">
          {heading}
        </Typography>
        <Typography paragraph>{description}</Typography>
        <Features gridItems={intro.blurbs} />
      </Section>
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};
IndexPageTemplate.defaultProps = {
  image: null,
  title: null,
  heading: null,
  subheading: null,
  mainpitch: null,
  description: null,
  intro: {
    blurbs: null,
  },
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
