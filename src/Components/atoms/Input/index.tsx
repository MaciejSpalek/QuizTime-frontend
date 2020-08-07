import React from 'react';
import { StyledInput } from './index.styled';

interface Props {
    id?: string;
    name?: string;
    type: string;
    placeholder?: string;
    onChange?:  any;
    ariaLabel?: string;
}

const Input: React.FC<Props> = ({ 
  id, 
  name, 
  type, 
  onChange, 
  ariaLabel,
  placeholder
}) => (
  <StyledInput
    id={id}
    type={type}
    name={name}
    onChange={onChange}
    aria-label={ariaLabel}
    placeholder={placeholder}
  />
);

export default Input