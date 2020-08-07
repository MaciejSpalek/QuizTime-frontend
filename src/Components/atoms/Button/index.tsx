import React from 'react';
import { StyledButton } from './index.styled';

interface Props {
    text: string;
    clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ text, clickHandler }) => (
    <StyledButton onClick={clickHandler}>
        {text}
    </StyledButton>
);

export default Button

