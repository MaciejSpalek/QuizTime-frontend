import styled from 'styled-components'
import { FlexColumn } from '../../../theme/Mixins'
import QuizThumbnail from '../../molecules/QuizTestimonial'

export const StyledContainter = styled.div`
    ${FlexColumn};
    height: auto;
    padding: 5px 10px;
    overflow-y: scroll;
    height: 100%;
    background-color: white;
`

export const StyledQuizThumbnail = styled(QuizThumbnail)`
    margin-bottom: 20px;
`