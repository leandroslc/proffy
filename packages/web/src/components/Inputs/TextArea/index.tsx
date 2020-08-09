/** @jsx jsx */
import { jsx } from 'theme-ui';
import { TextareaHTMLAttributes } from 'react';
import { InputBlock, InputBaseProps } from '../InputBlock';
import * as styles from './styles';

type TextAreaProps = InputBaseProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>
>;

export const TextArea = (props: TextAreaProps) => {
  const {
    name,
    label,
    labelStyle,
    inline,
    marginTop,
    lineBottomPosition = 7,
    ...otherProps
  } = props;

  return (
    <InputBlock
      name={name}
      label={label}
      labelStyle={labelStyle}
      inline={inline}
      lineBottomPosition={lineBottomPosition}
      marginTop={marginTop}
    >
      <textarea css={styles.textarea} id={name} {...otherProps} />
    </InputBlock>
  );
};
