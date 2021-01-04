import styled from 'styled-components';
import colors from 'styles/Colors';
import PageTemplate from 'templates/PageTemplate';
import Button from 'Components/atoms/Button';
import Paragraph from 'Components/atoms/Paragraph';
import { FlexColumn } from 'styles/Mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const StyledContainer = styled(PageTemplate)`
    ${FlexColumn};
    justify-content: center;
    height: 100%;
    background-color: ${colors.Gray100};
    overflow: auto;
`;

export const StyledButton = styled(Button)`
  width: 200px;
`;

export const StyledHeading = styled(Paragraph)`
  font-size: 24px;
  width: 250px;
  color: ${colors.Gray20};
  margin-bottom: 50px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${colors.BasicGreen};
  font-size: 130px;
`;
