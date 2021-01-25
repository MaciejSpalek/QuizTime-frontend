import styled from "styled-components";
import FormField from "templates/FormFieldTemplate/FormFieldTemplate";
import ErrorMessage from "Components/atoms/ErrorMessage";
import colors from "styles/colors";
import { FlexColumn, FlexCenter } from "styles/Mixins";

export const StyledInputField = styled(FormField)`
  ${FlexCenter};
  flex-direction: row;
  margin: 5px 0;
  background-color: ${colors.Gray120};
  label {
    margin-right: 5px;
  }
`;

export const StyledWrapper = styled.div`
  ${FlexColumn};
  flex-direction: column;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-left: 60px;
`;
