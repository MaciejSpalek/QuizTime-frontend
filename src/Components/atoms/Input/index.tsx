import React from 'react';
import { StyledInput } from './index.styled';

type Props = {
    id?: string
    type: string
    name?: string
    onBlur?: any
    onChange?:  any
    isRequired?: boolean
    placeholder?: string
    value?: string | number
    ariaLabel?: string
    ariaInvalid?: boolean
    ariaDescribedBy?: string 
}

const Input = ({ 
  id, 
  name, 
  type, 
  value,
  onBlur,
  onChange, 
  ariaLabel,
  isRequired,
  placeholder,
  ariaInvalid,
  ariaDescribedBy
}: Props) => (
    <StyledInput
      id={id}
      name={name}
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      required={isRequired}
      aria-label={ariaLabel}
      placeholder={placeholder}
      aria-invalid={ariaInvalid}
      aria-describedby={ariaDescribedBy}
    />
);

export default Input