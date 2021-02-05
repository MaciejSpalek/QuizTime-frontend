import React, { useEffect, useState } from 'react';
import PreloaderScreen from 'Components/molecules/PreloaderScreen';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import SearchPanel from 'Components/organisms/SearchPanel';
import QuizesList from 'Components/organisms/QuizzesList';
import Header from 'Components/molecules/Header';
import PopularQuizBanner from 'Components/molecules/PopularQuizBanner';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import {
  fetchTheMostPopularQuiz,
  fetchAllQuizzes,
  fetchUsersNames
} from 'services/requests';

const HomePage = () => {
  const [quizzesFetchStatus, setQuizzesFetch] = useState(false);
  const [quiz, setQuiz] = useState<IQuizTemplate | null>(null);
  const [usersFetchStatus, setUsersFetch] = useState(false);
  const [quizzes, setQuizes] = useState([]);
  const [users, setUsers] = useState([]);

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

  const manageQuiz = async () => {
    fetchTheMostPopularQuiz()
      .then(({ data }) => {
        setQuiz(data[0]);
      })
  };

  useEffect(() => {
    setUsersNames();
    setQuizzes();
    manageQuiz();
  }, []);

  return (
    <PageTemplate>
      <SearchPanel
        quizzes={quizzes}
        users={users}
      />
      <Header />
      {quizzesFetchStatus && usersFetchStatus ?
        (
          <>
            {quiz && <PopularQuizBanner quiz={quiz} />}
            <QuizesList quizzes={quizzes} />
          </>
        ) : (
          <PreloaderScreen />
        )}
    </PageTemplate>
  );
};

export default HomePage;