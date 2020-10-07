import styled from 'styled-components';
import { FlexCenter } from 'theme/Mixins';

export const StyledPagination = styled.div`
    ${FlexCenter};
    justify-content: center;
    height: 60px;
    background-color: white;
`

export const StyledCenterSquare = styled.div`
    ${FlexCenter};
    width: 90px;
    height: 45px;
    background-color: ${({theme}) => theme.colors.green};
    border-radius: 5px;
    margin: 0 10px;
`

export const StyledCounter = styled.span`
    color: white;
    font-size: 24px;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    font-weight: bold;
`

export const StyledEmptySquare = styled.div`
    min-height: 45px;
    width: 45px;
`