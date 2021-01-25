import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexColumn } from 'styles/Mixins';

export const StyledContainer = styled.div`
    ${FlexColumn};
    justify-content: space-between;
    width: 100%;
    min-height: calc(100vh - 2*60px);
    background-color: ${colors.White};
`;