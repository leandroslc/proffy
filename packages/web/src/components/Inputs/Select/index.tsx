/** @jsx jsx */
import { jsx } from 'theme-ui';
import { SelectHTMLAttributes } from 'react';
import { InputBlock, InputBaseProps } from '../InputBlock';
import * as styles from './styles';

type SelectProps = InputBaseProps<
  {
    options?: Array<{
      value: string;
      label: string;
    }>;
  } & SelectHTMLAttributes<HTMLSelectElement>
>;

export const Select = (props: SelectProps) => {
  const {
    name,
    label,
    labelStyle,
    options,
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
      <select css={styles.select} value="" id={name} {...otherProps}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options &&
          options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
      </select>
    </InputBlock>
  );
};
