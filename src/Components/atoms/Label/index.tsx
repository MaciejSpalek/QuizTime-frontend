  
import React from 'react';
import { StyledLabel } from './index.styled';

interface Props {
    children?: React.ReactNode
}

const Label: React.FC<Props> = ({ children, ...props }) => (
  <StyledLabel {...props}>
    {children}
  </StyledLabel>
);



export default Label;