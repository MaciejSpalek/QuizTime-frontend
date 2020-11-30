import React from 'react';
import QuizThumbnail from '../QuizThumbnail';
import { StyledList, StyledListItem } from './QuizzesList.styled';
import { IQuizzesList } from './QuizzesList.model';

const QuizesList = ({ quizzes }: IQuizzesList) => {
    return (
        <StyledList>
            {quizzes.map(data =>
                <StyledListItem>
                    <QuizThumbnail key={data._id} parameters={data} />
                </StyledListItem>)}
        </StyledList>
    );
};

export default QuizesList;
