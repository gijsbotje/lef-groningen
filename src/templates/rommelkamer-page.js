import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Container from '../components/Container';
import ColorBlock from '../components/ColorBlock';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import SiteContext from '../components/SiteContext';

const CssGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: ${props => props.theme.spacing(4)}px;
`;

export const RommelkamerPageTemplate = ({ title, intro, items }) => {
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'paper', textColor: 'dark' });
  }, []);

  return (
    <>
      <ColorBlock backgroundColor="white" equalPadding showScrollDown scrollToId="about-anchor">
        <Container>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.2rem' }}>
            {intro}
          </Typography>
        </Container>
      </ColorBlock>
      <ColorBlock
        id="about-anchor"
        fullHeight={false}
        backgroundColor="white"
        showScrollDown={false}
        elevation={0}
        equalPadding
        maxWidth="md"
        style={{
          marginTop: '-1rem',
          marginBottom: '-1rem',
          paddingTop: '0rem',
          paddingBottom: '0rem',
        }}
      >
        <CssGrid>
          {items.map(block => (
            <div style={{ gridColumnEnd: 'span 6' }} key={block.title}>
              <Card
                elevation={6}
                style={{
                  height: '100%',
                  backgroundColor: '#fff',
                  color: '#000',
                }}
              >
                <CardContent style={{ height: '100%' }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <Typography variant="h6" align="center">
                      {block.title}
                    </Typography>
                    <Typography paragraph align="center" style={{ fontSize: '1rem' }}>
                      {block.text}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </div>
          ))}
        </CssGrid>
      </ColorBlock>
    </>
  );
};

RommelkamerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  items: PropTypes.array,
};

RommelkamerPageTemplate.defaultProps = {
  intro: undefined,
  items: undefined,
};

const RommelkamerPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <RommelkamerPageTemplate
      title={frontmatter.title}
      intro={frontmatter.intro}
      items={frontmatter.items}
    />
  );
};

RommelkamerPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

RommelkamerPage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
};

export default RommelkamerPage;

export const aboutPageQuery = graphql`
  query rommelkamerPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "rommelkamer-page" } }) {
      frontmatter {
        title
        intro
        items {
          title
          text
          image
        }
      }
    }
  }
`;
