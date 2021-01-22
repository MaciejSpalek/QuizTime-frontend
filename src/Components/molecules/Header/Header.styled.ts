import Paragraph from "Components/atoms/Paragraph";
import styled from "styled-components";
import colors from "styles/Colors";
import { FlexCenter, FlexColumn } from "styles/Mixins";
import { HeaderIcon } from "assets";

export const StyledHeader = styled.header`
  position: relative;
  ${FlexCenter};
  align-items: flex-start;
  height: calc(100vh - 2 * 60px);
  min-height: 460px;
  background-color: ${colors.Gray120};
  border-bottom: 2px solid ${colors.Gray80};
  padding: 10px;
  overflow: hidden;
`;

export const StyledWrapper = styled.div`
  ${FlexColumn};
  align-items: flex-start;
`;

export const StyledHeading = styled.h1`
  position: relative;
  font-size: 50px;
  line-height: 1.2;
  color: ${colors.Gray20};
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 105%;
    height: 1px;
    background-color: ${colors.Gray60};
  }
  @media (min-width: 600px) {
    font-size: 65px;
  }

  @media (min-height: 1024px) and (orientation: portrait) {
    font-size: 90px;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 22px;
  font-weight: normal;
  line-height: 1.2;
  color: ${colors.Gray40};
  @media (min-width: 600px) {
    font-size: 28px;
  }

  @media (min-height: 1024px) and (orientation: portrait) {
    font-size: 36px;
  }
`;

export const StyledHeaderIcon = styled(HeaderIcon)`
  position: absolute;
  bottom: -36px;
  right: -120px;
  width: 400px;
  height: 400px;

  @media (min-width: 600px) {
    bottom: -46px;
    right: -150px;
    width: 520px;
    height: 520px;
  }

  @media (min-width: 900px) {
    bottom: -60px;
    right: -180px;
    width: 680px;
    height: 680px;
  }

  @media (min-height: 680px) and (orientation: portrait) {
    bottom: -46px;
    right: -180px;
    width: 520px;
    height: 520px;
  }

  @media (min-height: 1024px) and (orientation: portrait) {
    bottom: -70px;
    right: -180px;
    width: 800px;
    height: 800px;
  }
`;
