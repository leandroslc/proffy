import { css } from '@emotion/core';
import { ThemeConfig } from '../../../theme';

export const textarea = (theme: ThemeConfig) => css`
  width: 100%;
  height: 16rem;
  min-height: 8rem;
  padding: 1.2rem 1.6rem;
  margin-top: 0.8rem;
  font: 1.6rem Archivo, sans-serif;
  resize: vertical;
  background: ${theme.colors.inputBackground};
  border: 1px solid ${theme.colors.lineInWhite};
  border-radius: 0.8rem;
  outline: 0;
`;
