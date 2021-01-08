import styled from "styled-components";
import colors from "styles/Colors";
import Button from "Components/atoms/Button";
import { FlexCenter } from "styles/Mixins";
import { ErrorPhoto } from "assets";

export const StyledContainer = styled.div`
  ${FlexCenter};
  flex-direction: column;
  height: 100%;
  padding: 10px 5px;
`;

export const StyledText = styled.span`
  color: ${colors.Gray20};
  font-size: 22px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1000px) {
    font-size: 36px;
  }
`;

export const StyledButton = styled(Button)`
  width: 150px;
  margin-top: 10px;
`;

export const StyledErrorPhoto = styled(ErrorPhoto)`
  width: 300px;
  height: 300px;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;
