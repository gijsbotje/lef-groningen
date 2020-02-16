import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby-link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Section from '../../components/Section';
import Container from '../../components/Container';
import SiteContext from '../../components/SiteContext';
import { useStaticQuery, graphql } from 'gatsby';
import ColorBlock from '../../components/ColorBlock';
import ContactForm from '../../components/ContactForm';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Index = () => {
  const [isValidated, setIsValided] = useState(false);
  const [fields, setFields] = useState({});
  const { setNavbarSettings } = useContext(SiteContext);

  const data = useStaticQuery(graphql`
    query contactPage {
      file(relativePath: { eq: "yellow-phone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const handleChange = e => {
    setFields({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...fields,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'paper', textColor: 'dark' });
  }, []);

  return (
    <>
      <ColorBlock backgroundColor="yellow" backgroundImage={data.file.childImageSharp.fluid.src}>
        <Typography variant="h3" component="h1" align="center">
          WERKEN MET LEF
        </Typography>
      </ColorBlock>
      <Container>
        <Section>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" component="div" gutterBottom>
                LEF Groningen
              </Typography>
              <Typography>LEF Groningen</Typography>
              <Typography>Poelestraat 28A</Typography>
              <Typography gutterBottom>9712 KB Groningen</Typography>
              <Typography component={Link} href="mailto:info@lefgroningen.nl" target="_blank">
                info@lefgroningen.nl
              </Typography>
              <br />
              <Typography component={Link} href="tel:06 13 97 26 93" target="_blank">
                06 13 97 26 93
              </Typography>
              <br />
              <Link href="https://linkedin.com" target="_blank">
                <FontAwesomeIcon icon="linkedIn" /> LinkedIn
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                Contactformulier
              </Typography>
              <ContactForm handleChange={handleChange} handleSubmit={handleSubmit} />
            </Grid>
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Index;
