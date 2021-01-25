import IconButton from "Components/atoms/IconButton";
import { FlexCenter } from "styles/Mixins";
import styled from "styled-components";
import colors from "styles/colors";

export const StyledPagination = styled.div`
  ${FlexCenter};
  justify-content: center;
  min-height: 60px;
  background-color: ${colors.Gray120};
`;

export const StyledCenterSquare = styled.div`
  ${FlexCenter};
  width: 90px;
  height: 45px;
  background-color: ${colors.BasicGreen};
  border-radius: 5px;
  margin: 0 10px;
`;

export const StyledCounter = styled.span`
  color: white;
  font-size: 24px;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  font-weight: bold;
`;

export const StyledEmptySquare = styled.div`
  min-height: 45px;
  width: 45px;
`;

export const StyledIconButton = styled(IconButton)`
  background-color: transparent;
  min-height: 45px;
  width: 45px;
  transition: .3s ease-in-out;
  svg {
    color: ${colors.BasicGreen};
    font-size: 40px;
    transition: .3s ease-in-out;
    :hover {
      transform: scale(1.15);
      color: ${colors.DarkGreen};
    }
  }
`;
