import React, { useEffect, useState } from 'react';
import QuizPagination from 'Components/organisms/MultiStepForm/QuizPagination';
import FormTemplate from 'templates/FormTemplate';
import { StyledContainer } from './MultiStepForm.styled';
import { IMultiStepForm } from './MultiStepForm.model';

const MultiStepform = ({ 
    onSubmit,
    children, 
    callback,
    ...props 
}: IMultiStepForm): JSX.Element => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        step > children.length -1 && setStep(children.length-1);
        callback && callback(step+1);
    }, [children.length, step, callback]);

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
