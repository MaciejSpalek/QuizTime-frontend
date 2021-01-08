import styled from "styled-components";
import Button from "Components/atoms/Button";
import Link from "Components/atoms/Link/index";
import PageTemplate from "templates/PageTemplate/PageTemplate";
import AuthForm from "templates/FormTemplate";
import Label from "Components/atoms/Label/index";
import { BoxShadow, FlexCenter } from "styles/Mixins";
import { AuthPhoto } from "assets";

export const StyledContainer = styled(PageTemplate)`
  position: relative;
  ${FlexCenter};
  width: 100%;
  overflow: hidden;
`;

export const StyledAuthForm = styled(AuthForm)`
  max-width: 300px;
  height: auto;
  border-radius: 5px;
  ${BoxShadow};
  z-index: 2;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const StyledLink = styled(Link)`
  width: auto;
`;

export const StyledLabel = styled(Label)`
  align-self: flex-start;
`;

export const StyledPhoto = styled(AuthPhoto)`
  display: none;
  @media (min-width: 900px) {
    display: unset;
    position: absolute;
    right: 0;
    width: 650px;
  }
`;
