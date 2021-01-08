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
    option,
    values,
    content,
    readonly,
    isCorrect,
    handleBlur,
    handleChange,
    outlineColor,
    questionIndex,
    ...props
}: IFormAnswer & IAnswer): JSX.Element => {
    const isSelect = () => values?.answers[questionIndex] === option;
    return (
        <StyledAnswer
            isSelect={isSelect()}
            outlineColor={`${outlineColor}`}
            readonly={readonly}
            {...props}>
            {!readonly &&
                <StyledRadioButton
                    name={`answers[${questionIndex}]`}
                    onChange={handleChange}
                    id={`radio-${option}`}
                    checked={isSelect()}
                    onBlur={handleBlur}
                    value={option}
                    label=""
                />}
            <StyledLegend
                readonly={readonly}
                isSelect={isSelect()}
                outlineColor={`${outlineColor}`}>
                {`${option}.`}
            </StyledLegend>
            <StyledContent > {`${content}`} </StyledContent>
        </StyledAnswer>
    )
};

export default Answer;