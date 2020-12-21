import styled from "styled-components";
import NavLink from "Components/atoms/Link/index";
import colors from "styles/colors";
import { FlexColumn } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContainer = styled.div`
  ${FlexColumn};
  justify-content: space-between;
  position: fixed;
  left: 50%;
  top: 60px;
  transform: translate(-50%, 0);
  max-width: 900px;
  z-index: 999;
  @media only screen and (min-width: 800px) {
    position: unset;
    width: auto;
    height: 100%;
    transform: translate(0, 0);
  }
`;

export const StyledBackground = styled.div`
  background-color: ${colors.TransparentBlack};
  min-height: 100vh;
  width: 100%;
  z-index: 999;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

export const StyledList = styled.ul`
  ${FlexColumn};
  background-color: ${colors.White};
  padding: 10px;
  list-style: none;
  margin: 0;
  @media only screen and (min-width: 800px) {
    flex-direction: row;
    background-color: ${colors.Gray100};
    padding: 0;
    height: 100%;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  margin-right: 10px;
  color: ${colors.BasicGreen};
  @media only screen and (min-width: 800px) {
    font-size:28px;
  }
`;

export const StyledItem = styled.li`
  width: 100%;
  @media only screen and (min-width: 800px) {
    width: auto;
    padding: 0;
    margin: 0 5px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${colors.Gray20};
  font-weight: bold;
  @media only screen and (min-width: 800px) {
  }
`;
