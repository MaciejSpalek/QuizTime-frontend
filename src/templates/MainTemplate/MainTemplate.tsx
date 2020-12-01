import React from 'react';
import { IChildren } from 'Interfaces/children';
import { StyledContainer } from './MainTemplate.styled';

const MainTemplate = ({ children }: IChildren) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default MainTemplate;