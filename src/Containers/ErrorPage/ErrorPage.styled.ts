import styled from 'styled-components';
import colors from 'styles/colors';
import Button from 'Components/atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexCenter } from 'styles/mixins';

export const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    height: 100%;
`;

export const StyledText = styled.span`
    color: ${colors.Gray20};
    font-size: 30px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${colors.BasicGreen};
    font-size: 150px;
`;

export const StyledButton = styled(Button)`
    margin-top: 30px;
`;




