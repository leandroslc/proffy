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

export const inputLabel = (theme: ThemeConfig) => css`
  color: ${theme.colors.textInPrimary};
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
