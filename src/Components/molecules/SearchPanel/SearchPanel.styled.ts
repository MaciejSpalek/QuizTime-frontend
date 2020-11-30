import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter } from 'styles/mixins';

export const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${FlexCenter};
    width: 100%;
    height: 60px;
    justify-content: space-between;
    background-color: ${colors.White};
    border-bottom: 2px solid ${colors.Gray80};
    padding: 10px;
`;