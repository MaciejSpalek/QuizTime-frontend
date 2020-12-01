import styled from 'styled-components';
import colors from 'styles/colors';
import QuizThumbnail from '../QuizThumbnail';
import { FlexColumn } from 'styles/mixins';

export const StyledContainter = styled.div`
    ${FlexColumn};
    height: 100%;
    background-color: ${colors.White};
    overflow: auto;
`;

export const StyledQuizThumbnail = styled(QuizThumbnail)`
    margin-bottom: 20px;
`;