import styled from "styled-components";
import colors from "styles/Colors";
import { FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContainer = styled.div`
  ${FlexCenter};
  justify-content: flex-start;
  background-color: ${colors.White};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${colors.Gray20};
`;

export const StyledIconWrapper = styled.div`
  ${FlexCenter};
  background-color: ${colors.Gray80};
  width: 35px;
  height: 35px;
  border-radius: 5px;
  margin-right: 5px;
`;

export const StyledName = styled.span`
  font-size: 20px;
  color: ${colors.Gray20};
`;
