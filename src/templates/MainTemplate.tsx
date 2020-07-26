import React from 'react'
import styled  from 'styled-components'

const StyledContainer = styled.main`
  height: calc(100vh - 60px);
`

interface Props {
  children: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ children }) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default MainTemplate;