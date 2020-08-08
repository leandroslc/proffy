import { css } from '@emotion/core';
import { ThemeConfig, bq } from '../../theme';

export const page = css`
  width: 100vw;
  height: 100vh;

  ${bq.greaterThan('sm')(css`
    max-width: 100%;
  `)}
`;

export const searchForm = css`
  margin-top: 3.2rem;

  ${bq.greaterThan('sm')(css`
    position: absolute;
    bottom: -28px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 16px;
  `)}
`;

export const searchFormLabel = (theme: ThemeConfig) => css`
  color: ${theme.colors.textInPrimary};
`;

export const inputBlock = (theme: ThemeConfig) => css`
  position: relative;

  & + & {
    margin-top: 1.4rem;

    ${bq.greaterThan('sm')(css`
      margin-top: 0;
    `)}
  }

  &:focus-within::after {
    position: absolute;
    right: 1.6rem;
    bottom: 0;
    left: 1.6rem;
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${theme.colors.primaryLight};
  }
`;

export const inputBlockLabel = (theme: ThemeConfig) => css`
  ${searchFormLabel(theme)}

  font-size: 1.4rem;
`;

export const inputBlockInput = (theme: ThemeConfig) => css`
  width: 100%;
  height: 5.6rem;
  padding: 0 1.6rem;
  margin-top: 0.8rem;
  font: 1.6rem Archivo, sans-serif;
  background: ${theme.colors.inputBackground};
  border: 1px solid ${theme.colors.lineInWhite};
  border-radius: 0.8rem;
  outline: 0;
`;

export const teacherList = css`
  width: 90%;
  margin: 3.2rem auto;

  ${bq.greaterThan('sm')(css`
    max-width: 740px;
    padding: 3.2rem 0;
    margin: 0 auto;
  `)}
`;
