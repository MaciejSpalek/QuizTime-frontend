import styled from "styled-components";
import colors from "styles/Colors";
import { FlexCenter } from "styles/Mixins";

export const StyledNavbar = styled.nav`
  ${FlexCenter};
  position: relative;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: ${colors.White};
  border-bottom: 2px solid ${colors.Gray80};
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  justify-content: space-between;
  max-width: 900px;
  height: 100%;
  padding: 5px 10px;
`;
