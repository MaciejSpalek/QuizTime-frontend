import React from 'react';
import { IFormAnswer } from 'Interfaces/quizInterfaces';
import { IAnswer } from './Answer.model';
import {
    StyledAnswer,
    StyledContent,
    StyledLegend,
    StyledRadioButton
} from './Answer.styled';

const Answer = ({
    questionIndex,
    values,
    handleChange,
    handleBlur,
    option,
    content,
    isCorrect,
    ...props
}: IFormAnswer & IAnswer): JSX.Element => {
    const isSelect = () => values.answers[questionIndex] === option;
    return (
        <StyledAnswer isSelect={isSelect()} {...props}>
            <StyledRadioButton
                name={`answers[${questionIndex}]`}
                onChange={handleChange}
                id={`radio-${option}`}
                checked={isSelect()}
                onBlur={handleBlur}
                value={option}
                label=""
            />
            <StyledLegend isSelect={isSelect()}>
                {`${option}.`}
            </StyledLegend>
            <StyledContent > {`${content}`} </StyledContent>
        </StyledAnswer>
    )
};

export default Answer;