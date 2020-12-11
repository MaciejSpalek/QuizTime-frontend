import styled from 'styled-components';
import colors from 'styles/colors';
import PageTemplate from 'templates/PageTemplate';
import { FlexCenter } from 'styles/mixins';
import Button from 'Components/atoms/Button';


export const StyledContainer = styled(PageTemplate)`
    padding: 20px 10px;
`;


export const StyledTopWrapper = styled.div`
    ${FlexCenter}
    flex-direction: column;
    border: 2px solid ${colors.Gray80};
    border-radius: 5px;
    background-color: ${colors.White};
    padding: 20px;
`;

export const StyledText = styled.span`
    font-size: 24px;
    color: ${colors.Gray20};
`;

export const StyledScore = styled.span`
    font-size: 48px;
    color: ${colors.BasicGreen};
`;

export const StyledList = styled.ul`
    list-style: none;
`;

export const StyledListItem = styled.li`

`;

export const StyledButton = styled(Button)`
    width: 300px;

`;

