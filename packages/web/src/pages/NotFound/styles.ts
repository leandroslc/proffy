import { css } from '@emotion/core';
import { ThemeConfig } from '../../theme';

export const page = (theme: ThemeConfig) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: ${theme.colors.textInPrimary};
  background: ${theme.colors.primary};
`;

export const title = css`
  margin-bottom: 1rem;
  font: 500 2.8rem Poppins, sans-serif;
`;

export const text = css`
  font: 500 2rem Archivo, sans-serif;
`;

export const link = (theme: ThemeConfig) => css`
  color: ${theme.colors.textInPrimary};
  text-decoration: none;
  border-bottom: 1px solid currentColor;
`;
