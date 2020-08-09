import { css } from '@emotion/core';
import { ThemeConfig, bq } from '../../theme';

export const inputBlock = (theme: ThemeConfig) => css`
  position: relative;

  & + & {
    margin-top: 1.4rem;
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

export const inlineInputBlock = css`
  & + & {
    ${bq.greaterThan('sm')(css`
      margin-top: 0;
    `)}
  }
`;

export const inputBlockLabel = (theme: ThemeConfig) => css`
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
