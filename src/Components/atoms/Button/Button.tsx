import React from 'react';
import { StyledButton, StyledWrapper, StyledSpinner } from './Button.styled';
import { IButton } from './Button.model'

const Button = ({
    type,
    children,
    isDisabled,
    isSpinner,
    handleOnClick,
    ...props
}: IButton) => {

    if (isSpinner) {
        return (
            <StyledButton
                onClick={handleOnClick}
                type={type}
                disabled={true}
                {...props}>
                <StyledWrapper>
                    <StyledSpinner />
                    Connecting
                </StyledWrapper>
            </StyledButton>
        )
    }

    return (
        <StyledButton
            onClick={handleOnClick}
            type={type}
            disabled={isDisabled}
            {...props}>
            <span> {children} </span>
        </StyledButton>
    );
};

export default Button;

