import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledContainer } from './GlobalTemplate.styled'
import { theme } from '../../theme/Theme'
import GlobalStyle from '../../theme/GlobalStyle'
import Auth from '../../Auth/Auth'
import FontAwesomeLibrary from 'Lib/FontAwesomeLib'


type Props = {
  children: React.ReactNode
}

const GlobalTemplate = ({ children }: Props) => (
  <StyledContainer>
    <FontAwesomeLibrary />
    <GlobalStyle />
    <Auth />
    <ThemeProvider theme={theme}> 
        {children} 
    </ThemeProvider>
  </StyledContainer>
)

export default GlobalTemplate