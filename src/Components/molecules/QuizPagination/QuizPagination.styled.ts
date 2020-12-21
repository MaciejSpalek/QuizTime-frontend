import styled from 'styled-components';
import { FlexCenter } from 'styles/Mixins';
import IconButton from 'Components/atoms/IconButton';
import colors from 'styles/colors';

export const StyledPagination = styled.div`
    ${FlexCenter};
    justify-content: center;
    height: 60px;
    background-color: ${colors.Gray100};
`;

export const StyledCenterSquare = styled.div<{color: string | undefined}>`
    ${FlexCenter};
    width: 90px;
    height: 45px;
    background-color: ${({ color }) => color ? color : colors.BasicGreen};
    border-radius: 5px;
    margin: 0 10px;
`;

export const StyledCounter = styled.span`
    color: white;
    font-size: 24px;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, .5);
    font-weight: bold;
`;

export const StyledEmptySquare = styled.div`
    min-height: 45px;
    width: 45px;
`;

export const StyledIconButton = styled(IconButton)<{color: string | undefined}>`
    background-color: transparent;
    min-height: 45px;
    width: 45px;
    svg {
        color: ${({ color }) => color ? color : colors.BasicGreen};
        font-size: 40px;
    }
`;

