import { css } from '@emotion/core';
import { ThemeConfig } from '../../../theme';

export const input = (theme: ThemeConfig) => css`
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
