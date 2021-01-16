import QuizPagination from 'Components/molecules/QuizPagination';
import React from 'react';
import FormTemplate from 'templates/FormTemplate';
import { IMultiStepForm } from './MultiStepForm.model';
import { StyledContainer } from './MultiStepForm.styled';

const MultiStepform = ({ 
    counter, 
    onSubmit,
    children, 
    handleLeftButton, 
    handleRightButton, 
    ...props 
}: IMultiStepForm): JSX.Element => {
    const steps = children.length;
    const getCurrentChild = () => children[counter - 1];

    return (
        <StyledContainer {...props}>
            <FormTemplate onSubmit={onSubmit}>
                {getCurrentChild()}
            </FormTemplate>
            <QuizPagination 
                steps={steps} 
                counter={counter}
                handleLeftButton={handleLeftButton}
                handleRightButton={handleRightButton}
            />
        </StyledContainer>
    )
};

export default MultiStepform;
