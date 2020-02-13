import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Section from '../../components/Section';
import Container from '../../components/Container';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Index = () => {
  const [isValidated, setIsValided] = useState(false);
  const [fields, setFields] = useState({});

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

  return (
    <Container>
      <Typography variant="h3" component="h1">
        Contact
      </Typography>
      <Section>
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label htmlFor="bot-field">
              Don’t fill this out: <input name="bot-field" id="bot-field" onChange={handleChange}/>
            </label>
          </div>
          <TextField
            variant="outlined"
            label="Naam"
            name="name"
            id="name"
            type="text"
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
          />
          <TextField
            variant="outlined"
            label="E-mail"
            name="email"
            id="email"
            type="email"
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
          />
          <TextField
            variant="outlined"
            label="Bericht"
            name="message"
            id="message"
            type="email"
            multiline
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
            rows={5}
          />
          <Button type="submit" variant="contained" color="secondary" size="large">
            Verstuur
          </Button>
        </form>
      </Section>
    </Container>
  );
};

export default Index;
