import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledIconWrapper = styled.div`
  ${FlexCenter};
  background-color: ${colors.Gray80};
  width: 35px;
  height: 35px;
  border-radius: 5px;
  margin-right: 5px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${colors.Gray20};
`;