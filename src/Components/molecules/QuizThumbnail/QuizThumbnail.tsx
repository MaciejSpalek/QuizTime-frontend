import React from 'react'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { getScore } from 'helpers/getters';
import { IQuizThumbnail } from './QuizThumbnail.model';
import {
    StyledImageWrapper,
    StyledTextWrapper,
    StyledContainer,
    StyledAuthorTag,
    StyledTitle,
    StyledScore,
    StyledIcon
} from './QuizThumbnail.styled';


const QuizThumbnail = ({ parameters, ...props }: IQuizThumbnail) => {
    const {
        author,
        title,
        iconName,
        amountOfQuestions,
        colors: {
            primary,
            secondary
        },
    } = parameters;

    return (
        <StyledContainer {...props} primarycolor={primary}>
            <StyledImageWrapper secondarycolor={secondary}>
                <StyledIcon
                    icon={iconName as IconName}
                    primarycolor={primary}
                />
                <StyledScore
                    text={getScore(+`${amountOfQuestions}`)}
                    color={primary}
                />
            </StyledImageWrapper>
            <StyledTextWrapper>
                <StyledTitle text={title} />
                <StyledAuthorTag text={author} />
            </StyledTextWrapper>
        </StyledContainer>
    );
};

export default QuizThumbnail;
