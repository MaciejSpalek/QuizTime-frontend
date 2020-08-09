import styled from "styled-components";
import { FlexColumn } from "../../../theme/Mixins";

export const StyledMenu = styled.ul`
    ${FlexColumn};
    align-items: flex-start;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    padding: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);    
    z-index: 999;
`
