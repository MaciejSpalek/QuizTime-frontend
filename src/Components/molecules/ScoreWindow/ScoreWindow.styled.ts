import styled from 'styled-components';
import colors from 'styles/colors';
import PageTemplate from 'templates/PageTemplate';

export const StyledContainer = styled(PageTemplate)`
    /* position: fixed;
    top: 0;
    left: 0; */
`;

export const StyledScore = styled.span`
    font-size: 24px;
    color: ${colors.Gray20};
`;