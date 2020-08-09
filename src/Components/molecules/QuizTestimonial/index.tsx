import React from 'react'
import Image from '../../atoms/Image/index'
import Paragraph from '../../atoms/Paragraph/index'
import { 
    StyledBottomWrapper,
    StyledImageWrapper, 
    StyledTextWrapper,
    StyledTopWrapper,
    StyledContainer, 
    StyledGreenLabel 
} from './index.styled'


interface Props {
    quizData: {
        id: number;
        image: any;
        title: string;
        author: string;
        isDone: boolean;
        score: string;
    }
}

 const QuizThumbnail: React.FC<Props> = ({quizData})=> {
    const { 
        author,
        title, 
        isDone, 
        image,
        score
    } = quizData;
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
                        text={title}
                        isBold={true}
                        textAlign={"center"}
                        isMessage={false}
                    />
                    <Paragraph 
                        text={score}
                        isBold={false}
                        textAlign={"center"}
                        isMessage={false}
                    />
                </StyledTextWrapper>
            </StyledTopWrapper>
            <StyledBottomWrapper>
                <StyledGreenLabel>
                    nowy
                </StyledGreenLabel>
                <p> {author} </p>
            </StyledBottomWrapper>
        </StyledContainer>
    )
}

export default QuizThumbnail
