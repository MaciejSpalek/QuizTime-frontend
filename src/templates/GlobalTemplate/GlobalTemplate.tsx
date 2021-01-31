import React from 'react';
import { StyledContainer } from './GlobalTemplate.styled';
import { IChildren } from 'Interfaces/children';
import GlobalStyle from 'styles/GlobalStyle';
import Auth from 'includes/Auth';
import FontAwesomeLibrary from 'includes/FontAwesomeLib';
import Toast from 'Components/atoms/Toast';
import CookieBanner from 'Components/molecules/CookieBanner';

const GlobalTemplate = ({ children }: IChildren) => (
  <StyledContainer>
    <FontAwesomeLibrary />
    <GlobalStyle />
    <Toast />
    <Auth />
    <CookieBanner />
    {children}
  </StyledContainer>
);

export default GlobalTemplate;