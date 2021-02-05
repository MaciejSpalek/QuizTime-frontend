import styled, { css } from "styled-components";
import colors from "styles/colors";
import Spinner from '../Spinner';
import { FlexCenter } from "styles/Mixins";

const ButtonStyle = css`
  position: relative;
  min-height: 45px;
  max-width: 300px;
  font-size: 24px;
  font-weight: bold;
  font-size: 22px;
  border-radius: 5px;
  overflow: hidden;
  padding: 0 5px;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  :hover {
    transform: scale(1.025);
  }
`;

export const StyledButton = styled.button.attrs((props) => ({
  isDisabled: props.disabled,
}))`
  ${ButtonStyle};
  background-color: ${({ isDisabled }) => isDisabled ? colors.DarkGreen : colors.BasicGreen};
  color: ${({ isDisabled }) => (isDisabled ? colors.Gray60 : colors.White)};
`;


export const StyledWrapper = styled.div`
  ${FlexCenter};
`;

export const StyledSpinner = styled(Spinner)<{ isDisabled: boolean }>`
    font-size: 14px;
    width: 26px;
    height: 26px;
    margin-right: 5px;
    color: ${colors.Gray60};
`;
