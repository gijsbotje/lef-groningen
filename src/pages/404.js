import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Typography from '@material-ui/core/Typography';

const NotFoundPage = () => (
  <Container>
    <Section>
      <Typography variant="h3" component="h1" gutterBottom>
        Pagina niet gevonden
      </Typography>
      <Typography paragraph>Oeps, deze pagina bestaat niet of is verwijderd.</Typography>
    </Section>
  </Container>
);

export default NotFoundPage;
