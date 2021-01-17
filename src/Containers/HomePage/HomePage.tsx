import React, { useEffect, useState } from 'react';
import PreloaderScreen from 'Components/molecules/PreloaderScreen';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import SearchPanel from 'Components/molecules/SearchPanel';
import QuizesList from 'Components/molecules/QuizzesList';
import Header from 'Components/molecules/Header';
import { axiosInstance } from 'services/api';

const HomePage = () => {
  const [quizzes, setQuizes] = useState([]);
  const [users, setUsers] = useState([]);
  const [quizzesFetchStatus, setQuizzesFetch] = useState(false);
  const [usersFetchStatus, setUsersFetch] = useState(false);

  const fetchAllQuizzes = async () => {
    await axiosInstance.get("/quizes/allQuizzes")
      .then(({ data }) => {
        setQuizes(data);
        setQuizzesFetch(true);
      })
  };

  const fetchUsersNames = async () => {
    await axiosInstance.get("/user/allNames")
      .then(({ data }) => {
        setUsers(data);
        setUsersFetch(true);
      })
  };

  useEffect(() => {
    fetchAllQuizzes();
    fetchUsersNames();
  }, []);

  return (
    <PageTemplate>
      <SearchPanel
        quizzes={quizzes}
        users={users}
      />
      <Header />
      {quizzesFetchStatus && usersFetchStatus ?
        <QuizesList quizzes={quizzes} /> :
        <PreloaderScreen />}
    </PageTemplate>
  );
};

export default HomePage;