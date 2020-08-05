import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import QuizesWrapper from '../Components/organisms/QuizesWrapper/index'
import SearchPanel from '../Components/organisms/SearchPanel/index'

const Home = () => {
  return (
    <PageTemplate>
      <SearchPanel />
      <QuizesWrapper />
    </PageTemplate>  
  )
}  

export default Home;

