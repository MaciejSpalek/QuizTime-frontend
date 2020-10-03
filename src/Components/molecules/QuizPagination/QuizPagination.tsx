import React from 'react';
import {
    StyledPagination,
    StyledCenterSquare,
    StyledCounter
} from './QuizPagination.styled';
import { IPagination } from './QuizPagination.model'
import ArrowButton from 'Components/atoms/ArrowButton';

const QuizPagination = ({
    counter,
    maxFrames,
    handleLeftButton,
    handleRightButton,
    ...props
}: IPagination) => {
    const handleCounter = () => `${counter}/${maxFrames}`;
    return (
        <StyledPagination {...props}>
             <ArrowButton 
                position='left'
                handleOnClick={handleLeftButton}
            />
            <StyledCenterSquare>
                <StyledCounter>
                    {handleCounter()}
                </StyledCounter>
            </StyledCenterSquare>
            <ArrowButton 
                position='right'
                handleOnClick={handleRightButton}
            />
        </StyledPagination>
    );
}

export default QuizPagination;

