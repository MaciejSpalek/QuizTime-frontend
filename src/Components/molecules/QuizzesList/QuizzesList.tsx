import React from 'react';
import QuizThumbnail from '../QuizThumbnail';
import { StyledList, StyledListItem } from './QuizzesList.styled';
import { IQuizzesList } from './QuizzesList.model';

const QuizesList = ({ quizzes }: IQuizzesList) => {
    return (
        <StyledList>
            {quizzes.map(data =>
                <StyledListItem key={data._id}>
                    <QuizThumbnail  parameters={data} />
                </StyledListItem>)}
        </StyledList>
    );
};

export default QuizesList;
