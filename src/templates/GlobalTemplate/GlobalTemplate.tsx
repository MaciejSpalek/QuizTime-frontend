import React from 'react';
import { StyledContainer } from './GlobalTemplate.styled';
import GlobalStyle from 'styles/GlobalStyle';
import Auth from 'Auth/Auth';
import FontAwesomeLibrary from 'Lib/FontAwesomeLib';
import Toast from 'Components/atoms/Toast';
import { IGlobalTemplate } from './GlobalTemplate.model';



const GlobalTemplate = ({ children }: IGlobalTemplate) => (
  <StyledContainer>
    <FontAwesomeLibrary />
    <GlobalStyle />
    <Toast />
    <Auth />
    {children}
  </StyledContainer>
)

export default GlobalTemplate;