import React from 'react';
import { StyledIconButton, StyledIcon } from './IconButton.styled';
import { IIconButton } from './IconButton.model';

const IconButton = ({ icon, type, ariaLabel, handleOnClick, ...props }: IIconButton): JSX.Element => {
    return (
        <StyledIconButton aria-label={ariaLabel} data-testid="IconButton" type={type} onClick={handleOnClick} {...props}>
            {icon && <StyledIcon icon={icon} />}
        </StyledIconButton>
    )
}

export default IconButton;  