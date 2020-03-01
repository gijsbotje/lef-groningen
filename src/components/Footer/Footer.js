import React, { useContext, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '../Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import SiteContext from '../SiteContext';
import clsx from 'clsx';

const FooterBase = styled.footer`
  position: sticky;
  bottom: 0;
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.contrastText};
`;

const LightTextField = styled(TextField)`
  && {
    .MuiInputBase-root {
      color: #fff;
    }
    .MuiFormLabel-root {
      color: rgba(255, 255, 255, 0.54);
    }
    .MuiFilledInput-underline {
      background-color: rgba(0, 0, 0, 0.5);
    }
    .MuiFilledInput-underline:before {
      border-color: rgba(255, 255, 255, 0.42);
    }
    .MuiFilledInput-underline:hover:not(.Mui-disabled):before {
      border-color: rgba(255, 255, 255, 0.87);
    }
    .MuiFilledInput-underline:after {
      border-color: rgba(255, 255, 255, 1);
    }
  }
`;

const ColoredButton = styled(Button)`
  && {
    &.button-info {
      background-color: ${props => props.theme.palette.info.main};
      color: ${props => props.theme.palette.info.contrastText};
    }
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Footer = () => {
  const [fields, setFields] = useState({});
  const [showThanks, setShowThanks] = useState(false);
  const { footerSettings } = useContext(SiteContext);

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
      .then(() => setShowThanks(true))
      .catch(error => alert(error));
  };

  return (
    <>
      <FooterBase>
        <Container maxWidth="lg">
          <Typography variant="h6" gutterBottom>
            LEF Groningen
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1">Poelestraat 28a</Typography>
              <Typography variant="body1">9712KB Groningen</Typography>
              <Typography variant="body1">info@lefgroningen.nl</Typography>
              <Typography variant="body1">+31 6 13972693</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1">
                <Link color="inherit" href="mailto:info@lefgroningen.nl">
                  info@lefgroningen.nl
                </Link>
              </Typography>
              <Typography variant="body1">KvK: 76775291</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
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
                <LightTextField
                  variant="filled"
                  label="Naam"
                  name="name"
                  id="name"
                  type="text"
                  fullWidth
                  margin="dense"
                  onChange={handleChange}
                  required
                  color="secondary"
                />
                <LightTextField
                  variant="filled"
                  label="E-mail"
                  name="email"
                  id="email"
                  type="email"
                  fullWidth
                  margin="dense"
                  onChange={handleChange}
                  required
                  color="secondary"
                />
                <ColoredButton
                  type="submit"
                  variant="contained"
                  color={
                    ['default', 'inherit', 'primary', 'secondary'].includes(footerSettings.color)
                      ? footerSettings.color
                      : 'inherit'
                  }
                  size="large"
                  style={{ marginTop: '1rem' }}
                  className={clsx(`button-${footerSettings.color}`)}
                >
                  Neem contact op
                </ColoredButton>
              </form>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end" mt={2} mb="-1.5rem">
            <Typography color="inherit" style={{ marginLeft: 'auto' }}>
              LEF Groningen &copy;
            </Typography>
          </Box>
        </Container>
      </FooterBase>
      <Dialog open={showThanks}>
        <DialogTitle id="simple-dialog-title">Bericht verstuurd</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We hebben je bericht ontvangen en zullen zo snel mogelijk antwoorden.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={() => setShowThanks(false)}>
            Sluiten
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Footer;
