import React, { useState, useEffect } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import lefTheme from '../../theme';
import { jssPreset, StylesProvider } from '@material-ui/styles';
import { create } from 'jss';
import SiteContext from '../../components/SiteContext/SiteContext';

let theme = createMuiTheme(lefTheme);
theme = responsiveFontSizes(theme);

const StyleInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState(null);
  const [documentRef, setDocumentRef] = useState(null);
  const [ready, setReady] = useState(false);
  const [jss, setJss] = useState(null);
  const [sheetsManager, setSheetsManager] = useState(null);

  const [navbarSettings, setNavbarSettings] = useState({
    scrolledColor: 'paper',
    textColor: 'light',
  });
  const [footerSettings, setFooterSettings] = useState({
    color: 'secondary',
  });

  const handleRef = refParam => {
    const ownerDocument = refParam ? refParam.ownerDocument : null;
    setDocumentRef(ownerDocument);
  };

  useEffect(() => {
    setReady(true);
    setJss(
      create({
        ...jssPreset(),
        insertionPoint: documentRef ? documentRef.querySelector('#demo-frame-jss') : null,
      }),
    );
    setSheetsManager(new Map());
  }, [documentRef]);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <>
        <div id="demo-frame-jss" ref={handleRef} />
        {ready ? (
          <StylesProvider jss={jss} sheetsManager={sheetsManager}>
            <StyleSheetManager target={iframeRef}>
              <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <SiteContext.Provider
                    value={{ navbarSettings, setNavbarSettings, footerSettings, setFooterSettings }}
                  >
                    {children}
                  </SiteContext.Provider>
                </ThemeProvider>
              </MuiThemeProvider>
            </StyleSheetManager>
          </StylesProvider>
        ) : null}
      </>
    )
  );
};

class NewStyleInjector extends React.Component {
  state = {
    ready: false,
  };

  handleRef = ref => {
    const ownerDocument = ref ? ref.ownerDocument : null;
    this.setState({
      ready: true,
      jss: create({
        ...jssPreset(),
        insertionPoint: ownerDocument ? ownerDocument.querySelector('#demo-frame-jss') : null,
      }),
      sheetsManager: new Map(),
    });
  };

  render() {
    const { children } = this.props;
    const { ready, sheetsManager, jss } = this.state;

    return (
      <React.Fragment>
        <div id="demo-frame-jss" ref={this.handleRef} />
        {ready ? (
          <StylesProvider jss={jss} sheetsManager={sheetsManager}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {children}
            </ThemeProvider>
          </StylesProvider>
        ) : null}
      </React.Fragment>
    );
  }
}

export default function withStyleInjections(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}
