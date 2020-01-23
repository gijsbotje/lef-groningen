import React from 'react';
import PropTypes from 'prop-types';
import { StylesProvider } from '@material-ui/styles';
import { hasEntries } from './utils';
import stylesProviderProps from './.cache/styles-provider-props';
import wrapWithProvider from './src/components/wrapWithProvider';

export const onInitialClientRender = () => {
  if (process.env.BUILD_STAGE === `develop`) {
    return;
  }

  // Remove the server-side injected CSS.
  const jssStyles = document.querySelector(`#jss-server-side`);
  if (jssStyles) {
    jssStyles.parentNode.removeChild(jssStyles);
  }
};

export const wrapRootElement = ({ element }, pluginOptions) => {
  if (hasEntries(stylesProviderProps) && pluginOptions.stylesProvider) {
    throw new Error(
      `You specified both pathToStylesProvider and stylesProvider in gatsby-config.js. Remove one of them.`,
    );
  }

  const stylesProvider = hasEntries(stylesProviderProps)
    ? stylesProviderProps
    : pluginOptions.stylesProvider;

  if (!stylesProvider) {
    return element;
  }

  return <StylesProvider {...stylesProvider}>{element}</StylesProvider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.elementType,
};

wrapRootElement.defaultProps = {
  element: undefined,
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

const transitionDelay = 250;

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), transitionDelay);
  }
  return false;
};

export default wrapPageElement;
