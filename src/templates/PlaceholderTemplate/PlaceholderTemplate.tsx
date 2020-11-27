import React from 'react'
import { StyledContainer } from './PlaceholderTemplate.styled'

type Props = {
  children: React.ReactNode;
}

const PlaceholderTemplate = ({ children }: Props) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default PlaceholderTemplate;