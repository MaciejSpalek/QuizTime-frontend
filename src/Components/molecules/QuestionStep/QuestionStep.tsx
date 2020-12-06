import React from 'react';
import { IQuestionStep } from './QuestionStep.model';
import {
    StyledQuestionWrapper,
    StyledWrapperTitle,
    StyledContainer,
    StyledContent
} from './QuestionStep.styled';

const QuestionStep = ({ content, answers, ...props }: IQuestionStep): JSX.Element => {
    return (
        <StyledContainer {...props}>
            <StyledQuestionWrapper>
                <StyledWrapperTitle> Question 1 </StyledWrapperTitle>
                <StyledContent text={content} />
            </StyledQuestionWrapper>
        </StyledContainer>
    )
};

export default QuestionStep;