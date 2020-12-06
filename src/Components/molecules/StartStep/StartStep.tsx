import Button from 'Components/atoms/Button';
import React, { useEffect, useState } from 'react';
import { IStartStep } from './StartStep.model';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import {
    StyledIcon,
    StyledPageTemplate,
    StyledWrapper,
    StyledText,
    StyledButton
} from './StartStep.styled';
import { useHistory } from 'react-router-dom';


const StartStep = ({ onClick, icon, colors, title }: IStartStep): JSX.Element => {
    const history = useHistory();
    const handleOnClick = () => {
        history.push('/')
    };
    
 
    return (
        <StyledPageTemplate>
            <StyledWrapper secondary={colors.secondary}>
                <StyledIcon primary={colors.primary} icon={icon as IconName} />
                <StyledText secondary={colors.primary}>{ title }</StyledText>
            </StyledWrapper>
            <StyledButton
                type='button'
                text='Start quiz'
                handleOnClick={onClick}
            />
            <StyledButton
                type='button'
                text='Go back'
                handleOnClick={handleOnClick}
            />
        </StyledPageTemplate>
    );
};

export default StartStep;