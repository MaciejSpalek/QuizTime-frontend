import styled from "styled-components";
import colors from "styles/Colors";
import { FlexCenter } from 'styles/Mixins';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledOption = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  cursor: pointer;
  margin: 5px 0;
  padding: 5px;
`;

export const StyledOptionTitle = styled.span`
  color: ${colors.Gray20};
  pointer-events: none;
`;

export const StyledIconField = styled.div`
  ${FlexCenter};
  border-radius: 5px;
  background-color: ${colors.Gray80};
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const StyledCategoryIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color:  ${colors.Gray20};
`;

export const StyledCheckedSquareIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-right: 10px;
  color: ${colors.BasicGreen};
`;

export const StyledPaletteIcon = styled(FontAwesomeIcon)<{value: string}>`
  font-size: 38px;
  margin-right: 10px;
  color: ${({value}) => value};
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  justify-content: flex-start;
  width: 100%;
`;


