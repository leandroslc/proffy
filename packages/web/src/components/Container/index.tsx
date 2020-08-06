/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from 'theme-ui';
import * as styles from './styles';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container: FC = (props: ContainerProps) => {
  const { children, ...otherProps } = props;

  return (
    <div css={styles.container} {...otherProps}>
      {children}
    </div>
  );
};
