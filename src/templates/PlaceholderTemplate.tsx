import React from 'react'
import styled from 'styled-components'
import { FlexCenter } from '../theme/Mixins'

const StyledContainer = styled.div`
  ${FlexCenter};
  height: 100%;
`

interface Props {
  children: React.ReactNode;
}

const PlaceholderTemplate: React.FC<Props> = ({ children }) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default PlaceholderTemplate;