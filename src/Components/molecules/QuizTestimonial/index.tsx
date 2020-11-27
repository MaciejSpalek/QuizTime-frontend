import React from 'react'
import { IQuizTemplate } from 'Interfaces/quizInterfaces'
import { 
    StyledContainer, 
    StyledTextWrapper,
    StyledImageWrapper, 
    StyledTitle,
    StyledScore,
    StyledIcon,
    StyledAuthorTag
} from './index.styled'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { getScore } from 'helpers/getters';
type Props = {
    parameters: IQuizTemplate
}

 const QuizThumbnail = ({ parameters, ...props }: Props)=> {
    const { 
        author,
        title, 
        iconName,
        colors,
        amountOfQuestions
    } = parameters;

  

    return (
        <StyledContainer {...props} primarycolor={colors.primary}>
            <StyledImageWrapper secondarycolor={colors.secondary}>
                <StyledIcon 
                    icon={iconName as IconName} 
                    primarycolor={colors.primary}
                />
                <StyledScore 
                    text={getScore(+`${amountOfQuestions}`)}
                    color={colors.primary}
                />
            </StyledImageWrapper>
            <StyledTextWrapper>
                <StyledTitle text={title} />
                <StyledAuthorTag text={author} />
            </StyledTextWrapper>
        </StyledContainer>
    )
}

export default QuizThumbnail
