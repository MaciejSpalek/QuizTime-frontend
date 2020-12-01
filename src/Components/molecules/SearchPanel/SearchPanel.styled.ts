import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter } from 'styles/mixins';
import { ReadingGlass } from 'assets';

export const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${FlexCenter};
    width: 100%;
    height: 60px;
    justify-content: space-between;
    background-color: ${colors.White};
    border-bottom: 2px solid ${colors.Gray80};
    padding: 10px;
`;

export const StyledReadingGlass = styled(ReadingGlass)`
    width: 25px;
    height: 25px;
    margin: 0 0 0 10px;
`;