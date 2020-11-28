import styled from "styled-components";
import { FlexColumn } from "../../../styles/mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 40px;
    margin-right: 10px;
    color: ${({theme}) => theme.colors.green};
`

