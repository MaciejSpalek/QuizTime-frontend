import React, { useState } from 'react';
import QuizPagination from 'Components/molecules/QuizPagination';
import FormTemplate from 'templates/FormTemplate';
import { StyledContainer } from './MultiStepForm.styled';
import { IMultiStepForm } from './MultiStepForm.model';

const MultiStepform = ({ 
    onSubmit,
    children, 
    ...props 
}: IMultiStepForm): JSX.Element => {
    const [step, setStep] = useState(0);
    return (
        <StyledContainer {...props}>
            <FormTemplate onSubmit={onSubmit}>
                {children[step]}
            </FormTemplate>
            <QuizPagination 
                steps={children.length} 
                counter={step+1}
                handleLeftButton={() => setStep(prev => prev - 1)}
                handleRightButton={() => setStep(prev => prev + 1)}
            />
        </StyledContainer>
    )
};

export default MultiStepform;
