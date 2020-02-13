import React from 'react';
import BlogRoll from '../../components/BlogRoll';
import Typography from '@material-ui/core/Typography';
import ColorBlock from '../../components/ColorBlock';

const BlogIndexPage = () => (
  <ColorBlock backgroundColor="white" maxWidth="lg">
    <Typography variant="h3" component="h1" gutterBottom>
      Short stories
    </Typography>
    <BlogRoll />
  </ColorBlock>
);

export default BlogIndexPage;
