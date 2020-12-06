import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexCenter } from 'styles/mixins';
import Button from 'Components/atoms/Button';


export const StyledIcon = styled(FontAwesomeIcon)<{ primary: string }>`
  font-size: 120px;
  color: ${({ primary }) => primary};
  margin-bottom: 5px;
`;


export const StyledPageTemplate = styled(PageTemplate)`
  justify-content: center;
`;

export const StyledWrapper = styled.div<{ secondary: string }>`
    ${FlexCenter};
    justify-content: space-evenly;
    flex-direction: column;
    background-color: ${({ secondary }) => secondary};
    border-radius: 5px;
    width: 200px;
    height: 200px;
    margin-bottom: 5px;
`;


export const StyledText = styled.span<{ secondary: string }>`
  font-size: 30px;
  color: ${({ secondary }) => secondary};
`;

export const StyledButton = styled(Button)`
  width: 200px;
`;
