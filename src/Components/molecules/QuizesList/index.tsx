import React, { useState } from 'react'
import { StyledList } from './index.styled'
import QuizThumbnail from '../QuizTestimonial/index'
import tempImage from '../../../assets/Person.svg'

type Quiz = {
    id: number;
    title: string;
    author: string;
    isDone: boolean;
    image: any;
    score: string;
}

const tempQuizes = [
    {id:1, title: "Zwierzęta", author: "Maciora", isDone: true, image: tempImage, score: "5/12"},
    {id:2, title: "Zwierzęta", author: "Maciora", isDone: true, image: tempImage, score: "5/12"},
    {id:3, title: "Zwierzęta", author: "Maciora", isDone: true, image: tempImage, score: "5/12"},
    {id:4, title: "Zwierzęta", author: "Maciora", isDone: true, image: tempImage, score: "5/12"}
]

const QuizesList = ()=> {
    const [quizes, setQuizes] = useState<Quiz[]>(tempQuizes)
    return (
        <StyledList>
            {quizes.map(quizData => <QuizThumbnail quizData={quizData}/>)}
        </StyledList>
    )
}

export default QuizesList
