import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Typography from '@material-ui/core/Typography';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Container>
    <Section>
      <Helmet title={`Tags | ${title}`} />
      <Typography variant="h3" component="h1">
        Tags
      </Typography>
      <ul className="taglist">
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  </Container>
);

TagsPage.propTypes = {
  data: PropTypes.object,
};

TagsPage.defaultProps = {
  data: undefined,
};

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
