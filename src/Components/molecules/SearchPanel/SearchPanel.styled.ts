import styled from 'styled-components';
import colors from 'styles/Colors';
import Input from 'Components/atoms/Input/Input';
import { FlexCenter, FlexColumn } from 'styles/Mixins';

export const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${FlexCenter};
    width: 100%;
    height: 60px;
    justify-content: space-between;
    background-color: ${colors.Gray100};
    padding: 10px;
`;

export const StyledInputWrapper = styled.div`
    position: relative;
    ${FlexColumn};
    width: 100%;
    border: 2px solid ${colors.Gray80};
    border-radius: 5px;
`;


export const StyledInput = styled(Input)`
    border: none;

`;

