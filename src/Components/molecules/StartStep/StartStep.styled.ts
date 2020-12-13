import styled, { keyframes } from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexCenter } from 'styles/mixins';
import Button from 'Components/atoms/Button';

const anim = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(-5deg) scale(1.1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)<{ primary: string }>`
  font-size: 120px;
  color: ${({ primary }) => primary};
  margin-bottom: 5px;
  :hover {
    animation: ${anim} .5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }
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
