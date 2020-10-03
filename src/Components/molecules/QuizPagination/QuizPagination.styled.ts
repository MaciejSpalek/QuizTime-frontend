import Paragraph from 'Components/atoms/Paragraph';
import styled from 'styled-components';
import { FlexCenter } from 'theme/Mixins';

export const StyledPagination = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    min-height: 45px;
`
export const StyledCounter = styled.span`
    color: white;
    font-size: 30px;
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