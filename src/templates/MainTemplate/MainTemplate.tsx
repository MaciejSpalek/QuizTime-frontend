import React from 'react'
import { StyledContainer } from './MainTemplate.styled'

type Props = {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: Props) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default MainTemplate;