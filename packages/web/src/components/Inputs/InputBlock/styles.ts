import { css } from '@emotion/core';
import { ThemeConfig, bq } from '../../../theme';

export const container = (
  theme: ThemeConfig,
  lineBottomPosition: number,
  marginTop = 1.4,
) => css`
  position: relative;

  ${marginTop &&
  css`
    margin-top: ${marginTop}rem;
  `}

  &:focus-within::after {
    position: absolute;
    right: 1.6rem;
    bottom: ${lineBottomPosition}px;
    left: 1.6rem;
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${theme.colors.primaryLight};
  }
`;

export const inline = css`
  & + & {
    ${bq.greaterThan('sm')(css`
      margin-top: 0;
    `)}
  }
`;

export const label = css`
  font-size: 1.4rem;
`;
