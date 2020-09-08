import React from 'react'
import { StyledList } from './index.styled'
import QuizTestimonial from '../QuizTestimonial/index'
import { Quiz } from '../../../Interfaces/quizInterfaces'

type Props = {
    quizes: Quiz[]
}

const QuizesList = ({ quizes }: Props) => {
    return (
        <StyledList>
            {quizes.map(data => <QuizTestimonial key={data.id} parameters={data}/>)}
        </StyledList>
    )
}

export default QuizesList
