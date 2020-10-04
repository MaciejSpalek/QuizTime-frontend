import React from 'react';
import { StyledMultiStepForm, StyledChild } from './MultiStepForm.styled';
import { IMultiStepForm } from './MultiStepForm.model';
import Pagination from 'Components/molecules/QuizPagination'

const MultiStepForm = ({children, counter, handleLeftButton, handleRightButton}: IMultiStepForm): JSX.Element=> {
    const steps = children.length;
    const getCurrentChild = () => children[counter-1]

    return (
        <StyledMultiStepForm>
            <StyledChild>
                { getCurrentChild() }
            </StyledChild>
            <Pagination 
                steps={steps} 
                counter={counter}
                handleLeftButton={handleLeftButton}
                handleRightButton={handleRightButton}
            />
        </StyledMultiStepForm>
    )
}

export default MultiStepForm
