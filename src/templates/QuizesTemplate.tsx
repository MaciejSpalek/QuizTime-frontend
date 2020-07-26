import React from 'react'
import styled  from 'styled-components'

const StyledContainer = styled.main`
  height: calc(100vh - 60px);
  background-color: ${({theme}) => theme.colors.grayscale[1]};
`

interface Props {
  children: React.ReactNode;
}

const QuizesTemplate: React.FC<Props> = ({ children }) => (
  <StyledContainer>
        {children} 
  </StyledContainer>
);

export default QuizesTemplate;