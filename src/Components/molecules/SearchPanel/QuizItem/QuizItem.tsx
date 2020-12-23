import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { IQuizItem } from './QuizItem.model';
import { useHistory } from 'react-router-dom';
import {
    StyledContainer,
    StyledIcon,
    StyledTitle,
    StyledIconWrapper
} from './QuizItem.styled';

const QuizItem = ({ 
    id, 
    icon, 
    text, 
    colors,
    author, 
    ...props 
}: IQuizItem) => {
    const history = useHistory();
    const { primary, secondary } = colors;
    const handleOnClick = () => history.push(`${author}/${id}`);

    return (
        <StyledContainer onClick={handleOnClick} {...props}>
            <StyledIconWrapper color={secondary}>
                <StyledIcon color={primary} icon={icon as IconName} />
            </StyledIconWrapper>
            <StyledTitle> { text } </StyledTitle>
        </StyledContainer>
    );
};

export default QuizItem;

