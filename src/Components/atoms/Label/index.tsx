  
import React from 'react'
import { StyledLabel } from './index.styled'

type Props = {
  text?: string
  forText?: string
}

const Label = ({text, forText}: Props) => (
  <StyledLabel htmlFor={forText}>
    {text}
  </StyledLabel>
)

export default Label