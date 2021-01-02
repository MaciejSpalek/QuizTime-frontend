import React from 'react'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { IQuizThumbnail } from './QuizThumbnail.model';
import {
    StyledImageWrapper,
    StyledTextWrapper,
    StyledContainer,
    StyledAuthorTag,
    StyledSpinner,
    StyledTitle,
    StyledScore,
    StyledIcon
} from './QuizThumbnail.styled';


const QuizThumbnail = ({ isHover, score, parameters, ...props }: IQuizThumbnail) => {
    const {
        author,
        title,
        iconName,
        colors: { primary, secondary }
    } = parameters;

    return (
        <StyledContainer {...props} primarycolor={primary} isHover={!!isHover}>
            <StyledImageWrapper secondarycolor={secondary}>
                <StyledIcon
                    icon={iconName as IconName}
                    primarycolor={primary}
                />
                {score ?
                    <StyledScore 
                        text={`${score}`} 
                        color={primary} 
                    /> :
                    <StyledSpinner />
                }
            </StyledImageWrapper>
            <StyledTextWrapper>
                <StyledTitle text={title} />
                <StyledAuthorTag text={author} />
            </StyledTextWrapper>
        </StyledContainer>
    );
};

export default QuizThumbnail;
