import styled from 'styled-components';
import colors from 'styles/Colors';

export const StyledList = styled.ul`
    position: absolute;
    top: calc(100% + 5px);
    display: grid;
    max-height: 200px;
    width: 100%;
    background-color: ${colors.White};
    margin: 0;
    z-index: 999;
    list-style: none;
    overflow: auto;
    border-radius: 5px;
    box-shadow: 0 0 5px .1px ${colors.TransparentBlack};
`;

export const StyledListItem = styled.li`
    width: 100%;
    background-color: ${colors.White};
    padding: 5px;
`;
