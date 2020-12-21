import styled from "styled-components";
import Button from "Components/atoms/Button";
import colors from "styles/colors";
import { FlexColumn, FlexCenter } from "styles/mixins";
import FormFieldTemplate from "templates/FormFieldTemplate";

export const StyledContainer = styled.div`
  ${FlexColumn};
  height: 100%;
  background-color: ${colors.Gray100};
  overflow: auto;
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const StyledList = styled.ul`
  display: grid; 
  height: auto;
  list-style: none;
  grid-gap: 5px;
`;

export const StyledListItem = styled.li``;

export const StyledButton = styled(Button)`
    ${FlexCenter};
    width: auto;
    padding: 0 20px;
    margin: 0;
    margin-left: 10px;
`;

export const StyledFormField = styled(FormFieldTemplate)`
    margin: 0;
`;

