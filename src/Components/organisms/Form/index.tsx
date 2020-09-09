import React from 'react'
import { StyledForm } from './index.styled'

type Props = {
    handleSubmit: (e: any) => void;
    children: React.ReactNode;
}



const FormTemplate = ({ children, handleSubmit }: Props) => {
    return (
        <StyledForm
            noValidate
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e)}>
            {children}
        </StyledForm>
    )
}

export default FormTemplate