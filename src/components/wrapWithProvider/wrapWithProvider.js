import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../Layout/Layout';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import lefTheme from '../../theme';

let theme = createMuiTheme(lefTheme);
theme = responsiveFontSizes(theme);

const WrapWithProvider = ({ element }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>{element}</Layout>
    </ThemeProvider>
  </MuiThemeProvider>
);

WrapWithProvider.propTypes = {
  element: PropTypes.any,
};

WrapWithProvider.defaultProps = {
  element: undefined,
};

export default WrapWithProvider;
