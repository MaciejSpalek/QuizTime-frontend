import React from 'react'
import { StyledFormField } from './FormFieldTemplate.styled'

type Props = {
    children: React.ReactNode
}

const FieldFormTemplate = ({ children, ...props }: Props) => (
    <StyledFormField {...props}>
      {children}
    </StyledFormField>
);


export default FieldFormTemplate