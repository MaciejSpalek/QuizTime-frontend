import React from 'react';
import { StyledMultiStepForm, StyledChild } from './MultiStepWrapper.styled';
import { IMultiStepWrapper } from './MultiStepWrapper.model';
import Pagination from 'Components/molecules/QuizPagination'

const MultiStepWrapper = ({children, counter, handleLeftButton, handleRightButton}: IMultiStepWrapper): JSX.Element=> {
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

export default MultiStepWrapper
