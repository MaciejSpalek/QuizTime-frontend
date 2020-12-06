import styled from 'styled-components';
import colors from 'styles/colors';
import PageTemplate from 'templates/PageTemplate';
import { FlexColumn } from 'styles/mixins';
import Button from 'Components/atoms/Button';


export const StyledContainer = styled(PageTemplate)`
    ${FlexColumn};
    height: 100%;
    background-color: ${colors.White};
    overflow: auto;
`;



export const StyledButton = styled(Button)`
  width: 200px;
`;
