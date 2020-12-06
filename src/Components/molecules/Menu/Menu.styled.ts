import styled from "styled-components";
import NavLink from "Components/atoms/Link/index";
import { FlexColumn } from "styles/mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "styles/colors";

export const StyledList = styled.ul`
  ${FlexColumn};
  align-items: flex-start;
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 900px;
  background-color: ${colors.White};
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  z-index: 999;
  list-style: none;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  margin-right: 10px;
  color: ${colors.BasicGreen};
`;

export const StyledItem = styled.li`
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${colors.Gray20};
  font-weight: bold;
`;
