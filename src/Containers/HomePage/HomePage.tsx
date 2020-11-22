import React, { useEffect, useState } from 'react'
import PageTemplate from 'templates/PageTemplate/PageTemplate'
import SearchPanel from 'Components/molecules/SearchPanel/index'
import QuizesList from 'Components/molecules/QuizesList'
import { axiosInstance } from 'services/api'

const HomePage = () => {
  const [quizes, setQuizes] = useState([]);

  const fetchAllQuizes = async () => {
    await axiosInstance.get('/quizes/allQuizzes')
      .then(res => {
        setQuizes(res.data);
      });
  };

  useEffect(() => {
    fetchAllQuizes();
  }, []);

  return (
    <PageTemplate>
      <SearchPanel />
      <QuizesList quizes={quizes} />
    </PageTemplate>
  )
}

export default HomePage;