import React, { useEffect } from 'react'
import { Quiz } from '../../../Interfaces/quizInterfaces'
import { 
    StyledContainer, 
    StyledTextWrapper,
    StyledImageWrapper, 
    StyledTitle,
    StyledScore,
    StyledIcon
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
                <StyledIcon icon={iconName} primarycolor={color.primary}/>
                <StyledScore 
                    text={score}
                    isBold={false}
                    textAlign={"center"}
                    color={color.primary}
                />
            </StyledImageWrapper>
            <StyledTextWrapper>
                <StyledTitle 
                    text={name}
                    isBold={true}
                    textAlign={"center"}
                />
            <span> {author} </span>

            </StyledTextWrapper>
        </StyledContainer>
    )
}

export default QuizThumbnail
