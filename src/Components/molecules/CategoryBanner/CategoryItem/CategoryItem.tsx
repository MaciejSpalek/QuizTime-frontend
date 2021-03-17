import { IconName } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { ICategoryItem } from "./CategoryItem.model";
import {
    StyledIconWrapper,
    StyledContainer,
    StyledParagraph,
    StyledIcon,
} from "./CategoryItem.styled";

const CategoryItem = ({ icon, title, quizzesCounter }: ICategoryItem): JSX.Element => {
  return (
    <StyledContainer>
      <StyledIconWrapper>
        <StyledIcon icon={icon as IconName} />
      </StyledIconWrapper>
      <StyledParagraph text={`${title} (${ quizzesCounter })`} />
    </StyledContainer>
  );
};

export default CategoryItem;
