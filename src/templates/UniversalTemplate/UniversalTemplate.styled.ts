import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter, FlexColumn, scrollBar } from 'styles/Mixins';

export const StyledWrapperTemplate = styled.div`
  ${FlexColumn};
  ${scrollBar};
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 60px;
  height: calc(100vh - 60px);
  background-color: ${colors.Gray100};
  overflow-x: hidden;
  overflow-y: auto;
`;

export const StyledPlaceholderTemplate = styled.div`
  ${FlexCenter};
  flex-direction: column;
  min-height: calc(100vh - 4*60px);
  background-color: ${colors.Gray120};
`;

export const StyledPageTemplate = styled.div`
  ${FlexCenter};
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  min-height: calc(100vh - 2*60px);
  background-color: ${colors.Gray120};
`;

export const StyledMainTemplate = styled.main`
  ${FlexColumn};
  justify-content: flex-start;
  max-width: 900px;
`;
