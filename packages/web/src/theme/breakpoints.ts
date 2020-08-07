import { css, Interpolation, SerializedStyles } from '@emotion/core';

type Size = 'xs' | 'sm' | 'md' | 'lg';

const breakpoints: Record<Size, string> = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

const greaterThan = (size: Size) => (
  ...args: Interpolation[]
): SerializedStyles => css`
  @media (min-width: ${breakpoints[size]}) {
    ${css(...args)}
  }
`;

export const bq = {
  greaterThan,
};
