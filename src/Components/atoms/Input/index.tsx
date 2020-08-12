import React from 'react';
import { StyledInput } from './index.styled';

interface Props {
    id?: string;
    name?: string;
    type: string;
    value?: string | number;
    placeholder?: string;
    onChange?:  any;
    onBlur?: any;
    ariaLabel?: string;
    isRequired?: boolean;
}

const Input: React.FC<Props> = ({ 
  id, 
  name, 
  type, 
  value,
  onChange, 
  onBlur,
  ariaLabel,
  isRequired,
  placeholder
}) => (
    <StyledInput
      id={id}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      aria-label={ariaLabel}
      required={isRequired}
      placeholder={placeholder}
      value={value}
    />
);

export default Input