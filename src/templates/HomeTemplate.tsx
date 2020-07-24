import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    height: 100%;
    background-color: ${({theme}) => theme.colors.grayscale[0]};
`

interface Props {
  children: React.ReactNode;
}

const HomeTemplate: React.FC<Props> = ({ children }) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default HomeTemplate;