// /*
//   do this shit
//   https://github.com/bluepeter/gatsby-material-ui-business-starter/blob/master/src/utils/getPageContext.js
//  */
//
//
//
//
import React from 'react';
import PropTypes from 'prop-types'
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/styles';
import {
  ServerStyleSheet as StyledComponentsServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
import stylesProviderProps from './.cache/styles-provider-props';
import { hasEntries } from './utils';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import lefTheme from './src/theme';
import Layout from './src/components/Layout';
import wrapWithProvider from './src/components/wrapWithProvider';

let theme = createMuiTheme(lefTheme);
theme = responsiveFontSizes(theme);

// Keep track of sheets for each page
const globalLeak = new Map();
const sheetByPathname = new Map();

export const wrapRootElement = ({ element, pathname }, pluginOptions) => {
  if (hasEntries(stylesProviderProps) && pluginOptions.stylesProvider) {
    throw new Error(
      `You specified both pathToStylesProvider and stylesProvider in gatsby-config.js. Remove one of them.`,
    );
  }

  const stylesProvider = { injectFirst: true };

  const muiSheets = new MuiServerStyleSheets(stylesProvider);
  globalLeak.set(pathname, muiSheets);

  const scSheet = new StyledComponentsServerStyleSheet();
  sheetByPathname.set(pathname, scSheet);

  return (
    <StyleSheetManager sheet={scSheet.instance}>{muiSheets.collect(element)}</StyleSheetManager>
  );
};

export const wrapPageElement = wrapWithProvider;

wrapPageElement.propTypes = {
  element: PropTypes.object,
  props: PropTypes.object,
};

wrapPageElement.defaultProps = {
  element: undefined,
  props: {},
};

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const muiSheets = globalLeak.get(pathname);

  if (!muiSheets) {
    return;
  }

  const scSheet = sheetByPathname.get(pathname);

  const css = muiSheets.toString();

  setHeadComponents([
    // eslint-disable-next-line react/no-danger
    <style
      type="text/css"
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{ __html: css }}
    />,
    scSheet.getStyleElement(),
  ]);
  sheetByPathname.delete(pathname);

  globalLeak.delete(pathname);
};

// import wrapWithProvider from './src/components/wrapWithProvider/wrapWithProvider';
//
// export const wrapRootElement = wrapWithProvider;
//
// export default wrapRootElement;
