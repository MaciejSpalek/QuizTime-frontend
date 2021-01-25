import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter } from "styles/Mixins";

export const StyledWrapper = styled.div`
  ${FlexCenter};
  width: auto;
  height: auto;
  margin-left: 20px;

  label {
    position: relative;
    cursor: pointer;
    ::before {
      content: "";
      position: absolute;
      right: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid ${colors.BasicGreen};
      transform: translate(0, -50%);
      transition: 0.3s ease-in-out;
      background-color: ${colors.White};
    }
    ::after {
      content: "";
      position: absolute;
      right: 0;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      transform: translate(0, -50%);
      background-color: ${colors.BasicGreen};
      transition: 0.3s ease-in-out;
      opacity: 0;
      margin-right: 4px;
    }
  }
`;

export const StyledRadioButton = styled.input`
  opacity: 0;
  :checked ~ label::after {
    opacity: 1;
  }
`;
