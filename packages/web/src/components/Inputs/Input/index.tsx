/** @jsx jsx */
import { jsx } from 'theme-ui';
import { InputHTMLAttributes } from 'react';
import { InputBlock, InputBaseProps } from '../InputBlock';
import * as styles from './styles';

type InputProps = InputBaseProps<InputHTMLAttributes<HTMLInputElement>>;

export const Input = (props: InputProps) => {
  const {
    name,
    label,
    labelStyle,
    inline = false,
    marginTop,
    lineBottomPosition,
    ...otherProps
  } = props;

  return (
    <InputBlock
      name={name}
      label={label}
      labelStyle={labelStyle}
      inline={inline}
      marginTop={marginTop}
      lineBottomPosition={lineBottomPosition}
    >
      <input css={styles.input} id={name} {...otherProps} />
    </InputBlock>
  );
};
