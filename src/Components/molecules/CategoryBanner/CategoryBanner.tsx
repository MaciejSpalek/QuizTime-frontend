import React from "react";
import CategoryItem from "./CategoryItem";
import {
  StyledTopWrapper,
  StyledContainer,
  StyledHeading,
} from "../PopularQuizBanner/PopularQuizBanner.styled";
import { ICategoryBanner } from "./CategoryBanner.model";
import { QuizIcons } from "helpers/constants";
import { StyledCategoryList } from "./CategoryBanner.styled";
import { StyledStrong } from "Components/organisms/QuizzesList/QuizzesList.styled";
import { useHistory } from "react-router";
import { IQuizTemplate } from "Interfaces/quizInterfaces";

const CategoryBanner = ({ quizzes }: ICategoryBanner): JSX.Element => {
  const history = useHistory();
  const openCategory = (category: string) =>
    history.push(`/categories/${category}`);

  const countQuizzes = (quizzes: IQuizTemplate[], category: string) => {
    return quizzes.filter((quiz) => quiz.category === category).length;
  };

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledHeading>
          Categories (<StyledStrong>{QuizIcons.length}</StyledStrong>)
        </StyledHeading>
      </StyledTopWrapper>
      <StyledCategoryList>
        {QuizIcons.map(({ icon, id, title }) => (
          <li key={id} onClick={() => openCategory(title)}>
            <CategoryItem
              icon={icon}
              title={title}
              quizzesCounter={countQuizzes(quizzes, title)}
            />
          </li>
        ))}
      </StyledCategoryList>
    </StyledContainer>
  );
};

export default CategoryBanner;
