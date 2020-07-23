import React from 'react'
import GlobalStyle from '../theme/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../theme/Theme'

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
`

interface Props {
  children: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ children }) => (
  <StyledContainer>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledContainer>
);

export default MainTemplate;