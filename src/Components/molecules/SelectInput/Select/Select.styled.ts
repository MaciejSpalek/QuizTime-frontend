import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexCenter, FlexColumn, scrollBar } from 'styles/Mixins';

export const StyledWrapper = styled.div`
  border-radius: 4px;
  width: 100%;
  height: fit-content;
  border: 2px solid ${colors.Gray80};
  background-color: ${colors.White};
`;

export const StyledSelectCaption = styled.span`
  color: ${colors.Gray20};
  font-weight: bold;
`;

export const StyledTopWrapper = styled.div`
  ${FlexCenter}; 
  justify-content: space-between;
  height: 45px;
  background-color: ${colors.White};
  padding: 0 10px;
  cursor: pointer;
`;

export const StyledSelect = styled.ul<{isOpen: boolean}>`
  ${FlexColumn}; 
  ${scrollBar};
  align-items: flex-start;
  background-color: ${colors.White};
  height: 180px;
  padding: 0 10px;
  list-style: none;
  overflow: auto;
`;
