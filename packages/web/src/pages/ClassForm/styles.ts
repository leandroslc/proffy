import { css } from '@emotion/core';
import { ThemeConfig, bq } from '../../theme';

export const page = css`
  width: 100vw;
  height: 100vh;
`;

export const pageHeaderContent = css`
  margin-bottom: 6.4rem;

  ${bq.greaterThan('sm')(css`
    margin-bottom: 0;
  `)}
`;

export const main = (theme: ThemeConfig) => css`
  width: 100%;
  max-width: 74rem;
  padding-top: 6.4rem;
  margin: -3.2rem auto 3.2rem;
  overflow: hidden;
  background: ${theme.colors.boxBase};
  border-radius: 0.8rem;
`;

export const fieldset = css`
  padding: 0 2.4rem;
  border: 0;

  & + & {
    margin-top: 6.4rem;
  }

  ${bq.greaterThan('sm')(css`
    padding: 0 6.4rem;
  `)}
`;

export const legend = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1.6rem;
  margin-bottom: 2.4rem;
  font: 700 2.4rem Archivo, sans-serif;
  color: ${theme.colors.textTitle};
  border-bottom: 1px solid ${theme.colors.lineInWhite};
`;

export const legendButton = (theme: ThemeConfig) => css`
  font: 700 1.6rem Archivo, sans-serif;
  color: ${theme.colors.primary};
  cursor: pointer;
  background: none;
  border: none;
  transition: color 0.2s;

  &:hover,
  &:focus {
    color: ${theme.colors.primaryDarker};
  }
`;

export const scheduleItem = css`
  ${bq.greaterThan('sm')(css`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.4rem;
  `)}
`;

export const footer = (theme: ThemeConfig) => css`
  padding: 4rem 2.4rem;
  margin-top: 6.4rem;
  background: ${theme.colors.boxFooter};
  border-top: 1px solid ${theme.colors.lineInWhite};

  ${bq.greaterThan('sm')(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 6.4rem;
  `)}
`;

export const footerText = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${theme.colors.textComplement};

  ${bq.greaterThan('sm')(css`
    justify-content: space-between;
  `)}
`;

export const footerIcon = css`
  margin-right: 2rem;
`;

export const button = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.6rem;
  margin-top: 3.2rem;
  font: 700 1.6rem Archivo, sans-serif;
  color: ${theme.colors.buttonText};
  text-decoration: none;
  cursor: pointer;
  background: ${theme.colors.secundary};
  border: 0;
  border-radius: 0.8rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${theme.colors.secundaryDark};
  }

  ${bq.greaterThan('sm')(css`
    width: 20rem;
    margin-top: 0;
  `)}
`;

export const inputLabel = (theme: ThemeConfig) => css`
  color: ${theme.colors.textComplement};
`;
