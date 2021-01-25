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
    steps,
    counter,
    handleLeftButton,
    handleRightButton,
    ...props
}: IPagination) => {
    const handleCounter = () => `${counter}/${steps}`;
    const getArrowPosition = (position: string) => {
        if (position === 'left' && counter === 1) {
            return false;
        } else if (position === 'right' && counter === steps) {
            return false;
        } else {
            return true
        }
    };

    return (
        <StyledPagination id="pagination" {...props}>
            { getArrowPosition('left') ?
                <StyledIconButton
                    type='button'
                    icon={'angle-left'}
                    handleOnClick={handleLeftButton}
                /> : <StyledEmptySquare />
            }
            <StyledCenterSquare>
                <StyledCounter>
                    {handleCounter()}
                </StyledCounter>
            </StyledCenterSquare>
            { getArrowPosition('right') ?
                <StyledIconButton
                    type='button'
                    icon={'angle-right'}
                    handleOnClick={handleRightButton}
                /> : <StyledEmptySquare />
            }
        </StyledPagination>
    );
};

export default QuizPagination;

