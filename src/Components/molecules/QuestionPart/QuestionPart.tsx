import React from 'react';
import QuestionAddingPanel from '../QuestionAddingPanel';
import { StyledQuestionPart } from './QuestionPart.styled';

const QuestionPart = ()=> {
    return (
        <StyledQuestionPart>
           <QuestionAddingPanel />
        </StyledQuestionPart>
    )
}

export default QuestionPart;
