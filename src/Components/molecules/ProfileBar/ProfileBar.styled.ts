import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter } from 'styles/mixins';

export const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    height: 60px;
`;

export const StyledUserTag = styled.span`
    color: ${colors.Gray20};
    font-size: 20px;
    font-weight: bold;
    margin-right: 30px;
`;