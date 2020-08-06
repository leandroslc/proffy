import { css, Interpolation } from '@emotion/core';
import { ThemeConfig, bq } from '../../theme';

const large = (innerCss: Interpolation) => css`
  @media (min-width: ${bq('md')}) {
    ${innerCss}
  }
`;

export const page = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: ${theme.colors.textInPrimary};
  background: ${theme.colors.primary};
`;

export const content = css`
  @media (min-width: ${bq('md')}) {
    display: grid;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    max-width: 1100px;
  }
`;

export const logoContainer = css`
  margin-bottom: 3.2rem;
  text-align: center;

  ${large(css`
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;
  `)}
`;

export const logoImg = css`
  height: 10rem;

  ${large(css`
    height: 100%;
  `)}
`;

export const logoText = css`
  margin-top: 0.8rem;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 4.6rem;

  ${large(css`
    font-size: 3.6rem;
    text-align: initial;
  `)}
`;

export const heroImg = css`
  width: 100%;

  ${large(css`
    grid-area: hero;
    justify-self: end;
  `)}
`;

export const buttons = css`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  ${large(css`
    grid-area: buttons;
    justify-content: flex-start;
  `)}

  & :first-child {
    margin-right: 1.6rem;
  }
`;

export const button = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 10.4rem;
  font: 700 2rem Archivo, sans-serif;
  color: ${theme.colors.buttonText};
  text-decoration: none;
  border-radius: 0.8rem;
  transition: background-color 0.2s;

  ${large(css`
    font-size: 2.4rem;
  `)}
`;

export const buttonIcon = css`
  width: 4rem;
  margin-right: 2.4rem;
`;

export const studyButton = (theme: ThemeConfig) => css`
  background: ${theme.colors.primaryLighter};

  &:hover,
  &:focus {
    background: ${theme.colors.primaryLight};
  }
`;

export const giveClassesButton = (theme: ThemeConfig) => css`
  background: ${theme.colors.secundary};

  &:hover,
  &:focus {
    background: ${theme.colors.secundaryDark};
  }
`;

export const totalConnections = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;

  ${large(css`
    grid-area: total;
    justify-self: end;
  `)}
`;

export const totalConnectionsIcon = css`
  margin-left: 0.8rem;
`;
