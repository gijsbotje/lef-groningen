import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content/Content';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { navigate } from 'gatsby-link';
import Chip from '@material-ui/core/Chip';
import Section from '../components/Section';
import ColorBlock from '../components/ColorBlock';
import SiteContext from '../components/SiteContext';

export const CasePostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  featuredimage,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <ColorBlock
        backgroundColor="yellow"
        maxWidth="lg"
        id={title.toLowerCase().replace(/ /g, '-')}
        backgroundImage={featuredimage?.childImageSharp?.fluid.src}
        minHeight="50vh"
      >
        <Section>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {title}
          </Typography>
        </Section>
      </ColorBlock>
      <ColorBlock backgroundColor="white" maxWidth="lg" fullHeight={false}>
        {helmet || ''}
        <PostContent content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <Typography variant="subtitle1" component="div">
              Tags
            </Typography>
            <Grid container spacing={1}>
              {tags.map(tag => (
                <Grid key={`${tag}tag`} item>
                  <Chip label={tag} onClick={() => navigate(`/tags/${kebabCase(tag)}/`)} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : null}
      </ColorBlock>
    </>
  );
};

CasePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  featuredimage: PropTypes.object,
  helmet: PropTypes.object,
  tags: PropTypes.array,
};
CasePostTemplate.defaultProps = {
  contentComponent: undefined,
  title: '',
  featuredimage: undefined,
  helmet: undefined,
  tags: [],
};

const CasePost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'paper', textColor: 'dark' });
  }, []);

  return (
    <CasePostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${post.frontmatter.title}`}</title>
          <meta name="description" content={`${post.frontmatter.description}`} />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      featuredimage={post.frontmatter.featuredimage}
    />
  );
};

CasePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

CasePost.defaultProps = {
  data: {},
};

export default CasePost;

export const pageQuery = graphql`
  query CasePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tags
      }
    }
  }
`;
