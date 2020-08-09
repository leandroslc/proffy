import { css } from '@emotion/core';
import { ThemeConfig, bq } from '../../theme';

export const container = (theme: ThemeConfig) => css`
  margin-top: 2.4rem;
  overflow: hidden;
  background: ${theme.colors.boxBase};
  border: 1px solid ${theme.colors.lineInWhite};
  border-radius: 0.8rem;
`;

export const header = css`
  display: flex;
  align-items: center;
  padding: 3.2rem 2rem;

  ${bq.greaterThan('sm')(css`
    padding: 3.2rem;
  `)}
`;

export const headerPhoto = css`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

export const headerTitle = css`
  margin-left: 2.4rem;
`;

export const headerName = (theme: ThemeConfig) => css`
  display: block;
  font: 700 2.4rem Archivo, sans-serif;
  color: ${theme.colors.textTitle};
`;

export const headerSubject = css`
  display: block;
  margin-top: 0.4rem;
  font-size: 1.6rem;
`;

export const description = css`
  padding: 2.4rem;
  font-size: 1.6rem;
  line-height: 2.8rem;

  ${bq.greaterThan('sm')(css`
    padding: 0 3.2rem;
  `)}
`;

export const footer = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 2rem;
  margin-top: 3.2rem;
  background: ${theme.colors.boxFooter};
  border-top: 1px solid ${theme.colors.lineInWhite};

  ${bq.greaterThan('sm')(css`
    padding: 3.2rem;
  `)}
`;

export const footerValue = (theme: ThemeConfig) => css`
  display: block;
  font-size: 1.6rem;
  color: ${theme.colors.primary};

  ${bq.greaterThan('sm')(css`
    display: initial;
    margin-left: 1.6rem;
  `)}
`;

export const button = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20rem;
  height: 5.6rem;
  font: 700 1.4rem Archivo, sans-serif;
  color: ${theme.colors.buttonText};
  text-decoration: none;
  cursor: pointer;
  background: ${theme.colors.secundary};
  border: 0;
  border-radius: 0.8rem;
  transition: 0.2s;

  &:hover,
  &:focus {
    background: ${theme.colors.secundaryDark};
  }

  ${bq.greaterThan('sm')(css`
    justify-content: center;
    width: 24.5rem;
    font-size: 1.6rem;
  `)}
`;

export const buttonIcon = css`
  ${bq.greaterThan('sm')(css`
    margin-right: 1.6rem;
  `)}
`;
