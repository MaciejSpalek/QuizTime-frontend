import React from 'react';
import { StyledInput } from './index.styled';

type Props = {
    id?: string
    type: string
    name?: string
    maxLength?: number
    onBlur?: any
    onChange?:  any
    ariaLabel?: string
    placeholder?: string
    isRequired?: boolean
    ariaInvalid?: boolean
    value?: string | number
    ariaDescribedBy?: string 
}

const Input = ({ 
  id, 
  name, 
  maxLength,
  type, 
  value,
  onBlur,
  onChange, 
  ariaLabel,
  isRequired,
  placeholder,
  ariaInvalid,
  ariaDescribedBy,
  ...props
}: Props) => (
    <StyledInput
      id={id}
      name={name}
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      maxLength={maxLength}
      required={isRequired}
      aria-label={ariaLabel}
      placeholder={placeholder}
      aria-invalid={ariaInvalid}
      aria-describedby={ariaDescribedBy}
      {...props}
    />
);

export default Input