import React, { useState } from 'react'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { IQuizThumbnail } from './QuizThumbnail.model';
import {
    StyledImageWrapper,
    StyledHoverWrapper,
    StyledTextWrapper,
    StyledContainer,
    StyledAuthorTag,
    StyledSpinner,
    StyledTitle,
    StyledScore,
    StyledIcon
} from './QuizThumbnail.styled';

const QuizThumbnail = ({ isHover, score, parameters, ...props }: IQuizThumbnail) => {
    const [isContainerHover, setContainerHover] = useState(false);
    const {
        author,
        title,
        iconName,
        colors: {
            primary,
            secondary
        }
    } = parameters;

    const manageHover = (value: boolean) => {
        if (!isHover) {
            setContainerHover(false);
        } else {
            setContainerHover(value);
        }
    }

    return (
        <StyledContainer
            primary={primary}
            isHover={!!isHover}
            onMouseEnter={() => manageHover(true)}
            onMouseLeave={() => manageHover(false)}
            onTouchStart={() => manageHover(true)}
            onTouchEnd={() => manageHover(false)}
            {...props}>
            <StyledImageWrapper secondary={secondary}>
                <StyledIcon
                    icon={iconName as IconName}
                    primary={primary}
                />
                {score ?
                    <StyledScore text={`${score}`} color={primary} /> :
                    <StyledSpinner />}
            </StyledImageWrapper>
            <StyledTextWrapper>
                <StyledTitle text={title} />
                <StyledAuthorTag text={author} />
            </StyledTextWrapper>
            <StyledHoverWrapper isHover={isContainerHover} />
        </StyledContainer>
    );
};

export default QuizThumbnail;
