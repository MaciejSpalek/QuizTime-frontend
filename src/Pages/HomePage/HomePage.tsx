import React, { useEffect, useState } from 'react';
import { fetchAllQuizzes, fetchUsersNames } from 'services/requests';
import PreloaderScreen from 'Components/molecules/PreloaderScreen';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import SearchPanel from 'Components/molecules/SearchPanel';
import QuizesList from 'Components/molecules/QuizzesList';
import Header from 'Components/molecules/Header';

const HomePage = () => {
  const [quizzes, setQuizes] = useState([]);
  const [users, setUsers] = useState([]);
  const [quizzesFetchStatus, setQuizzesFetch] = useState(false);
  const [usersFetchStatus, setUsersFetch] = useState(false);

  const setQuizzes = async () => {
    fetchAllQuizzes()
      .then(({ data }) => {
        setQuizes(data);
        setQuizzesFetch(true);
      })
  };

  const setUsersNames = async () => {
    fetchUsersNames()
      .then(({ data }) => {
        setUsers(data);
        setUsersFetch(true);
      })
  };

  useEffect(() => {
    setQuizzes();
    setUsersNames();
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