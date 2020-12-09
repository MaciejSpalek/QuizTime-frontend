import React, { useEffect, useState } from 'react';
import { ILastStep } from './LastStep.model';
import {
    StyledContainer,
    StyledHeading,
    StyledButton,
    StyledIcon
} from './LastStep.styled';

const LastStep = ({ errors, values }: ILastStep) => {
    const [ isFirstRender, setIsFirstRender ] = useState(true);
    const isDisabled = () => {
        if(isFirstRender) return true; 
        return errors.answers && !!errors.answers.length
    };
       
    useEffect(() => {
        values.answers.length && setIsFirstRender(false);
    }, [values]);

    return (
        <StyledContainer>
            <StyledIcon icon={['far', 'list-alt']} />
            <StyledHeading 
                text="Answer all questions to complete the quiz"
            />
            <StyledButton
                type='submit'
                text='Check answers'
                isDisabled={isDisabled()}
            />
        </StyledContainer>
    );
};

export default LastStep;