import React, { useEffect } from 'react';
import Answer from './Answer';
import { IQuestionStep } from './QuestionStep.model';
import {
    StyledQuestionWrapper,
    StyledLegend,
    StyledContainer,
    StyledAnswersList,
    StyledListItem,
    StyledContent
} from './QuestionStep.styled';

const QuestionStep = ({ 
    index, 
    values, 
    content, 
    answers, 
    handleBlur, 
    handleChange,
    ...props 
}: IQuestionStep): JSX.Element => {
    return (
        <StyledContainer {...props}>
            <StyledQuestionWrapper>
                <StyledLegend> Question {index+1} </StyledLegend>
                <StyledContent> {content} </StyledContent>
            </StyledQuestionWrapper>
            <StyledAnswersList>
                {answers.map(({ option, content, isCorrect }) =>
                    <StyledListItem key={option}>
                        <Answer
                            option={option}
                            questionIndex={index}
                            content={content}
                            isCorrect={isCorrect}
                            values={values}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                        />
                    </StyledListItem>)}
            </StyledAnswersList>
        </StyledContainer>
    )
};

export default QuestionStep;