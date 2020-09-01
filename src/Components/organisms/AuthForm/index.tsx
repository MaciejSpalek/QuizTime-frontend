import React from 'react'
import { StyledForm } from './index.styled'

interface Props {
    handleSubmit: (e: any) => void;
    children: React.ReactNode;
}



const FormTemplate: React.FC<Props> = ({ children, handleSubmit }) => {
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