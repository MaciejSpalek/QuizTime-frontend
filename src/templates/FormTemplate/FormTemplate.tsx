import React from 'react';
import { IFormTemplate } from './FormTemplate.model';
import { StyledForm } from './FormTemplate.styled';


const FormTemplate = ({ children, onSubmit, ...props }: IFormTemplate) => {
    return (
        <StyledForm
            data-testid="FormTemplate"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
            {...props}>
            {children}
        </StyledForm>
    );
};

export default FormTemplate;