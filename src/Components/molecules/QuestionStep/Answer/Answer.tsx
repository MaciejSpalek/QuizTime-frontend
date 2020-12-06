import { IFormAnswer } from 'Interfaces/quizInterfaces';
import React from 'react';
import {
    StyledAnswer,
    StyledContent,
    StyledLegend
} from './Answer.styled';

const Answer = ({ option, content, isCorrect, ...props }: IFormAnswer): JSX.Element => {
    return (
        <StyledAnswer {...props}>
            <StyledLegend>
                {`${option}.`}
            </StyledLegend>
           <StyledContent > {`${content}`} </StyledContent>
        </StyledAnswer>
    )
};

export default Answer;