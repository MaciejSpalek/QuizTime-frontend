import React, { useState } from 'react';
import { StyledQuestion, StyledHeading, StyledAnswer } from './Question.styled';
import { IQuestion } from './Question.model';

const Question = ({ question, answers, index }: IQuestion): JSX.Element => {    
    return (
        <StyledQuestion>
            <StyledHeading> {`${index}. ${question}`} </StyledHeading>
            {answers.map(({ option, content, isCorrect }) => 
                <StyledAnswer 
                    isCorrect={isCorrect} 
                    text={`${option}. ${content} `} 
                    key={option}
                />
            )}
        </StyledQuestion>
    )
};

export default Question;
