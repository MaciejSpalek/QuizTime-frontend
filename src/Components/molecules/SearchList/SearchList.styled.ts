import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexColumn } from 'styles/Mixins';

export const StyledList = styled.ul`
    position: absolute;
    top: 100%;
    ${FlexColumn};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-height: 200px;
    background-color: ${colors.White};
    padding: 5px 10px;
    list-style: none;
    z-index: 999;
    overflow: auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    

`;