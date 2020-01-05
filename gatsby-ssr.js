import React from 'react';
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/styles';
import {
  ServerStyleSheet as StyledComponentsServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
import CleanCSS from 'clean-css';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import stylesProviderProps from './.cache/styles-provider-props';
import { hasEntries } from './utils';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import lefTheme from './src/theme';

let theme = createMuiTheme(lefTheme);
theme = responsiveFontSizes(theme);

const autoprefixStyles = (css, pathname) => {
  const prefixer = postcss([autoprefixer]);

  try {
    return prefixer.process(css, { from: undefined }).css;
  } catch (error) {
    if (error.name === `CssSyntaxError`) {
      throw new Error(`Pathname: ${pathname} ${error.toString()}`);
    }
    throw error;
  }
};

// Keep track of sheets for each page
const globalLeak = new Map();
const sheetByPathname = new Map();
const cleanCSS = new CleanCSS();

export const wrapRootElement = ({ element, pathname }, pluginOptions) => {
  if (hasEntries(stylesProviderProps) && pluginOptions.stylesProvider) {
    throw new Error(
      `You specified both pathToStylesProvider and stylesProvider in gatsby-config.js. Remove one of them.`,
    );
  }

  const stylesProvider = hasEntries(stylesProviderProps)
    ? stylesProviderProps
    : pluginOptions.stylesProvider;

  const muiSheets = new MuiServerStyleSheets(stylesProvider);
  globalLeak.set(pathname, muiSheets);

  const scSheet = new StyledComponentsServerStyleSheet();
  sheetByPathname.set(pathname, scSheet);

  return (
    <StyleSheetManager sheet={scSheet.instance}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {muiSheets.collect(element)}
        </ThemeProvider>
      </MuiThemeProvider>
    </StyleSheetManager>
  );
};

export const onRenderBody = (
  { setHeadComponents, pathname },
  { disableAutoprefixing = false, disableMinification = false },
) => {
  const muiSheets = globalLeak.get(pathname);

  if (!muiSheets) {
    return;
  }

  let css = muiSheets.toString();

  css = disableAutoprefixing ? css : autoprefixStyles(css, pathname);
  css = disableMinification ? css : cleanCSS.minify(css).styles;

  const scSheet = sheetByPathname.get(pathname);

  setHeadComponents([
    <style id="jss-server-side" key="jss-server-side" dangerouslySetInnerHTML={{ __html: css }} />,
    scSheet.getStyleElement(),
  ]);
  sheetByPathname.delete(pathname);

  globalLeak.delete(pathname);
};
