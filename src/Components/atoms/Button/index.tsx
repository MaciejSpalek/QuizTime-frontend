import React from 'react';
import { StyledButton } from './index.styled';

interface Props {
    text: string
    type?: any
    isDisabled?: boolean
    isWidthExtend: boolean
    clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ text, clickHandler, type, isDisabled, isWidthExtend }) => (
    <StyledButton 
        onClick={clickHandler} 
        type={type}
        disabled={isDisabled}
        isWidthExtend={isWidthExtend}
        >
            {text}
    </StyledButton>
);

export default Button

