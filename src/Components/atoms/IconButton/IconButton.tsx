import React from 'react';
import { StyledIconButton, StyledIcon } from './IconButton.styled';
import { IIconButton } from './IconButton.model';

const IconButton = ({ icon, type, handleOnClick, ...props }: IIconButton): JSX.Element => {
    return (
        <StyledIconButton type={type} onClick={handleOnClick} {...props}>
            <StyledIcon icon={icon}/>
        </StyledIconButton>
    )
}

export default IconButton;  