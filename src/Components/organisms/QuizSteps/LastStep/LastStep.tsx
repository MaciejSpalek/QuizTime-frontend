import React from 'react';
import { ILastStep } from './LastStep.model';
import {
    StyledContainer,
    StyledHeading,
    StyledButton,
    StyledIcon
} from './LastStep.styled';

const LastStep = ({ isSubmitting }: ILastStep) => {
    return (
        <StyledContainer>
            <StyledIcon icon={['far', 'list-alt']} />
            <StyledHeading 
                text="Answer all questions to complete the quiz"
            />
            <StyledButton
                type='submit'
                isDisabled={isSubmitting}
            >
                Check answers
            </StyledButton>
        </StyledContainer>
    );
};

export default LastStep;