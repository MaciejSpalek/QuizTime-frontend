import styled from 'styled-components'
import { FlexColumn } from '../../../theme/Mixins'
import QuizThumbnail from '../QuizTestimonial'

export const StyledContainter = styled.div`
    ${FlexColumn};
    height: 100%;
    background-color: white;
    padding: 5px 10px;
    overflow-y: scroll;
`

export const StyledQuizThumbnail = styled(QuizThumbnail)`
    margin-bottom: 20px;
`