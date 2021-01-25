import styled from "styled-components";
import NavLink from "Components/atoms/Link";
import colors from "styles/colors";
import { FlexCenter, FlexColumn } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContainer = styled.div`
  ${FlexColumn};
  justify-content: space-between;
  position: fixed;
  left: 50%;
  top: 60px;
  transform: translate(-50%, 0);
  max-width: 900px;
  z-index: 9999999;
  @media (min-width: 800px) {
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
  @media (min-width: 800px) {
    flex-direction: row;
    background-color: ${colors.White};
    padding: 0;
    height: 100%;
  }
`;

export const StyledItem = styled.li`
  position: relative;
  width: 100%;
  overflow: hidden;
  :before {
    content: "";
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${colors.BasicGreen};
    transform: translateX(-100%);
    transition: 0.2s ease-in;
    z-index: 1;
    overflow: hidden;
    opacity: 0;
  }

  @media (min-width: 800px) {
    width: auto;
    padding: 0;
    margin: 0 5px;
    :hover::before {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: ${colors.BasicGreen};
  @media only screen and (min-width: 800px) {
    font-size: 28px;
  }
`;

export const StyledIconWrapper = styled.div`
  ${FlexCenter};
  width: 50px;
  margin-right: 5px;
  @media only screen and (min-width: 800px) {
    width: 38px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${colors.Gray20};
  font-weight: bold;
  :link,
  :hover {
    text-decoration: none;
    color: ${colors.Gray20};
  }
  /* padding: 0 5px; */
`;

export const StyledSpan = styled.span`
  color: ${colors.Gray20};
  font-weight: bold;
`;
