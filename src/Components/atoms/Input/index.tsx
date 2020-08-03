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

const Input: React.FC<Props> = ({ id, name, type, onChange, placeholder, ariaLabel }) => (
  <StyledInput
    id={id}
    name={name}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    aria-label={ariaLabel}
  />
);

export default Input