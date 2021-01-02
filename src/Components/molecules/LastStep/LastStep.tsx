import React from 'react';
import { ILastStep } from './LastStep.model';
import {
    StyledContainer,
    StyledHeading,
    StyledButton,
    StyledIcon
} from './LastStep.styled';

const LastStep = ({ isSubmitting, colors }: ILastStep) => {
    const { primary, secondary } = colors;
    return (
        <StyledContainer>
            <StyledIcon icon={['far', 'list-alt']} color={secondary}/>
            <StyledHeading 
                text="Answer all questions to complete the quiz"
            />
            <StyledButton
                primary={primary}
                secondary={secondary}
                type='submit'
                text='Check answers'
                isDisabled={isSubmitting}
            />
        </StyledContainer>
    );
};

export default LastStep;