import React from 'react';
import {
    StyledPagination,
    StyledCenterSquare,
    StyledCounter,
    StyledEmptySquare,
    StyledIconButton
} from './QuizPagination.styled';
import { IPagination } from './QuizPagination.model'


const QuizPagination = ({
    counter,
    steps,
    handleLeftButton,
    handleRightButton,
    ...props
}: IPagination) => {
    const handleCounter = () => `${counter}/${steps}`;
    const testFunc = (position: string) => {
        if (position === 'left' && counter === 1) {
            return false;
        } else if (position === 'right' && counter === steps) {
            return false;
        } else {
            return true
        }
    }

    return (
        <StyledPagination {...props}>
            { testFunc('left') ?
                <StyledIconButton
                    icon={'angle-left'}
                    handleOnClick={handleLeftButton}
                /> : <StyledEmptySquare />
            }
            <StyledCenterSquare>
                <StyledCounter>
                    {handleCounter()}
                </StyledCounter>
            </StyledCenterSquare>
            { testFunc('right') ?
                <StyledIconButton
                    icon={'angle-right'}
                    handleOnClick={handleRightButton}
                /> : <StyledEmptySquare />
            }
        </StyledPagination>
    );
}

export default QuizPagination;

