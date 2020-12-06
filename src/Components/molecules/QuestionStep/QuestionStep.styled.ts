import styled from "styled-components";
import colors from "styles/colors";
import Paragraph from "Components/atoms/Paragraph";
import { FlexCenter, FlexColumn } from "styles/mixins";

export const StyledContainer = styled.div`
  ${FlexColumn};
  justify-content: center;
  height: calc(100vh - 2 * 60px);
  border: 1px solid red;
`;

export const StyledQuestionWrapper = styled.div`
  ${FlexCenter};
  width: 100%;
  height: 100px;
  border: 2px solid ${colors.Gray80};
position: relative;
`;

export const StyledWrapperTitle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: ${colors.Gray20};
`;

export const StyledContent = styled(Paragraph)`
  color: ${colors.Gray40};
  font-size: 20px;
`;
