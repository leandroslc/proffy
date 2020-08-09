/** @jsx jsx */
import { jsx } from 'theme-ui';
import { InputHTMLAttributes } from 'react';
import { Interpolation } from '@emotion/core';
import { ThemeConfig } from '../../theme';
import * as styles from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  inline?: boolean;
  labelStyle?: (theme: ThemeConfig) => Interpolation;
}

export const Input = (props: InputProps) => {
  const { name, label, labelStyle, inline = false, ...otherProps } = props;

  return (
    <div
      css={(theme) => [
        styles.inputBlock(theme),
        inline ? styles.inlineInputBlock : {},
      ]}
    >
      <label
        css={(theme) => [
          styles.inputBlockLabel(theme),
          labelStyle ? labelStyle(theme) : {},
        ]}
        htmlFor={name}
      >
        {label}
      </label>
      <input css={styles.inputBlockInput} id={name} {...otherProps} />
    </div>
  );
};
