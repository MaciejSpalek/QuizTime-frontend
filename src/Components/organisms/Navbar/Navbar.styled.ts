import styled from "styled-components";
import colors from "styles/Colors";
import { BoxShadow, FlexCenter } from "styles/Mixins";

export const StyledNavbar = styled.nav`
  ${FlexCenter};
  ${BoxShadow};
  height: 60px;
  background-color: ${colors.White};
  z-index: 2;
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  justify-content: space-between;
  max-width: 900px;
  height: 100%;
  padding: 5px 10px;
`;
