import styled from "styled-components";
import Button from "Components/atoms/Button";
import Link from "Components/atoms/Link/index";
import PageTemplate from "templates/PageTemplate/PageTemplate";
import AuthForm from "templates/FormTemplate";
import Label from "Components/atoms/Label/index";
import { BoxShadow, FlexCenter, scrollBar } from "styles/Mixins";
import { AuthPhoto } from "assets";

export const StyledContainer = styled(PageTemplate)`
  ${FlexCenter};
  ${scrollBar};
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  padding: 50px 0;
  
  @media (min-height: 600px) {
    justify-content: center;
  }
`;

export const StyledAuthForm = styled(AuthForm)`
  ${BoxShadow};
  display: flex;
  width: 280px;
  height: auto;
  border-radius: 5px;
  @media (min-width: 600px) {
    width: 340px;
  }
`;

export const StyledButton = styled(Button)`
    width: 100%;
    max-width: 340px;
`;

export const StyledLink = styled(Link)`
  width: auto;
`;

export const StyledLabel = styled(Label)`
  align-self: flex-start;
`;

export const StyledPhoto = styled(AuthPhoto)`
  display: none;
  @media (min-width: 850px) and (min-height: 600px) {
    display: unset;
    position: absolute;
    width: 425px;
    height: 425px;
    left: -100px;
    top: 48%;
    transform: translate(0, -50%) ;
  }
`;
