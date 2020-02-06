import React from 'react';
import BlogRoll from '../../components/BlogRoll';
import Container from '../../components/Container';
import Typography from '@material-ui/core/Typography';

const BlogIndexPage = () => (
  <Container maxWidth="lg">
    <Typography variant="h3" component="h1" gutterBottom>
      Short stories
    </Typography>
    <BlogRoll />
  </Container>
);

export default BlogIndexPage;
