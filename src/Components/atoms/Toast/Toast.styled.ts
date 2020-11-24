import styled, { css, keyframes } from 'styled-components';
import Paragraph from '../Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexCenter } from 'theme/Mixins';

const toastStyle = css`
  width: 200px;
  height: 50px;
`;

const animation = keyframes`
  0% {
    transform: translate(-50%, 0) translateY(200px);
  }

  25% {
    transform: translate(-50%, 0) translateY(0);
  }

  75% {
    transform: translate(-50%, 0) translateY(0);
    opacity: 1;
  }

  85% {
    opacity: .3;
  }

  100% {
    transform: translate(-50%, 0) translateY(200px);
    opacity: 0;
  }
`;

export const StyledToast = styled.div<{color: string}>`
  ${FlexCenter};
  ${toastStyle};
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0) translateY(200px);
  background-color: ${({theme}) => theme.colors.transparentBlack};
  animation: ${animation} 3s ease-in-out;
`;

export const StyledText = styled.span`
  font-size: 20px;
  color: ${({theme}) => theme.colors.white};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-right: 5px;
  color: ${({theme}) => theme.colors.white};
`;