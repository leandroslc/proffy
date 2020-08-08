import { css } from '@emotion/core';
import { ThemeConfig, bq } from '.';

export default (theme: ThemeConfig) => css`
  :root {
    font-size: 60%;

    ${bq.greaterThan('sm')(css`
      font-size: 62.5%;
    `)}
  }

  * {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100vh;
  }

  body {
    height: 100vh;
    background: ${theme.colors.background};
  }

  #root {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 100vh;
  }

  body,
  input,
  button,
  text-area {
    font: 500 1.6rem Poppins, sans-serif;
    color: ${theme.colors.textBase};
  }
`;
