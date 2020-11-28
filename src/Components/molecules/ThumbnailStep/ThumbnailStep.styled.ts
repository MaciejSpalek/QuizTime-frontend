import styled from 'styled-components'
import { FlexColumn } from 'styles/Mixins'
import QuizThumbnail from '../QuizTestimonial'

export const StyledContainter = styled.div`
    ${FlexColumn};
    height: 100%;
    background-color: white;
    overflow: auto;
`

export const StyledQuizThumbnail = styled(QuizThumbnail)`
    margin-bottom: 20px;
`