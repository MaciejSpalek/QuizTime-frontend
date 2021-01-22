import React from 'react';
import { StyledContainer } from './GlobalTemplate.styled';
import { IChildren } from 'Interfaces/children';
import GlobalStyle from 'styles/GlobalStyle';
import Auth from 'includes/Auth';
import FontAwesomeLibrary from 'includes/FontAwesomeLib';
import Toast from 'Components/atoms/Toast';

const GlobalTemplate = ({ children }: IChildren) => (
  <StyledContainer>
    <FontAwesomeLibrary />
    <GlobalStyle />
    <Toast />
    <Auth />
    {children}
  </StyledContainer>
);

export default GlobalTemplate;