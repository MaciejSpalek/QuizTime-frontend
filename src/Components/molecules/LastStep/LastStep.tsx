import React, { useCallback, useEffect, useState } from 'react';
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
                text='Check answers'
                isDisabled={isSubmitting}
            />
        </StyledContainer>
    );
};

export default LastStep;