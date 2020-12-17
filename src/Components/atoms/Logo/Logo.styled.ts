import styled from "styled-components";
import colors from "styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexCenter } from "styles/mixins";

export const StyledWrapper = styled.div`
  ${FlexCenter}
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${colors.BasicGreen};
  transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1) ;
  :hover {
    transform: rotate(360deg) scale(.9);
  }
`;

export const StyledLogo = styled(FontAwesomeIcon)`
  color: ${colors.White};
  font-size: 36px;
`;
