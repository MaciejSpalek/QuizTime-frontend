import React from 'react';
import QuizThumbnail from '../QuizTestimonial/QuizThumbnail';
import { StyledList } from './QuizzesList.styled';
import { IQuizzesList } from './QuizzesList.model';



const QuizesList = ({ quizes }: IQuizzesList) => {
    return (
        <StyledList>
            {quizes.map(data => <QuizThumbnail key={data._id} parameters={data}/>)}
        </StyledList>
    );
};

export default QuizesList;
