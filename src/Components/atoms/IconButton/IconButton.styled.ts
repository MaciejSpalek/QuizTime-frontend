import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexCenter } from 'styles/Mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledIconButton = styled.button`
    ${FlexCenter};
    min-height: 35px;
    width: 35px;
    background-color: ${colors.BasicGreen};
    border-radius: 5px;
    border: none;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    padding: 0 5px;
    cursor: pointer;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 24px;
`;