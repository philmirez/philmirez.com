import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Page } from 'layout/style';
import { theme } from 'core/theme';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: hidden !important;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Page>{children}</Page>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
