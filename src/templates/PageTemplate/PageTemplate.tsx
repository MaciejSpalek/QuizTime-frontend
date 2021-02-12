import React from 'react';
import { IChildren } from 'Interfaces/children';
import { StyledContainer } from './PageTemplate.styled';

const PageTemplate = ({ children, ...props }: IChildren) => (
  <StyledContainer data-testid="PageTemplate" {...props}>
    {children} 
  </StyledContainer>
);

export default PageTemplate;