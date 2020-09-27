import React from 'react'
import Image from '../../atoms/Image/index'
import Paragraph from '../../atoms/Paragraph/index'
import { Quiz } from '../../../Interfaces/quizInterfaces'
import { 
    StyledBottomWrapper,
    StyledImageWrapper, 
    StyledTextWrapper,
    StyledTopWrapper,
    StyledContainer, 
    StyledGreenLabel 
} from './index.styled'


type Props = {
    parameters: Quiz
}

 const QuizThumbnail = ({ parameters }: Props)=> {
    const { 
        author,
        name, 
        image,
        score,
        color
    } = parameters
    
    return (
        <StyledContainer>
            <StyledTopWrapper>
                <StyledImageWrapper>
                    <Image 
                        url={image}
                        alt={"Znana osoba"}
                        width={"45px"}
                        height={"45px"}
                    />
                </StyledImageWrapper>
                <StyledTextWrapper>
                    <Paragraph 
                        text={name}
                        isBold={true}
                        textAlign={"center"}
                    />
                    <Paragraph 
                        text={score}
                        isBold={false}
                        textAlign={"center"}
                    />
                </StyledTextWrapper>
            </StyledTopWrapper>
            <StyledBottomWrapper>
                <StyledGreenLabel>
                    nowy
                </StyledGreenLabel>
                <span> {author} </span>
            </StyledBottomWrapper>
        </StyledContainer>
    )
}

export default QuizThumbnail
