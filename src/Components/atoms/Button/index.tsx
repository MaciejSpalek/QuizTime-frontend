import React from 'react';
import { StyledButton } from './index.styled';

interface Props {
    text: string
    type?: any
    isDisabled?: boolean
    clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ text, clickHandler, type, isDisabled }) => (
    <StyledButton 
        onClick={clickHandler} 
        type={type}
        disabled={isDisabled}>
            {text}
    </StyledButton>
);

export default Button

