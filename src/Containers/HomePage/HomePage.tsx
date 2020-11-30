import React, { useEffect, useState } from 'react';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import SearchPanel from 'Components/molecules/SearchPanel';
import QuizesList from 'Components/molecules/QuizzesList';
import { axiosInstance } from 'services/api';
import PreloaderScreen from 'Components/molecules/PreloaderScreen';

const HomePage = () => {
  const [quizzes, setQuizes] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  const fetchAllQuizzes = async () => {
    await axiosInstance.get("/quizes/allQuizzes")
      .then(({ data }) => { 
        setQuizes(data);
        setIsFetch(true) ;
      })
    };

  useEffect(() => {
    fetchAllQuizzes();
  }, []);

  return (
    <PageTemplate>
      <SearchPanel />
      {isFetch ?
        <QuizesList quizzes={quizzes} /> : 
        <PreloaderScreen />}
    </PageTemplate>
  );
};

export default HomePage;