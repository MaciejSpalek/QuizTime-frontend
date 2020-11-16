import React from 'react'
import { StyledForm } from './FormTemplate.styled'

type Props = {
    handleSubmit?: (e: any) => void;
    children: React.ReactNode;
}

const FormTemplate = ({ children, handleSubmit, ...props }: Props) => {
    return (
        <StyledForm
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            {...props}>
            {children}
        </StyledForm>
    )
}

export default FormTemplate