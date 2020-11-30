import styled from 'styled-components';
import FormTemplate from 'templates/FormTemplate/FormTemplate';
import QuizPagination from 'Components/molecules/QuizPagination';
import colors from 'styles/colors';
import { FlexColumn } from 'styles/mixins';

export const StyledContainer = styled.div`
    position: relative;
    ${FlexColumn};
    justify-content: space-between;
    width: 100%;
    height: calc(100vh - 2 * 60px);
    height: 100%;
    background-color: ${colors.White};
`;


export const StyledForm = styled(FormTemplate)`
    ${FlexColumn};
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh - 3 * 60px);
`;

export const StyledPagination = styled(QuizPagination)`
    position: absolute;
    top: calc(100vh - 3 * 60px);
`;