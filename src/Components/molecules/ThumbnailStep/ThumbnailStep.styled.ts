import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexColumn } from 'styles/mixins';
import QuizThumbnail from '../QuizTestimonial/QuizThumbnail';

export const StyledContainter = styled.div`
    ${FlexColumn};
    height: 100%;
    background-color: ${colors.White};
    overflow: auto;
`;

export const StyledQuizThumbnail = styled(QuizThumbnail)`
    margin-bottom: 20px;
`;