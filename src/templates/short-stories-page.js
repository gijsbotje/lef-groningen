import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section';
import ColorBlock from '../components/ColorBlock';
import SiteContext from '../components/SiteContext';
import BlogRoll from '../components/BlogRoll/BlogRoll';

export const ShortStoriesTemplate = ({ title, background }) => {
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'primary', textColor: 'light' });
  }, []);

  return (
    <>
      <ColorBlock
        backgroundColor="blue"
        scrollToId={title.toLowerCase().replace(/ /g, '-')}
        backgroundImage={background.childImageSharp.fluid.src}
      >
        <Section>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {title}
          </Typography>
        </Section>
      </ColorBlock>
      <ColorBlock backgroundColor="white" maxWidth="lg" id={title.toLowerCase().replace(/ /g, '-')}>
        <BlogRoll />
      </ColorBlock>
    </>
  );
};

ShortStoriesTemplate.propTypes = {
  title: PropTypes.string,
  background: PropTypes.object,
};
ShortStoriesTemplate.defaultProps = {
  title: undefined,
  background: undefined,
};

const ShortStoriesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return <ShortStoriesTemplate title={frontmatter.title} background={frontmatter.background} />;
};

ShortStoriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

ShortStoriesPage.defaultProps = {
  data: {},
};

export default ShortStoriesPage;

export const ShortStoriesQuery = graphql`
  query ShortStoriesQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "short-stories-page" } }) {
      frontmatter {
        title
        background {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
