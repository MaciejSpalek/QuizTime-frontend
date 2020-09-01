import React from 'react'
import GlobalStyle from '../theme/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../theme/Theme'
import Auth from '../Auth/Auth'

const StyledContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`

interface Props {
  children: React.ReactNode
}

const GlobalTemplate: React.FC<Props> = ({ children }) => (
  <StyledContainer>
    <GlobalStyle />
    <Auth />
    <ThemeProvider theme={theme}> 
        {children} 
    </ThemeProvider>
  </StyledContainer>
);

export default GlobalTemplate