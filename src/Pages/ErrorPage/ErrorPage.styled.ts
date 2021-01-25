import styled from "styled-components";
import colors from "styles/Colors";
import Button from "Components/atoms/Button";
import { FlexCenter, scrollBar } from "styles/Mixins";
import { ErrorIcon } from "assets";

export const StyledContainer = styled.div`
  ${scrollBar};
  ${FlexCenter};
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100vh - 60px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px;

  @media (max-width: 900px) and (min-height: 470px) {
    justify-content: center;
  }

  @media (min-width: 900px) and (min-height: 620px) {
    justify-content: center;
  }
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  flex-direction: column;
`;

export const StyledText = styled.span`
  color: ${colors.Gray20};
  font-size: 22px;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1000px) {
    font-size: 34px;
  }
`;

export const StyledButton = styled(Button)`
  width: 150px;
  margin-top: 10px;
`;

export const StyledErrorPhoto = styled(ErrorIcon)`
  width: 300px;
  height: 300px;
  min-width: 300px;
  min-height: 300px;
  @media (min-width: 900px) {
    width: 450px;
    height: 450px;
    min-width: 450px;
    min-height: 450px;
  }
`;
