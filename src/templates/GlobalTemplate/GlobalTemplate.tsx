import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import Auth from 'includes/Auth';
import FontAwesomeLibrary from 'includes/FontAwesomeLib';
import Toast from 'Components/atoms/Toast';
import CookieBanner from 'Components/molecules/CookieBanner';
import { StyledContainer } from './GlobalTemplate.styled';
import { IChildren } from 'Interfaces/children';

const GlobalTemplate = ({ children }: IChildren) => (
  <StyledContainer data-testid="GlobalTemplate">
    <FontAwesomeLibrary />
    <GlobalStyle />
    <Toast />
    <Auth />
    <CookieBanner />
    {children}
  </StyledContainer>
);

export default GlobalTemplate;