import React from 'react';
import {
    StyledPagination,
    StyledCenterSquare,
    StyledCounter,
    StyledEmptySquare
} from './QuizPagination.styled';
import { IPagination } from './QuizPagination.model'
import ArrowButton from 'Components/atoms/ArrowButton';

const QuizPagination = ({
    counter,
    steps,
    handleLeftButton,
    handleRightButton,
    ...props
}: IPagination) => {
    const handleCounter = () => `${counter}/${steps}`;
    const testFunc = (position: string) => {
        if(position === 'left' && counter === 1) {
            return false;
        } else if(position === 'right' && counter === steps) {
            return false;
        } else {
            return true
        }
    }
  
    return (
        <StyledPagination {...props}>
            { testFunc('left') ? 
                <ArrowButton 
                    position='left'
                    handleOnClick={handleLeftButton}
                /> : <StyledEmptySquare />
            }
            <StyledCenterSquare>
                <StyledCounter>
                    {handleCounter()}
                </StyledCounter>
            </StyledCenterSquare>
            { testFunc('right') ? 
                <ArrowButton 
                    position='right'
                    handleOnClick={handleRightButton}
                /> : <StyledEmptySquare /> 
            }
        </StyledPagination>
    );
}

export default QuizPagination;

