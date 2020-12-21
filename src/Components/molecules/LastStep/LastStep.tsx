import React from 'react';
import { ILastStep } from './LastStep.model';
import {
    StyledContainer,
    StyledHeading,
    StyledButton,
    StyledIcon
} from './LastStep.styled';

const LastStep = ({ isSubmitting, colors }: ILastStep) => {
    const { primary } = colors;
    return (
        <StyledContainer>
            <StyledIcon icon={['far', 'list-alt']} color={primary}/>
            <StyledHeading 
                text="Answer all questions to complete the quiz"
            />
            <StyledButton
                color={primary}
                type='submit'
                text='Check answers'
                isDisabled={isSubmitting}
            />
        </StyledContainer>
    );
};

export default LastStep;