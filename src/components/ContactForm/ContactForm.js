import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ContactForm = ({ handleSubmit, handleChange }) => {
  return (
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
          Don’t fill this out:{' '}
          <input name="bot-field" id="bot-field" onChange={handleChange} />
        </label>
      </div>
      <TextField
        variant="filled"
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
        variant="filled"
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
        variant="filled"
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
  );
};

ContactForm.propTypes = {};

ContactForm.defaultProps = {};

export default ContactForm;