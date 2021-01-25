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
        colors: { primary, secondary }
    } = parameters;


    return (
        <StyledContainer
            primarycolor={primary}
            isHover={!!isHover}
            onMouseEnter={()=> setContainerHover(true)}
            onMouseLeave={()=> setContainerHover(false)}
            onTouchStart={()=> setContainerHover(true)}
            onTouchEnd={()=> setContainerHover(false)}
            {...props}>
            <StyledImageWrapper secondarycolor={secondary}>
                <StyledIcon
                    icon={iconName as IconName}
                    primarycolor={primary}
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
