import React from 'react';
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

const QuestionStep = ({ index, content, answers, ...props }: IQuestionStep): JSX.Element => {
    return (
        <StyledContainer {...props}>
            <StyledQuestionWrapper>
                <StyledLegend> Question {index} </StyledLegend>
                <StyledContent> {content} </StyledContent>
            </StyledQuestionWrapper>
            <StyledAnswersList>
                {answers.map(({ option, content, isCorrect }) =>
                    <StyledListItem key={option}>
                        <Answer 
                            option={option}
                            content={content}
                            isCorrect={isCorrect}
                        />
                    </StyledListItem>
                )}
            </StyledAnswersList>
        </StyledContainer>
    )
};

export default QuestionStep;