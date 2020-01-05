import React from 'react';
import PropTypes from 'prop-types';
import Layout from './src/components/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import lefTheme from './src/theme';

let theme = createMuiTheme(lefTheme);
theme = responsiveFontSizes(theme);

export const wrapPageElement = ({ element, props }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  </MuiThemeProvider>
);

wrapPageElement.propTypes = {
  element: PropTypes.object,
  props: PropTypes.object,
};

wrapPageElement.defaultProps = {
  element: undefined,
  props: {},
};

export default wrapPageElement;
