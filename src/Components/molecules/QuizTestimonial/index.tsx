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

type Props = {
    parameters: IQuizTemplate
}

 const QuizThumbnail = ({ parameters, ...props }: Props)=> {
    const { 
        author,
        name, 
        iconName,
        score,
        color
    } = parameters;


    return (
        <StyledContainer {...props} primarycolor={color.primary}>
            <StyledImageWrapper secondarycolor={color.secondary}>
                <StyledIcon 
                    icon={iconName as IconName} 
                    primarycolor={color.primary}
                />
                <StyledScore 
                    text={score}
                    color={color.primary}
                />
            </StyledImageWrapper>
            <StyledTextWrapper>
                <StyledTitle text={name} />
                <StyledAuthorTag text={author} />
            </StyledTextWrapper>
        </StyledContainer>
    )
}

export default QuizThumbnail
