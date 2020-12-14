import React from 'react';
import QuizThumbnail from '../QuizThumbnail';
import { StyledList, StyledListItem, StyledContainer } from './QuizzesList.styled';
import { IQuizzesList } from './QuizzesList.model';
import { useHistory } from 'react-router-dom';

const QuizzesList = ({ quizzes }: IQuizzesList ) => {
    const history = useHistory();
    const handleOnClick = (id: string, author: string) => history.push(`${author}/${id}`);
    return (
        <StyledContainer>
            <StyledList>
                {quizzes.map(data =>
                    <StyledListItem 
                        key={data._id} 
                        id={data._id}
                        onClick={() => handleOnClick(`${data._id}`, `${data.author}`)}>
                        <QuizThumbnail parameters={data} />
                    </StyledListItem>)}
            </StyledList>
        </StyledContainer>
    );
};

export default QuizzesList;
