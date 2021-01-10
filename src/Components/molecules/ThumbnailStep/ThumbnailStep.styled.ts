import styled from "styled-components";
import colors from "styles/Colors";
import QuizThumbnail from "../QuizThumbnail";
import CategorySelect from "../SelectInput";
import ColorSelect from "../SelectInput";
import { FlexColumn } from "styles/Mixins";
import FormFieldTemplate from "templates/FormFieldTemplate";

export const StyledContainter = styled.div`
  ${FlexColumn};
  height: 100%;
  background-color: ${colors.Gray120};
  overflow: auto;
`;

export const StyledQuizThumbnail = styled(QuizThumbnail)`
  margin-bottom: 19px;
  height: 158px;
`;

export const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  background-color: ${colors.Gray120};
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "titleInput titleInput"
      "categorySelect colorSelect";
  }
`;

export const StyledFormField = styled(FormFieldTemplate)`
  margin: 0;
  background-color: ${colors.Gray120};
  @media screen and (min-width: 600px) {
    grid-area: titleInput;
  }
`;

export const StyledCategorySelect = styled(CategorySelect)`
  @media screen and (min-width: 600px) {
    margin: 0;
    grid-area: categorySelect;
  }
`;

export const StyledColorSelect = styled(ColorSelect)`
  @media screen and (min-width: 600px) {
    margin: 0;
    grid-area: colorSelect;
  }
`;
