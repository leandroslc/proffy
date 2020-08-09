import { css } from '@emotion/core';
import { ThemeConfig, bq } from '../../theme';

export const header = (theme: ThemeConfig) => css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primary};

  ${bq.greaterThan('sm')(css`
    height: 340px;
  `)}
`;

export const headerContent = css`
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin: 3.2rem auto;

  ${bq.greaterThan('sm')(css`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 740px;
    padding-bottom: 48px;
    margin: 0 auto;
  `)}
`;

export const headerContentTitle = (theme: ThemeConfig) => css`
  font: 700 3.6rem Archivo, sans-serif;
  line-height: 4.2rem;
  color: ${theme.colors.titleInPrimary};

  ${bq.greaterThan('sm')(css`
    max-width: 350px;
  `)}
`;

export const headerContentDescription = (theme: ThemeConfig) => css`
  max-width: 30rem;
  margin-top: 2.4rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${theme.colors.titleInPrimary};

  ${bq.greaterThan('sm')(css`
    max-width: 350px;
  `)}
`;

export const topBar = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 1.6rem 0;
  margin: 0 auto;
  color: ${theme.colors.textInPrimary};

  ${bq.greaterThan('sm')(css`
    max-width: 1100px;
  `)}
`;

export const topBarLink = css`
  height: 3.2rem;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 0.6;
  }
`;

export const topBarLogo = css`
  height: 1.6rem;
`;
