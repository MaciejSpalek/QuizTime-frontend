import styled from "styled-components";
import colors from "styles/Colors";
import Button from "Components/atoms/Button";
import Paragraph from "Components/atoms/Paragraph";
import { FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContainer = styled.div`
  ${FlexCenter};
  flex-direction: column;
  background-color: ${colors.Gray120};
`;

export const StyledButton = styled(Button)`
  width: 200px;
  margin-top: 20px;
`;

export const StyledHeading = styled(Paragraph)`
  font-size: 24px;
  width: 250px;
  color: ${colors.Gray20};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${colors.BasicGreen};
  font-size: 130px;
  margin-bottom: 20px;
`;
