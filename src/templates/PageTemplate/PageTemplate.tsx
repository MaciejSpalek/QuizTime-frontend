import React from 'react'
import { StyledContainer } from './PageTemplate.styled'

type Props = {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: Props) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default PageTemplate;