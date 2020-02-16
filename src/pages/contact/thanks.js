import React, { useContext, useEffect } from 'react';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as GatsbyLink } from 'gatsby';
import SiteContext from '../../components/SiteContext';
import Box from '@material-ui/core/Box';
import ColorBlock from '../../components/ColorBlock';

export default () => {
  const { setNavbarSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'paper', textColor: 'dark' });
  }, []);

  return (
    <>
      <Box height="5rem" />
      <ColorBlock>
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
      </ColorBlock>
    </>
  );
}
