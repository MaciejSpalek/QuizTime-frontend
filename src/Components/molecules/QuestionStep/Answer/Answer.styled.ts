import RadioButton from "Components/atoms/RadioButton";
import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter } from "styles/mixins";

export const StyledAnswer = styled.div<{ isSelect: boolean }>`
  position: relative;
  ${FlexCenter};
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  min-height: 65px;
  padding: 0 18px;
  border: 2px solid
    ${({ isSelect }) => (isSelect ? colors.BasicGreen : colors.Gray80)};
`;

export const StyledLegend = styled.span<{ isSelect: boolean }>`
  position: absolute;
  top: -12px;
  left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ isSelect }) => (isSelect ? colors.BasicGreen : colors.Gray20)};
  background-color: ${colors.White};
  padding: 0 10px;
`;

export const StyledContent = styled.span`
  color: ${colors.Gray40};
  font-weight: normal;
  font-size: 16px;
`;

export const StyledRadioButton = styled(RadioButton)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  label {
    width: 100%;
    height: 100%;
    ::before {
      display: none;
      border: none;
    }
    ::after {
      display: none;
      border: none;
    }
  }
  /* input {
    border: 1px solid black;
    opacity: 1;
  } */
`;
