import React from 'react';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as GatsbyLink } from 'gatsby';

export default () => (
  <Container>
    <Section>
      <Typography variant="h3" component="h1">
        Bericht verstuurd
      </Typography>
      <Typography paragraph style={{ fontSize: '1.5rem' }}>
        We hebben je bericht ontvangen en zullen zo snel mogelijk antwoorden.
      </Typography>
      <Button component={GatsbyLink} to="/" variant="outlined" color="primary">
        Terug
      </Button>
    </Section>
  </Container>
);
