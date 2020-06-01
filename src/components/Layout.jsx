/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

// import Footer from "./Footer";
import SEO from "./SEO";
import theme from "../styles/theme.js";

// import "typeface-lora";
// import "typeface-source-sans-pro";

const globalStyle = css`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.primary};
    }
  }
  @media (max-width: ${theme.breakpoint.m}),
    (max-device-width: ${theme.breakpoint.m}) {
    html {
      font-size: 16px !important;
      h1 {
        font-size: 3.157rem;
      }
      h2 {
        font-size: 2.369rem;
      }
      h3 {
        font-size: 1.777rem;
      }
      h4 {
        font-size: 1.333rem;
      }
      h5 {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: ${theme.breakpoint.s}),
    (max-device-width: ${theme.breakpoint.s}) {
    html {
      h1 {
        font-size: 2.441rem;
      }
      h2 {
        font-size: 1.953rem;
      }
      h3 {
        font-size: 1.563rem;
      }
      h4 {
        font-size: 1.25rem;
      }
      h5 {
        font-size: 1rem;
      }
    }
  }
  body {
    color: ${theme.colors.text};
    background-color: ${theme.colors.bg};
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.text};
  }
  a {
    color: ${theme.colors.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${theme.colors.text};
    }
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyle} />
      <SEO />
      {children}
    </>
  </ThemeProvider>
);

export default Layout;