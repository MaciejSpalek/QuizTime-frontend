import React, { useEffect, useState } from "react";
import PageTemplate from "templates/UniversalTemplate";
import QuizesList from "Components/organisms/QuizzesList";
import { fetchCategoryQuizzes } from "services/requests";
import { TCategoryPage } from "./CategoryPage.model";
import { StyledPreloaderScreen } from "../ProfilePage/ProfilePage.styled";

const CategoryPage = ({ match }: TCategoryPage) => {
  const [quizzesFetchStatus, setQuizzesFetch] = useState(false);
  const [quizzes, setQuizes] = useState([]);

  const setQuizzes = () => {
    fetchCategoryQuizzes(match.params.category).then(({ data }) => {
      setQuizes(data);
      setQuizzesFetch(true);
    });
  };

  useEffect(() => {
    setQuizzes();
  }, []);

  return (
    <PageTemplate>
      {quizzesFetchStatus ? (
        <QuizesList quizzes={quizzes} title={match.params.category} />
      ) : (
        <StyledPreloaderScreen />
      )}
    </PageTemplate>
  );
};

export default CategoryPage;
