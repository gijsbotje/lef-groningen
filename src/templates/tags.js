import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Container from '../components/Container';
import Typography from '@material-ui/core/Typography';

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ));
  const { tag } = pageContext;
  const { title } = data.site.siteMetadata;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with “${tag}”`;

  return (
    <Container>
      <Helmet title={`${tag} | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1" style={{ marginBottom: '6rem' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {tagHeader}
            </Typography>
            <ul className="taglist">{postLinks}</ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

TagRoute.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

TagRoute.defaultProps = {
  data: undefined,
  pageContext: undefined,
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
