import React from 'react'
import { StyledForm } from './index.styled'

interface Props {
    children: React.ReactNode
}
  
const FormTemplate: React.FC<Props> = ({ children})=> {
    return (
        <StyledForm  noValidate autoComplete="off">
            {children}
        </StyledForm>
    )
}

export default FormTemplate