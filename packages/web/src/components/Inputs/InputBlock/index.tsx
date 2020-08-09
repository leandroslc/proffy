/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { Interpolation } from '@emotion/core';
import { ThemeConfig } from '../../../theme';
import * as styles from './styles';

interface BaseProps {
  name: string;
  label: string;
  inline?: boolean;
  lineBottomPosition?: number;
  marginTop?: number;
  labelStyle?: (theme: ThemeConfig) => Interpolation;
}

type InputBlockProps = PropsWithChildren<BaseProps>;

export type InputBaseProps<T> = BaseProps & T;

export const InputBlock = (props: InputBlockProps) => {
  const {
    name,
    label,
    children,
    labelStyle,
    inline = false,
    lineBottomPosition = 0,
    marginTop,
  } = props;

  return (
    <div
      css={(theme) => [
        styles.container(theme, lineBottomPosition, marginTop),
        inline ? styles.inline : {},
      ]}
    >
      <label
        css={(theme) => [styles.label, labelStyle ? labelStyle(theme) : {}]}
        htmlFor={name}
      >
        {label}
      </label>
      {children}
    </div>
  );
};
