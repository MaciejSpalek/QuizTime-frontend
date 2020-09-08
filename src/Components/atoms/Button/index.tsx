import React from 'react';
import { StyledButton } from './index.styled';

type Props = {
    text: string
    type?: any
    isDisabled?: boolean
    isWidthExtend: boolean
    handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button= ({ text, handleOnClick, type, isDisabled, isWidthExtend }: Props) => (
    <StyledButton 
        onClick={handleOnClick} 
        type={type}
        disabled={isDisabled}
        isWidthExtend={isWidthExtend}>
        {text}
    </StyledButton>
);

export default Button

