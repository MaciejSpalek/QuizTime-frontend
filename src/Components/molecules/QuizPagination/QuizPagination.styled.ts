import styled from 'styled-components';
import { FlexCenter } from 'theme/Mixins';

export const StyledPagination = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    height: 75px;
    padding: 5px 10px;
    background-color: white;
`

export const StyledCounter = styled.span`
    color: white;
    font-size: 24px;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    font-weight: bold;
`

export const StyledCenterSquare = styled.div`
    ${FlexCenter};
    width: 90px;
    height: 45px;
    background-color: ${({theme}) => theme.colors.green};
    border-radius: 5px;
`

export const StyledEmptySquare = styled.div`
    min-height: 45px;
    width: 45px;
`