import React, { useEffect, useState } from "react";
import PreloaderScreen from "Components/molecules/PreloaderScreen";
import PageTemplate from "templates/UniversalTemplate";
import QuizesList from "Components/organisms/QuizzesList";
import { fetchAllQuizzes } from "services/requests";

const CategoryPage = () => {
  const [quizzesFetchStatus, setQuizzesFetch] = useState(false);
  const [quizzes, setQuizes] = useState([]);

  const setQuizzes = async () => {
    fetchAllQuizzes().then(({ data }) => {
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
        <QuizesList quizzes={quizzes} title="The latest" />
      ) : (
        <PreloaderScreen />
      )}
    </PageTemplate>
  );
};

export default CategoryPage;
