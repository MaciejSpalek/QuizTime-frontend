import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexCenter, FlexColumn } from 'styles/Mixins';


export const StyledContainer = styled.div`
    ${FlexCenter};
    width: 100%;
    height: 60px;
    justify-content: space-between;
    background-color: ${colors.Gray120};
    padding: 10px;
`;

export const StyledInputWrapper = styled.div`
    position: relative;
    ${FlexColumn};
    width: 100%;
    background-color: ${colors.White};
    border-radius: 5px;
`;
