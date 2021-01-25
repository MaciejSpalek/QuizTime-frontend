import React from 'react';
import { StyledContainer } from './WrapperTemplate.styled';
import { IChildren } from 'Interfaces/children';

const WrapperTemplate = ({ children }: IChildren) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

export default WrapperTemplate;