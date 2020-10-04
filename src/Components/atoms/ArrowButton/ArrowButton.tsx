import React from 'react';
import { StyledArrowButton, StyledIcon } from './ArrowButton.styled';
import { IArrowButton } from './ArrowButton.model';
import { IconName } from '@fortawesome/fontawesome-svg-core';

const ArrowButton = ({ position, handleOnClick }: IArrowButton): JSX.Element => {
    const getIcon = ()  => {
        return `angle-${position}` as IconName
    }

    return (
        <StyledArrowButton onClick={handleOnClick}>
            <StyledIcon icon={getIcon()}/>
        </StyledArrowButton>
    )
}

export default ArrowButton;