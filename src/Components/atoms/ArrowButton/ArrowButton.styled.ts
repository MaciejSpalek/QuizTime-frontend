import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { FlexCenter } from 'theme/Mixins';

export const StyledArrowButton = styled.button`
    ${FlexCenter};
    min-height: 45px;
    width: 45px;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 5px;
    border: none;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    padding: 0 5px;
    margin: 10px 0;
    cursor: pointer;
`

export const StyledIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 24px;
`