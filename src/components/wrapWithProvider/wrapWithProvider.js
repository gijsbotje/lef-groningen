import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../Layout/Layout';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import lefTheme from '../../theme';
import { AnimatePresence, motion } from 'framer-motion';

let theme = createTheme(lefTheme);
theme = responsiveFontSizes(theme);

const duration = 0.25;

const variants = {
  initial: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      duration,
      when: 'beforeChildren',
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transform: 'translatey(5px)',
    transition: {
      duration,
      ease: 'easeOut',
    },
  },
};

const WrapWithProvider = ({ element, props: { location } }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {element}
          </motion.main>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  </MuiThemeProvider>
);

WrapWithProvider.propTypes = {
  element: PropTypes.any,
  props: PropTypes.object,
};

WrapWithProvider.defaultProps = {
  element: undefined,
  props: undefined,
};

export default WrapWithProvider;
