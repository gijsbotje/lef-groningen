import React, { useContext, useEffect, useState } from 'react';
import { navigate } from 'gatsby-link';
import Typography from '@material-ui/core/Typography';
import Section from '../../components/Section';
import Container from '../../components/Container';
import SiteContext from '../../components/SiteContext';
import { graphql, useStaticQuery } from 'gatsby';
import ColorBlock from '../../components/ColorBlock';
import ContactForm from '../../components/ContactForm';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Index = () => {
  const [fields, setFields] = useState({});
  const { setNavbarSettings } = useContext(SiteContext);

  const data = useStaticQuery(graphql`
    query contactPage {
      file(relativePath: { eq: "yellow-phone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const handleChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
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
      <Helmet>
        <title>LEF Groningen - Bel of mail met LEF</title>
        <meta
          name="description"
          content="Benieuwd wat we voor jou kunnen bedenken? Bel met ons of stuur een email. Vul het contact formulier in en we zullen zo snel mogelijk contact met je op."
        />
      </Helmet>
      <ColorBlock
        backgroundColor="yellow"
        backgroundPosition="center bottom"
        backgroundImage={{ image: data.file, ...data.file }}
      />
      <Container>
        <Section>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" component="div" gutterBottom>
                LEF Groningen
              </Typography>
              <Typography>LEF Groningen</Typography>
              <Typography>Poelestraat 28A</Typography>
              <Typography gutterBottom>9712 KB Groningen</Typography>
              <Typography
                component={Link}
                title="Mail met LEF"
                href="mailto:info@lefgroningen.nl"
                target="_blank"
              >
                info@lefgroningen.nl
              </Typography>
              <br />
              <Typography
                component={Link}
                title="Bel met LEF"
                href="tel:06 13 97 26 93"
                target="_blank"
              >
                06 13 97 26 93
              </Typography>
              <br />
              <Link href="https://linkedin.com" title="LEF op LinkedIn" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
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
