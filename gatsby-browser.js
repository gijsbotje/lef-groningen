// import React from 'react';
// import PropTypes from 'prop-types';
// import Layout from './src/components/Layout';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import {
//   createMuiTheme,
//   ThemeProvider as MuiThemeProvider,
//   responsiveFontSizes,
// } from '@material-ui/core/styles';
// import { StylesProvider } from '@material-ui/styles';
// import { ThemeProvider } from 'styled-components';
// import lefTheme from './src/theme';
// import { hasEntries } from './utils';
// import stylesProviderProps from './.cache/styles-provider-props';
//
// let theme = createMuiTheme(lefTheme);
// theme = responsiveFontSizes(theme);
//
// export const onInitialClientRender = () => {
//   if (process.env.BUILD_STAGE === `develop`) {
//     return;
//   }
//
//   // Remove the server-side injected CSS.
//   const jssStyles = document.querySelector(`#jss-server-side`);
//   if (jssStyles) {
//     jssStyles.parentNode.removeChild(jssStyles);
//   }
// };
//
// export const wrapRootElement = ({ element }, pluginOptions) => {
//   if (hasEntries(stylesProviderProps) && pluginOptions.stylesProvider) {
//     throw new Error(
//       `You specified both pathToStylesProvider and stylesProvider in gatsby-config.js. Remove one of them.`,
//     );
//   }
//
//   const stylesProvider = hasEntries(stylesProviderProps)
//     ? stylesProviderProps
//     : pluginOptions.stylesProvider;
//
//   if (!stylesProvider) {
//     return element;
//   }
//
//   return <StylesProvider {...stylesProvider}>{element}</StylesProvider>;
// };
//
// wrapRootElement.propTypes = {
//   element: PropTypes.elementType,
// };
//
// wrapRootElement.defaultProps = {
//   element: undefined,
// };
//
// export const wrapPageElement = ({ element, props }) => (
//   <MuiThemeProvider theme={theme}>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Layout {...props}>{element}</Layout>
//     </ThemeProvider>
//   </MuiThemeProvider>
// );
//
// wrapPageElement.propTypes = {
//   element: PropTypes.object,
//   props: PropTypes.object,
// };
//
// wrapPageElement.defaultProps = {
//   element: undefined,
//   props: {},
// };
//
// export default wrapPageElement;

import wrapWithProvider from './src/components/wrapWithProvider/wrapWithProvider';

export const wrapRootElement = wrapWithProvider;

export default wrapRootElement;
