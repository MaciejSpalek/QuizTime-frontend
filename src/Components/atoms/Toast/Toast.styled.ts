import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexCenter } from 'styles/mixins';


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

export const StyledToast = styled.div`
  ${FlexCenter};
  width: 240px;
  height: 50px;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0) translateY(200px);
  background-color: ${colors.TransparentBlack};
  animation: ${animation} 3s ease-in-out;
  border-radius: 2px;
  padding: 5px;
  z-index: 999999;
`;

export const StyledText = styled.span`
  font-size: 16px;
  color: ${colors.White};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-right: 5px;
  color: ${colors.White};
`;