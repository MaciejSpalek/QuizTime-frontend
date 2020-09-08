import React from 'react'
import { StyledContainer } from './index.styled'
import QuizesList from '../../molecules/QuizesList/index'

const QuizesWrapper = ()=> {
    return (
        <StyledContainer>
            <QuizesList quizes={[]} />
        </StyledContainer>
    )
}

export default QuizesWrapper
