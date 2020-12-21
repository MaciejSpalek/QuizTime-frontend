import styled from "styled-components";
import Paragraph from "Components/atoms/Paragraph";
import Spinner from 'Components/atoms/Spinner';
import { AbbreviateText, FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "styles/colors";

export const StyledContainer = styled.div<{ primarycolor: string }>`
  ${FlexCenter};
  min-width: 200px;
  position: relative;
  background-color: ${({ primarycolor }) => primarycolor};
  border-radius: 4px;
`;

export const StyledImageWrapper = styled.picture<{ secondarycolor: string }>`
  ${FlexCenter};
  flex-direction: column;
  flex: 1;
  height: 100%;
  min-height: 140px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${({ secondarycolor }) => secondarycolor};
`;

export const StyledTextWrapper = styled.div`
  ${FlexCenter};
  flex: 2;
  flex-direction: column;
  padding: 10px;
`;

export const StyledTitle = styled(Paragraph)`
  ${AbbreviateText};
  color: white;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
`;

export const StyledScore = styled(Paragraph)<{ color: string }>`
  color: white;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

export const StyledIcon = styled(FontAwesomeIcon)<{ primarycolor: string }>`
  font-size: 56px;
  color: ${({ primarycolor }) => primarycolor};
  margin-bottom: 5px;
`;

export const StyledAuthorTag = styled(Paragraph)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 16px;
  color: white;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

export const StyledSpinner = styled(Spinner)`
  width: 30px;
  height: 30px;
  color: ${colors.White};
`;
