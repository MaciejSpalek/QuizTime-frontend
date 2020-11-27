import React from 'react';
import { StyledButton } from './Button.styled';
import { IButton } from './Button.model'

const Button = ({ 
    text, 
    handleOnClick, 
    type, 
    isDisabled, 
    ...props
}: IButton) => {

    return (
        <StyledButton 
            onClick={handleOnClick} 
            type={type}
            disabled={isDisabled}
            {...props}>
            {text}
        </StyledButton>
    );
}
export default Button

