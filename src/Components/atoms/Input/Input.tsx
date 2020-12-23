import React from 'react';
import { IInput } from './Input.model';
import { StyledInput } from './Input.styled';

const Input = ({ 
  id, 
  _ref,
  name, 
  type, 
  value,
  onBlur,
  onChange, 
  ariaLabel,
  maxLength,
  isRequired,
  placeholder,
  ariaInvalid,
  defaultValue,
  ariaDescribedBy,
  ...props
}: IInput) => (
    <StyledInput
      id={id}
      ref={_ref}
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
      defaultValue={defaultValue}
      aria-describedby={ariaDescribedBy}
      {...props}
    />
);

export default Input