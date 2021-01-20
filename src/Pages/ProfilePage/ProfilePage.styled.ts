import PreloaderScreen from "Components/molecules/PreloaderScreen";
import styled from "styled-components";
import colors from "styles/Colors";
import { FlexColumn } from "styles/Mixins";

export const StyledWrapper = styled.div`
  ${FlexColumn};
`;

export const StyledStepWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  background-color: ${colors.Gray120};
`;

export const StyledPreloaderScreen = styled(PreloaderScreen)`
    height: calc(100vh - 2*60px); 
    width: 900px;
    background-color: ${colors.Gray120};
`;