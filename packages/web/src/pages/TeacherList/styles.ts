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
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 16px;
    align-items: flex-end;
  `)}
`;

export const inputLabel = (theme: ThemeConfig) => css`
  color: ${theme.colors.textInPrimary};
`;

export const classList = css`
  width: 90%;
  margin: 3.2rem auto;

  ${bq.greaterThan('sm')(css`
    max-width: 740px;
    padding: 3.2rem 0;
    margin: 0 auto;
  `)}
`;

export const searchButton = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.6rem;
  margin-top: 2.4rem;
  color: ${theme.colors.buttonText};
  cursor: pointer;
  background: ${theme.colors.secundary};
  border: none;
  border-radius: 0.8rem;
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background: ${theme.colors.secundaryDark};
  }

  ${bq.greaterThan('sm')(css`
    margin-top: 0;
  `)}
`;

export const searchButtonText = css`
  margin-left: 0.8rem;
`;
