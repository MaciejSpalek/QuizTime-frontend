import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter } from "styles/mixins";

export const StyledNavbar = styled.nav`
  position: absolute;
  top: 0;
  ${FlexCenter};
  justify-content: space-between;
  height: 60px;
  padding: 5px 10px;
  background-color: ${colors.Gray100};
  border-bottom: 2px solid ${colors.Gray80};
`;
