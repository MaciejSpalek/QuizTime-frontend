import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { IQuizItem } from './QuizItem.model';
import {
    StyledLink,
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
    const { primary, secondary } = colors;
    return (
        <StyledLink to={`${author}/${id}`} {...props}>
            <StyledIconWrapper color={secondary}>
                <StyledIcon color={primary} icon={icon as IconName} />
            </StyledIconWrapper>
            <StyledTitle> 
              { text }
            </StyledTitle>
        </StyledLink>
    );
};

export default QuizItem;

