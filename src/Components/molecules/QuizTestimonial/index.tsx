import React from 'react'
import { Quiz } from '../../../Interfaces/quizInterfaces'
import { 
    StyledContainer, 
    StyledTextWrapper,
    StyledImageWrapper, 
    StyledTitle,
    StyledScore,
    StyledIcon,
    StyledAuthorTag
} from './index.styled'

type Props = {
    parameters: Quiz
}

 const QuizThumbnail = ({ parameters }: Props)=> {
    const { 
        author,
        name, 
        iconName,
        score,
        color
    } = parameters;


    return (
        <StyledContainer primarycolor={color.primary}>
            <StyledImageWrapper secondarycolor={color.secondary}>
                <StyledIcon 
                    icon={iconName} 
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
