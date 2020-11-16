import React from 'react'
import { StyledList } from './index.styled'
import QuizTestimonial from '../QuizTestimonial/index'
import { IQuizTemplate } from '../../../Interfaces/quizInterfaces'

type Props = {
    quizes: IQuizTemplate[];
}

const QuizesList = ({ quizes }: Props) => {
    return (
        <StyledList>
            {quizes.map(data => <QuizTestimonial key={data.id} parameters={data}/>)}
        </StyledList>
    )
}

export default QuizesList
