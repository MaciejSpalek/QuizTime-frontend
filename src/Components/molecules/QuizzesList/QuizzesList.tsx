import React from 'react';
import QuizThumbnail from '../QuizThumbnail';
import { StyledList, StyledListItem, StyledContainer } from './QuizzesList.styled';
import { IQuizzesList } from './QuizzesList.model';

const QuizesList = ({ quizzes }: IQuizzesList) => {
    return (
        <StyledContainer>
            <StyledList>
                {quizzes.map(data =>
                    <StyledListItem key={data._id}>
                        <QuizThumbnail parameters={data} />
                    </StyledListItem>)}
            </StyledList>
        </StyledContainer>
    );
};

export default QuizesList;
