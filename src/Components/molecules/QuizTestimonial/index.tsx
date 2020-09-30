import React from 'react'
import { Quiz } from '../../../Interfaces/quizInterfaces'
import { 
    StyledBottomWrapper,
    StyledImageWrapper, 
    StyledTextWrapper,
    StyledTopWrapper,
    StyledContainer, 
    StyledGreenLabel,
    StyledTitle,
    StyledScore
} from './index.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    parameters: Quiz
}

 const QuizThumbnail = ({ parameters }: Props)=> {
    const { 
        author,
        name, 
        image: Image,
        score,
        color
    } = parameters
    return (
        <StyledContainer>
            <StyledTopWrapper color={color}>
                <StyledImageWrapper>
                    <FontAwesomeIcon icon={'home'} />
                </StyledImageWrapper>
                <StyledTextWrapper>
                    <StyledTitle 
                        text={name}
                        isBold={true}
                        textAlign={"center"}
                    />
                    <StyledScore 
                        text={score}
                        isBold={false}
                        textAlign={"center"}
                    />
                </StyledTextWrapper>
            </StyledTopWrapper>
            <StyledBottomWrapper>
                <StyledGreenLabel> nowy </StyledGreenLabel>
                <span> {author} </span>
            </StyledBottomWrapper>
        </StyledContainer>
    )
}

export default QuizThumbnail
