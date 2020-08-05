import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  height: calc(100vh - 60px);
`

interface Props {
  children: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children }) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default PageTemplate;