  
import React from 'react'
import { StyledLabel } from './index.styled'

interface Props {
  text?: string
  forText?: string
}

const Label: React.FC<Props> = ({text, forText}) => (
  <StyledLabel htmlFor={forText}>
    {text}
  </StyledLabel>
)

export default Label