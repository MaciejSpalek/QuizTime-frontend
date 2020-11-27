import React, { useEffect } from 'react';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import SearchPanel from 'Components/molecules/SearchPanel/index';
import QuizesList from 'Components/molecules/QuizesList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import { fetchAllQuizes } from 'redux/Actions/quizActions';

const HomePage = () => {
  const dispatch = useDispatch()
  const allQuizzes = useSelector<RootState, IQuizTemplate[]>(state => state.quizes.allQuizzes)

  useEffect(() => {
    dispatch(fetchAllQuizes());
  }, [dispatch]);

  return (
    <PageTemplate>
      <SearchPanel />
      <QuizesList quizes={allQuizzes} />
    </PageTemplate>
  )
}

export default HomePage;